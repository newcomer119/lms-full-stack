import mongoose from 'mongoose';
import 'dotenv/config';
import Course from './models/Course.js';
import { clerkClient } from '@clerk/express';

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Migration function to update instructor names
const migrateInstructorNames = async () => {
  try {
    console.log('Starting instructor name migration...');
    
    // Find all courses without instructor names
    const courses = await Course.find({ instructorName: { $exists: false } });
    console.log(`Found ${courses.length} courses without instructor names`);
    
    for (const course of courses) {
      try {
        // Get educator name from Clerk
        const educatorUser = await clerkClient.users.getUser(course.educator);
        const educatorName = `${educatorUser.firstName || ''} ${educatorUser.lastName || ''}`.trim() || 'Unknown Instructor';
        
        // Update the course with instructor name
        course.instructorName = educatorName;
        await course.save();
        
        console.log(`Updated course "${course.courseTitle}" with instructor name: ${educatorName}`);
      } catch (error) {
        console.error(`Error updating course ${course._id}:`, error.message);
        // Set a default name if Clerk lookup fails
        course.instructorName = 'Unknown Instructor';
        await course.save();
      }
    }
    
    console.log('Instructor name migration completed successfully!');
  } catch (error) {
    console.error('Migration error:', error);
  } finally {
    mongoose.disconnect();
    console.log('MongoDB disconnected');
  }
};

// Run migration
connectDB().then(() => {
  migrateInstructorNames();
});
