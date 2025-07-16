import Course from "../models/Course.js"
import { CourseProgress } from "../models/CourseProgress.js"
import { Purchase } from "../models/Purchase.js"
import User from "../models/User.js"
import { StandardCheckoutClient, Env, MetaInfo, StandardCheckoutPayRequest } from 'pg-sdk-node';
import { randomUUID } from 'crypto';


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
    // Log at the very start
    console.log('purchaseCourse called');
    const clientId = process.env.PHONEPE_CLIENT_ID || '<clientId>';
    const clientSecret = process.env.PHONEPE_CLIENT_SECRET || '<clientSecret>';
    const clientVersion = 1; // Set your client version
    const env = Env.SANDBOX; // Use Env.PRODUCTION when live
    console.log('PhonePe clientId:', clientId);
    console.log('PhonePe clientSecret:', clientSecret);
    try {
        const { courseId } = req.body;
        const { origin } = req.headers;
        const userId = req.auth.userId;
        const courseData = await Course.findById(courseId);
        const userData = await User.findById(userId);
        if (!userData || !courseData) {
            return res.json({ success: false, message: 'Data Not Found' });
        }
        const purchaseData = {
            courseId: courseData._id,
            userId,
            amount: (courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2),
        };
        const newPurchase = await Purchase.create(purchaseData);
        // PhonePe SDK Payment Initiation
        const client = StandardCheckoutClient.getInstance(clientId, clientSecret, clientVersion, env);
        const merchantOrderId = newPurchase._id.toString();
        const amount = Math.floor(newPurchase.amount * 100); // in paise
        const redirectUrl = `${origin}/loading/my-enrollments`;
        const metaInfo = MetaInfo.builder()
            .udf1(userId)
            .udf2(courseData._id.toString())
            .build();
        const request = StandardCheckoutPayRequest.builder()
            .merchantOrderId(merchantOrderId)
            .amount(amount)
            .redirectUrl(redirectUrl)
            .metaInfo(metaInfo)
            .build();
        try {
            const response = await client.pay(request);
            console.log('PhonePe SDK Response:', response);
            if (response && response.redirectUrl) {
                res.json({ 
                    success: true, 
                    session_url: response.redirectUrl,
                    purchaseId: newPurchase._id.toString() // Return purchaseId for test completion
                });
            } else {
                res.json({ success: false, message: 'PhonePe payment initiation failed', details: response });
            }
        } catch (sdkError) {
            console.error('PhonePe SDK Error:', sdkError);
            res.status(400).json({ success: false, message: 'PhonePe SDK error', details: sdkError.message || sdkError });
        }
    } catch (error) {
        res.json({ success: false, message: error.message });
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