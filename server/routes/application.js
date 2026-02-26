import express from 'express';
import {
  submitApplication,
  getApplications,
  getApplication,
  updateApplication,
  getApplicationStats,
} from '../controllers/applicationController.js';
import { validateApplication } from '../middleware/validation.js';
import { validationMiddleware } from '../middleware/errorHandler.js';

const router = express.Router();

// Public endpoints
router.post('/', validateApplication, validationMiddleware, submitApplication);

// Admin endpoints (in production, add authentication middleware here)
router.get('/', getApplications);
router.get('/stats', getApplicationStats);
router.get('/:id', getApplication);
router.patch('/:id', updateApplication);

export default router;
