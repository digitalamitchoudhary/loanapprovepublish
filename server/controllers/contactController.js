import { Contact } from '../models/Contact.js';
import { sendContactConfirmation, sendContactNotification } from '../utils/emailService.js';
import { asyncHandler } from '../middleware/errorHandler.js';

export const submitContact = asyncHandler(async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  const ipAddress = req.ip;
  const userAgent = req.get('user-agent');

  // Create contact record
  const contact = await Contact.create({
    name,
    email,
    phone,
    subject,
    message,
    ipAddress,
    userAgent,
  });

  // Send emails in background - don't wait for them
  // Email failures should not block the response
  sendContactConfirmation(email, name).catch((err) => {
    console.error('Failed to send contact confirmation email:', err.message);
  });

  sendContactNotification(contact).catch((err) => {
    console.error('Failed to send contact notification email:', err.message);
  });

  // Append to Google Sheets (if configured)
  import('../utils/googleSheets.js').then(({ appendContact }) => {
    appendContact(contact).catch((err) => {
      console.error('Failed to append contact to Google Sheets:', err.message);
    });
  }).catch(() => {});

  res.status(201).json({
    success: true,
    message: 'Your message has been sent successfully. We will get back to you within 24 hours.',
    data: {
      contactId: contact._id,
    },
  });
});

export const getContacts = asyncHandler(async (req, res) => {
  const { status = null, page = 1, limit = 10 } = req.query;

  const filter = status ? { status } : {};
  const skip = (page - 1) * limit;

  const contacts = await Contact.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(parseInt(limit));

  const total = await Contact.countDocuments(filter);

  res.json({
    success: true,
    total,
    page: parseInt(page),
    limit: parseInt(limit),
    pages: Math.ceil(total / limit),
    contacts,
  });
});

export const getContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found',
    });
  }

  // Mark as read
  if (contact.status === 'new') {
    contact.status = 'read';
    await contact.save();
  }

  res.json({
    success: true,
    contact,
  });
});

export const updateContactStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;

  const contact = await Contact.findByIdAndUpdate(
    req.params.id,
    { status },
    { new: true, runValidators: true }
  );

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found',
    });
  }

  res.json({
    success: true,
    message: 'Contact status updated',
    contact,
  });
});

export const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: 'Contact not found',
    });
  }

  res.json({
    success: true,
    message: 'Contact deleted successfully',
  });
});
