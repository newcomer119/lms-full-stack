import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import axios from 'axios'
import { Line } from 'rc-progress';
import Footer from '../../components/student/Footer';
import { toast } from 'react-toastify';

const MyEnrollments = () => {

    const { userData, enrolledCourses, fetchUserEnrolledCourses, navigate, backendUrl, getToken, calculateCourseDuration, calculateNoOfLectures } = useContext(AppContext)

    const [progressArray, setProgressData] = useState([])

    const getCourseProgress = async () => {
        try {
            const token = await getToken();
            console.log('Getting course progress for courses:', enrolledCourses);

            // Use Promise.all to handle multiple async operations
            const tempProgressArray = await Promise.all(
                enrolledCourses.map(async (course) => {
                    try {
                        const { data } = await axios.post(
                            `${backendUrl}/api/user/get-course-progress`,
                            { courseId: course._id },
                            { headers: { Authorization: `Bearer ${token}` } }
                        );

                        // Calculate total lectures
                        let totalLectures = calculateNoOfLectures(course);

                        const lectureCompleted = data.progressData ? data.progressData.lectureCompleted.length : 0;
                        console.log(`Course ${course.courseTitle}: ${lectureCompleted}/${totalLectures} completed`);
                        return { totalLectures, lectureCompleted };
                    } catch (error) {
                        console.error(`Error getting progress for course ${course._id}:`, error);
                        return { totalLectures: 0, lectureCompleted: 0 };
                    }
                })
            );

            console.log('Progress array:', tempProgressArray);
            setProgressData(tempProgressArray);
        } catch (error) {
            console.error('Error in getCourseProgress:', error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (userData) {
            fetchUserEnrolledCourses()
        }
    }, [userData])

    useEffect(() => {
        console.log('enrolledCourses changed:', enrolledCourses);
        if (enrolledCourses.length > 0) {
            getCourseProgress()
        }
    }, [enrolledCourses])

    return (
        <>

            <div className='md:px-36 px-8 pt-10'>

                <h1 className='text-2xl font-semibold'>My Enrollments</h1>

                <table className="md:table-auto table-fixed w-full overflow-hidden border mt-10">
                    <thead className="text-gray-900 border-b border-gray-500/20 text-sm text-left max-sm:hidden">
                        <tr>
                            <th className="px-4 py-3 font-semibold truncate">Course</th>
                            <th className="px-4 py-3 font-semibold truncate max-sm:hidden">Duration</th>
                            <th className="px-4 py-3 font-semibold truncate max-sm:hidden">Completed</th>
                            <th className="px-4 py-3 font-semibold truncate">Status</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {enrolledCourses.map((course, index) => (
                            <tr key={index} className="border-b border-gray-500/20">
                                <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 ">
                                    <img src={course.courseThumbnail} alt="" className="w-14 sm:w-24 md:w-28" />
                                    <div className='flex-1'>
                                        <p className='mb-1 max-sm:text-sm'>{course.courseTitle}</p>
                                        <Line className='bg-gray-300 rounded-full' strokeWidth={2} percent={progressArray[index] ? (progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures : 0} />
                                    </div>
                                </td>
                                <td className="px-4 py-3 max-sm:hidden">{calculateCourseDuration(course)}</td>
                                <td className="px-4 py-3 max-sm:hidden">
                                    {progressArray[index] ? (
                                        `${progressArray[index].lectureCompleted} / ${progressArray[index].totalLectures}`
                                    ) : (
                                        '0 / 0'
                                    )}
                                    <span className='text-xs ml-2'>Lectures</span>
                                </td>
                                <td className="px-4 py-3 max-sm:text-right">
                                    <button onClick={() => navigate('/player/' + course._id)} className='px-3 sm:px-5 py-1.5 sm:py-2 bg-blue-600 max-sm:text-xs text-white'>
                                        {progressArray[index] && progressArray[index].lectureCompleted / progressArray[index].totalLectures === 1 ? 'Completed' : 'On Going'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <Footer />

        </>
    )
}

export default MyEnrollments