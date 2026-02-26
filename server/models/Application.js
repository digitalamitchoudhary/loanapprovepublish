import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please provide a valid email'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      match: [/^\d{10}$/, 'Phone must be exactly 10 digits'],
    },
    loanType: {
      type: String,
      enum: ['personal', 'home', 'business', 'car'],
      required: [true, 'Loan type is required'],
    },
    loanAmount: {
      type: Number,
      required: [true, 'Loan amount is required'],
      min: [10000, 'Minimum loan amount is ₹10,000'],
      max: [10000000, 'Maximum loan amount is ₹1 Crore'],
    },
    employmentType: {
      type: String,
      enum: ['salaried', 'self-employed', 'business-owner', 'retired'],
      required: [true, 'Employment type is required'],
    },
    annualIncome: {
      type: Number,
      required: [true, 'Annual income is required'],
      min: [100000, 'Annual income must be at least ₹1 Lakh'],
    },
    businessType: String, // For business loans
    yearsInBusiness: Number, // For business loans
    creditScore: {
      type: String,
      enum: ['excellent', 'good', 'fair', 'poor'],
    },
    documents: {
      aadhaar: Boolean,
      pan: Boolean,
      salarySlips: Boolean,
      bankStatements: Boolean,
      propertyDocs: Boolean,
    },
    status: {
      type: String,
      enum: ['submitted', 'under-review', 'approved', 'rejected', 'disbursed'],
      default: 'submitted',
    },
    adminNotes: String,
    appliedAt: {
      type: Date,
      default: Date.now,
    },
    ipAddress: String,
    userAgent: String,
  },
  { timestamps: true }
);

export const Application = mongoose.model('Application', applicationSchema);
