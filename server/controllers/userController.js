import Course from "../models/Course.js"
import { CourseProgress } from "../models/CourseProgress.js"
import { Purchase } from "../models/Purchase.js"
import User from "../models/User.js"


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

// Purchase Course (Payment temporarily disabled for testing)
export const purchaseCourse = async (req, res) => {
    try {
        const { courseId } = req.body;
        const userId = req.auth.userId;
        const courseData = await Course.findById(courseId);
        const userData = await User.findById(userId);
        
        if (!userData || !courseData) {
            return res.json({ success: false, message: 'Data Not Found' });
        }

        // Check if user is already enrolled
        if (userData.enrolledCourses.includes(courseId)) {
            return res.json({ success: false, message: 'Already enrolled in this course' });
        }

        // Create purchase record with completed status (no payment required for now)
        const purchaseData = {
            courseId: courseData._id,
            userId,
            amount: (courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2),
            status: 'completed' // Mark as completed without payment
        };
        
        const newPurchase = await Purchase.create(purchaseData);

        // Add course to user's enrolled courses
        userData.enrolledCourses.push(courseId);
        await userData.save();

        // Add user to course's enrolled students
        courseData.enrolledStudents.push(userId);
        await courseData.save();

        console.log('User enrolled courses updated:', userData.enrolledCourses);
        console.log('Course enrolled students updated:', courseData.enrolledStudents);

        res.json({ 
            success: true, 
            message: 'Course enrolled successfully!',
            purchaseId: newPurchase._id.toString()
        });

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

        if (!userData) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.json({ success: true, enrolledCourses: userData.enrolledCourses || [] })

    } catch (error) {
        console.error('Error getting enrolled courses:', error);
        res.status(500).json({ success: false, message: error.message })
    }

}

// Update User Course Progress
export const updateUserCourseProgress = async (req, res) => {

    try {

        const userId = req.auth.userId

        const { courseId, lectureId } = req.body

        console.log('Updating progress for user:', userId, 'course:', courseId, 'lecture:', lectureId);

        const progressData = await CourseProgress.findOne({ userId, courseId })

        if (progressData) {

            if (progressData.lectureCompleted.includes(lectureId)) {
                return res.json({ success: true, message: 'Lecture Already Completed' })
            }

            progressData.lectureCompleted.push(lectureId)
            await progressData.save()
            console.log('Progress updated for existing record:', progressData);

        } else {

            const newProgress = await CourseProgress.create({
                userId,
                courseId,
                lectureCompleted: [lectureId]
            })
            console.log('New progress record created:', newProgress);

        }

        res.json({ success: true, message: 'Progress Updated' })

    } catch (error) {
        console.error('Error updating course progress:', error);
        res.status(500).json({ success: false, message: error.message })
    }

}

// get User Course Progress
export const getUserCourseProgress = async (req, res) => {

    try {

        const userId = req.auth.userId

        const { courseId } = req.body

        if (!courseId) {
            return res.status(400).json({ success: false, message: 'Course ID is required' });
        }

        console.log('Getting progress for user:', userId, 'course:', courseId);

        const progressData = await CourseProgress.findOne({ userId, courseId })

        console.log('Progress data found:', progressData);

        res.json({ success: true, progressData: progressData || { lectureCompleted: [] } })

    } catch (error) {
        console.error('Error getting course progress:', error);
        res.status(500).json({ success: false, message: error.message })
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