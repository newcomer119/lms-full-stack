import Course from "../models/Course.js"


// Get All Courses
export const getAllCourse = async (req, res) => {
    try {

        const courses = await Course.find()
            .select(['-courseContent', '-enrolledStudents'])
            .populate({ path: 'educator', select: '-password' })

        res.json({ success: true, courses })

    } catch (error) {
        console.error('Error getting all courses:', error);
        res.status(500).json({ success: false, message: error.message })
    }

}

// Get Course by Id
export const getCourseId = async (req, res) => {

    const { id } = req.params

    try {

        const courseData = await Course.findById(id)
            .populate({ path: 'educator'})

        if (!courseData) {
            return res.status(404).json({ success: false, message: 'Course not found' });
        }

        // Remove lectureUrl if isPreviewFree is false
        courseData.courseContent.forEach(chapter => {
            chapter.chapterContent.forEach(lecture => {
                if (!lecture.isPreviewFree) {
                    lecture.lectureUrl = "";
                }
            });
        });

        res.json({ success: true, courseData })

    } catch (error) {
        console.error('Error getting course by ID:', error);
        res.status(500).json({ success: false, message: error.message })
    }

} 