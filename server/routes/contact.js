import express from 'express';
import { submitContact, getContacts, getContact, updateContactStatus, deleteContact } from '../controllers/contactController.js';
import { validateContact } from '../middleware/validation.js';
import { validationMiddleware } from '../middleware/errorHandler.js';

const router = express.Router();

// Public endpoints
router.post('/', validateContact, validationMiddleware, submitContact);

// Admin endpoints (in production, add authentication middleware here)
router.get('/', getContacts);
router.get('/:id', getContact);
router.patch('/:id', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
