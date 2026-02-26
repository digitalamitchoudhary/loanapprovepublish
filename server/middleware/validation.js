import { body } from 'express-validator';

export const validateContact = [
  body('name')
    .trim()
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('phone')
    .custom((value) => {
      // Remove spaces, dashes, and parentheses
      const cleaned = value.replace(/[\s\-()]/g, '');
      // Check if it's exactly 10 digits
      if (!/^\d{10}$/.test(cleaned)) {
        throw new Error('Phone must be exactly 10 digits');
      }
      return true;
    }),
  body('message')
    .trim()
    .notEmpty()
    .withMessage('Message is required')
    .isLength({ min: 10 })
    .withMessage('Message must be at least 10 characters'),
  body('subject')
    .optional()
    .trim(),
];

export const validateApplication = [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First name is required'),
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last name is required'),
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email')
    .normalizeEmail(),
  body('phone')
    .custom((value) => {
      // Remove spaces, dashes, and parentheses
      const cleaned = value.replace(/[\s\-()]/g, '');
      // Check if it's exactly 10 digits
      if (!/^\d{10}$/.test(cleaned)) {
        throw new Error('Phone must be exactly 10 digits');
      }
      return true;
    }),
  body('loanType')
    .isIn(['personal', 'home', 'business', 'car'])
    .withMessage('Invalid loan type'),
  body('loanAmount')
    .isInt({ min: 10000, max: 10000000 })
    .withMessage('Loan amount must be between ₹10,000 and ₹1 Crore'),
  body('employmentType')
    .isIn(['salaried', 'self-employed', 'business-owner', 'retired'])
    .withMessage('Invalid employment type'),
  body('annualIncome')
    .isInt({ min: 100000 })
    .withMessage('Annual income must be at least ₹1 Lakh'),
  body('creditScore')
    .optional()
    .isIn(['excellent', 'good', 'fair', 'poor'])
    .withMessage('Invalid credit score'),
];
