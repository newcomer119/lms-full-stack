import Course from "../models/Course.js"
import { CourseProgress } from "../models/CourseProgress.js"
import { Purchase } from "../models/Purchase.js"
import User from "../models/User.js"
import axios from "axios"
import crypto from "crypto"


// Get User Data
export const getUserData = async (req, res) => {
    try {

        const userId = req.auth.userId

        const user = await User.findById(userId)

        if (!user) {
            return res.json({ success: false, message: 'User Not Found' })
        }

        res.json({ success: true, user })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Purchase Course 
export const purchaseCourse = async (req, res) => {
    try {
        const { courseId } = req.body
        const { origin } = req.headers
        const userId = req.auth.userId
        const courseData = await Course.findById(courseId)
        const userData = await User.findById(userId)
        if (!userData || !courseData) {
            return res.json({ success: false, message: 'Data Not Found' })
        }
        const purchaseData = {
            courseId: courseData._id,
            userId,
            amount: (courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2),
        }
        const newPurchase = await Purchase.create(purchaseData)
        // PhonePe Payment Initiation
        const merchantId = process.env.PHONEPE_MERCHANT_ID || 'TEST-M23WZA4AO5BZG_25071'
        const saltKey = process.env.PHONEPE_SALT_KEY || 'MzVmZjRiMGMtMTgxNC00ZjZhLTkyNGItMDc4ZTdmY2JmYTY4'
        const baseUrl = 'https://api-preprod.phonepe.com/apis/pg-sandbox'
        const amountPaise = Math.floor(newPurchase.amount * 100)
        const redirectUrl = `${origin}/loading/my-enrollments`
        const callbackUrl = `${process.env.BACKEND_URL || 'http://localhost:5000'}/api/user/phonepe-webhook`
        const payload = {
            merchantId,
            merchantTransactionId: newPurchase._id.toString(),
            merchantUserId: userId,
            amount: amountPaise,
            redirectUrl,
            callbackUrl,
            paymentInstrument: {
                type: 'PAY_PAGE'
            }
        }
        const payloadBase64 = Buffer.from(JSON.stringify(payload)).toString('base64')
        const xVerify = crypto.createHash('sha256').update(payloadBase64 + '/pg/v1/pay' + saltKey).digest('hex') + '###1'
        const response = await axios.post(
            `${baseUrl}/pg/v1/pay`,
            { request: payloadBase64 },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-VERIFY': xVerify,
                    'X-MERCHANT-ID': merchantId
                }
            }
        )
        if (response.data.success && response.data.data && response.data.data.instrumentResponse && response.data.data.instrumentResponse.redirectInfo && response.data.data.instrumentResponse.redirectInfo.url) {
            res.json({ success: true, session_url: response.data.data.instrumentResponse.redirectInfo.url })
        } else {
            res.json({ success: false, message: 'PhonePe payment initiation failed', details: response.data })
        }
    } catch (error) {
        res.json({ success: false, message: error.message })
    }
}

// Users Enrolled Courses With Lecture Links
export const userEnrolledCourses = async (req, res) => {

    try {

        const userId = req.auth.userId

        const userData = await User.findById(userId)
            .populate('enrolledCourses')

        res.json({ success: true, enrolledCourses: userData.enrolledCourses })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

// Update User Course Progress
export const updateUserCourseProgress = async (req, res) => {

    try {

        const userId = req.auth.userId

        const { courseId, lectureId } = req.body

        const progressData = await CourseProgress.findOne({ userId, courseId })

        if (progressData) {

            if (progressData.lectureCompleted.includes(lectureId)) {
                return res.json({ success: true, message: 'Lecture Already Completed' })
            }

            progressData.lectureCompleted.push(lectureId)
            await progressData.save()

        } else {

            await CourseProgress.create({
                userId,
                courseId,
                lectureCompleted: [lectureId]
            })

        }

        res.json({ success: true, message: 'Progress Updated' })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

// get User Course Progress
export const getUserCourseProgress = async (req, res) => {

    try {

        const userId = req.auth.userId

        const { courseId } = req.body

        const progressData = await CourseProgress.findOne({ userId, courseId })

        res.json({ success: true, progressData })

    } catch (error) {
        res.json({ success: false, message: error.message })
    }

}

// Add User Ratings to Course
export const addUserRating = async (req, res) => {

    const userId = req.auth.userId;
    const { courseId, rating } = req.body;

    // Validate inputs
    if (!courseId || !userId || !rating || rating < 1 || rating > 5) {
        return res.json({ success: false, message: 'InValid Details' });
    }

    try {
        // Find the course by ID
        const course = await Course.findById(courseId);

        if (!course) {
            return res.json({ success: false, message: 'Course not found.' });
        }

        const user = await User.findById(userId);

        if (!user || !user.enrolledCourses.includes(courseId)) {
            return res.json({ success: false, message: 'User has not purchased this course.' });
        }

        // Check is user already rated
        const existingRatingIndex = course.courseRatings.findIndex(r => r.userId === userId);

        if (existingRatingIndex > -1) {
            // Update the existing rating
            course.courseRatings[existingRatingIndex].rating = rating;
        } else {
            // Add a new rating
            course.courseRatings.push({ userId, rating });
        }

        await course.save();

        return res.json({ success: true, message: 'Rating added' });
    } catch (error) {
        return res.json({ success: false, message: error.message });
    }
};