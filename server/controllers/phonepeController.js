import { Purchase } from '../models/Purchase.js'
import User from '../models/User.js'
import Course from '../models/Course.js'

export const phonepeWebhook = async (req, res) => {
  try {
    // PhonePe sends the payload in req.body, decode and verify as needed
    const event = req.body;
    // Example event structure, adjust as per PhonePe docs
    // {
    //   merchantId, merchantTransactionId, amount, state, ...
    // }
    const { merchantTransactionId, state } = event;
    if (!merchantTransactionId || !state) {
      return res.status(400).json({ success: false, message: 'Invalid webhook payload' });
    }
    const purchase = await Purchase.findById(merchantTransactionId);
    if (!purchase) {
      return res.status(404).json({ success: false, message: 'Purchase not found' });
    }
    if (state === 'COMPLETED') {
      // Mark purchase as completed
      purchase.status = 'completed';
      await purchase.save();
      // Enroll user in course
      const user = await User.findById(purchase.userId);
      const course = await Course.findById(purchase.courseId);
      if (user && course) {
        if (!user.enrolledCourses.includes(course._id)) {
          user.enrolledCourses.push(course._id);
          await user.save();
        }
        if (!course.enrolledStudents.includes(user._id)) {
          course.enrolledStudents.push(user._id);
          await course.save();
        }
      }
    } else if (state === 'FAILED' || state === 'CANCELLED') {
      purchase.status = 'failed';
      await purchase.save();
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

// Manual endpoint for test accounts to complete purchase and enroll user
export const manualTestComplete = async (req, res) => {
  try {
    const { purchaseId } = req.body;
    const purchase = await Purchase.findById(purchaseId);
    if (!purchase) return res.status(404).json({ success: false, message: 'Purchase not found' });
    purchase.status = 'completed';
    await purchase.save();
    // Enroll user
    const user = await User.findById(purchase.userId);
    const course = await Course.findById(purchase.courseId);
    if (user && course) {
      if (!user.enrolledCourses.includes(course._id)) {
        user.enrolledCourses.push(course._id);
        await user.save();
      }
      if (!course.enrolledStudents.includes(user._id)) {
        course.enrolledStudents.push(user._id);
        await course.save();
      }
    }
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
} 