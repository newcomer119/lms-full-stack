import express from 'express'
import { getAllCourse, getCourseId } from '../controllers/courseController.js';


const courseRouter = express.Router()

// Debug middleware for CORS
courseRouter.use((req, res, next) => {
  console.log('Course route - Origin:', req.headers.origin);
  console.log('Course route - Referer:', req.headers.referer);
  console.log('Course route - Method:', req.method);
  
  // Ensure CORS headers are set for course routes
  const origin = req.headers.origin;
  if (origin) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  
  next();
});

// Get All Course
courseRouter.get('/all', getAllCourse)

// Get Course Data By Id
courseRouter.get('/:id', getCourseId)


export default courseRouter;