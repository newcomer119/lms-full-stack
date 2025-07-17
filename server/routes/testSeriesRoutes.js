import express from 'express';
import { createTestSeries, getAllTestSeries, getTestSeriesById, submitTestResult, getUserTestResult } from '../controllers/testSeriesController.js';
import upload from '../configs/multer.js';
import { protectEducator, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Create test series (educator)
router.post('/', upload.single('image'), protectEducator, createTestSeries);
// List all test series
router.get('/', getAllTestSeries);
// Get test series by id
router.get('/:id', getTestSeriesById);
// Submit test result (student)
router.post('/:id/submit', protect, submitTestResult);
// Get user's result for a test series
router.get('/:id/result', protect, getUserTestResult);

export default router; 