import express from 'express'
import { addUserRating, getUserCourseProgress, getUserData, purchaseCourse, updateUserCourseProgress, userEnrolledCourses } from '../controllers/userController.js';
import { phonepeWebhook, manualTestComplete, completeSpecificPurchase } from '../controllers/phonepeController.js'


const userRouter = express.Router()

// Get user Data
userRouter.get('/data', getUserData)
userRouter.post('/purchase', purchaseCourse)
userRouter.get('/enrolled-courses', userEnrolledCourses)
userRouter.post('/update-course-progress', updateUserCourseProgress)
userRouter.post('/get-course-progress', getUserCourseProgress)
userRouter.post('/add-rating', addUserRating)
userRouter.post('/phonepe-webhook', phonepeWebhook)
userRouter.post('/manual-test-complete', manualTestComplete)
userRouter.post('/complete-specific-purchase', completeSpecificPurchase)

export default userRouter;