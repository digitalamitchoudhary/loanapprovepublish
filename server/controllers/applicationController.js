import { Application } from '../models/Application.js';
import { sendApplicationConfirmation, sendApplicationNotification } from '../utils/emailService.js';
import { asyncHandler } from '../middleware/errorHandler.js';

export const submitApplication = asyncHandler(async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    loanType,
    loanAmount,
    employmentType,
    annualIncome,
    businessType,
    yearsInBusiness,
    creditScore,
    documents,
  } = req.body;

  const ipAddress = req.ip;
  const userAgent = req.get('user-agent');

  // Create application record
  const application = await Application.create({
    firstName,
    lastName,
    email,
    phone,
    loanType,
    loanAmount,
    employmentType,
    annualIncome,
    businessType,
    yearsInBusiness,
    creditScore,
    documents,
    ipAddress,
    userAgent,
  });

  // Send emails in background - don't wait for them
  // Email failures should not block the response
  sendApplicationConfirmation(application).catch((err) => {
    console.error('Failed to send application confirmation email:', err.message);
  });

  sendApplicationNotification(application).catch((err) => {
    console.error('Failed to send application notification email:', err.message);
  });

  // Append to Google Sheets (if configured)
  import('../utils/googleSheets.js').then(({ appendApplication }) => {
    appendApplication(application).catch((err) => {
      console.error('Failed to append application to Google Sheets:', err.message);
    });
  }).catch(() => {});

  res.status(201).json({
    success: true,
    message: 'Your application has been submitted successfully. Our team will review it within 2-3 business days.',
    data: {
      applicationId: application._id,
    },
  });
});

export const getApplications = asyncHandler(async (req, res) => {
  const { status = null, loanType = null, page = 1, limit = 10 } = req.query;

  const filter = {};
  if (status) filter.status = status;
  if (loanType) filter.loanType = loanType;

  const skip = (page - 1) * limit;

  const applications = await Application.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit));

  const total = await Application.countDocuments(filter);

  res.json({
    success: true,
    total,
    page: parseInt(page),
    limit: parseInt(limit),
    pages: Math.ceil(total / limit),
    applications,
  });
});

export const getApplication = asyncHandler(async (req, res) => {
  const application = await Application.findById(req.params.id);

  if (!application) {
    return res.status(404).json({
      success: false,
      message: 'Application not found',
    });
  }

  res.json({
    success: true,
    application,
  });
});

export const updateApplication = asyncHandler(async (req, res) => {
  const { status, adminNotes } = req.body;

  const allowedUpdates = ['status', 'adminNotes'];
  const updates = {};
  Object.keys(req.body).forEach((key) => {
    if (allowedUpdates.includes(key)) {
      updates[key] = req.body[key];
    }
  });

  const application = await Application.findByIdAndUpdate(
    req.params.id,
    updates,
    { new: true, runValidators: true }
  );

  if (!application) {
    return res.status(404).json({
      success: false,
      message: 'Application not found',
    });
  }

  res.json({
    success: true,
    message: 'Application updated successfully',
    application,
  });
});

export const getApplicationStats = asyncHandler(async (req, res) => {
  const stats = await Application.aggregate([
    {
      $group: {
        _id: '$loanType',
        count: { $sum: 1 },
        totalAmount: { $sum: '$loanAmount' },
        avgAmount: { $avg: '$loanAmount' },
      },
    },
  ]);

  const statusStats = await Application.aggregate([
    {
      $group: {
        _id: '$status',
        count: { $sum: 1 },
      },
    },
  ]);

  const totalApplications = await Application.countDocuments();
  const totalAmount = await Application.aggregate([
    {
      $group: {
        _id: null,
        total: { $sum: '$loanAmount' },
      },
    },
  ]);

  res.json({
    success: true,
    stats: {
      total: totalApplications,
      totalAmount: totalAmount[0]?.total || 0,
      byLoanType: stats,
      byStatus: statusStats,
    },
  });
});
