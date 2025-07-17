import TestSeries from '../models/TestSeries.js';
import TestResult from '../models/TestResult.js';
import { v2 as cloudinary } from 'cloudinary';

// Create a new test series (educator)
export const createTestSeries = async (req, res) => {
  try {
    const { testSeriesData } = req.body;
    const imageFile = req.file;
    const educatorId = req.auth.userId;
    if (!testSeriesData) {
      return res.status(400).json({ success: false, message: 'Test series data required' });
    }
    const parsedData = JSON.parse(testSeriesData);
    parsedData.createdBy = educatorId;
    if (imageFile) {
      const imageUpload = await cloudinary.uploader.upload(imageFile.path);
      parsedData.image = imageUpload.secure_url;
    }
    const newTestSeries = await TestSeries.create(parsedData);
    res.json({ success: true, testSeries: newTestSeries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all test series
export const getAllTestSeries = async (req, res) => {
  try {
    const testSeries = await TestSeries.find().sort({ createdAt: -1 });
    res.json({ success: true, testSeries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get test series by ID
export const getTestSeriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const testSeries = await TestSeries.findById(id);
    if (!testSeries) {
      return res.status(404).json({ success: false, message: 'Test series not found' });
    }
    res.json({ success: true, testSeries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Submit test result (student)
export const submitTestResult = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { testSeriesId, answers } = req.body;
    const testSeries = await TestSeries.findById(testSeriesId);
    if (!testSeries) {
      return res.status(404).json({ success: false, message: 'Test series not found' });
    }
    // Calculate score
    let score = 0;
    testSeries.questions.forEach((q, idx) => {
      const userAnswer = answers.find(a => String(a.questionId) === String(q._id));
      if (userAnswer && userAnswer.selectedOption === q.correctOption) {
        score++;
      }
    });
    // Save result
    const result = await TestResult.create({
      userId,
      testSeriesId,
      answers,
      score,
    });
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get user's result for a test series
export const getUserTestResult = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { testSeriesId } = req.query;
    const result = await TestResult.findOne({ userId, testSeriesId });
    if (!result) {
      return res.status(404).json({ success: false, message: 'Result not found' });
    }
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}; 