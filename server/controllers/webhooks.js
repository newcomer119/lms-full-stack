import { Webhook } from "svix";
import User from "../models/User.js";

// API Controller Function to Manage Clerk User with database
export const clerkWebhooks = async (req, res) => {
  try {
    console.log('Webhook received:', {
      type: req.body?.type,
      userId: req.body?.data?.id,
      headers: {
        'svix-id': req.headers["svix-id"],
        'svix-timestamp': req.headers["svix-timestamp"],
        'svix-signature': req.headers["svix-signature"] ? 'present' : 'missing'
      }
    });

    // Check if webhook secret is configured
    if (!process.env.CLERK_WEBHOOK_SECRET) {
      console.error('CLERK_WEBHOOK_SECRET is not configured');
      return res.status(500).json({ success: false, message: 'Webhook secret not configured' });
    }

    // Create a Svix instance with clerk webhook secret.
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verifying Headers
    try {
      await whook.verify(JSON.stringify(req.body), {
        "svix-id": req.headers["svix-id"],
        "svix-timestamp": req.headers["svix-timestamp"],
        "svix-signature": req.headers["svix-signature"]
      });
      console.log('Webhook signature verified successfully');
    } catch (verificationError) {
      console.error('Webhook signature verification failed:', verificationError.message);
      return res.status(400).json({ success: false, message: 'Invalid webhook signature' });
    }

    // Getting Data from request body
    const { data, type } = req.body;

    if (!data || !type) {
      console.error('Invalid webhook payload:', req.body);
      return res.status(400).json({ success: false, message: 'Invalid webhook payload' });
    }

    console.log('Processing webhook:', { type, userId: data.id });

    // Switch Cases for different Events
    switch (type) {
      case 'user.created': {
        try {
          const userData = {
            _id: data.id,
            email: data.email_addresses?.[0]?.email_address || '',
            name: `${data.first_name || ''} ${data.last_name || ''}`.trim() || 'Unknown User',
            imageUrl: data.image_url || '',
            enrolledCourses: []
          };

          console.log('Creating user with data:', userData);
          const newUser = await User.create(userData);
          console.log('User created successfully:', newUser._id);
          
          res.json({ success: true, message: 'User created' });
        } catch (createError) {
          console.error('Error creating user:', createError);
          res.status(500).json({ success: false, message: createError.message });
        }
        break;
      }

      case 'user.updated': {
        try {
          const userData = {
            email: data.email_addresses?.[0]?.email_address || '',
            name: `${data.first_name || ''} ${data.last_name || ''}`.trim() || 'Unknown User',
            imageUrl: data.image_url || '',
          };

          console.log('Updating user:', data.id, 'with data:', userData);
          const updatedUser = await User.findByIdAndUpdate(data.id, userData, { new: true });
          
          if (updatedUser) {
            console.log('User updated successfully:', updatedUser._id);
            res.json({ success: true, message: 'User updated' });
          } else {
            console.log('User not found for update, creating new user');
            // If user doesn't exist, create them
            const newUser = await User.create({
              _id: data.id,
              ...userData,
              enrolledCourses: []
            });
            console.log('User created during update:', newUser._id);
            res.json({ success: true, message: 'User created during update' });
          }
        } catch (updateError) {
          console.error('Error updating user:', updateError);
          res.status(500).json({ success: false, message: updateError.message });
        }
        break;
      }

      case 'user.deleted': {
        try {
          console.log('Deleting user:', data.id);
          const deletedUser = await User.findByIdAndDelete(data.id);
          if (deletedUser) {
            console.log('User deleted successfully:', data.id);
          } else {
            console.log('User not found for deletion:', data.id);
          }
          res.json({ success: true, message: 'User deleted' });
        } catch (deleteError) {
          console.error('Error deleting user:', deleteError);
          res.status(500).json({ success: false, message: deleteError.message });
        }
        break;
      }

      default:
        console.log('Unhandled webhook type:', type);
        res.json({ success: true, message: 'Webhook received but not processed' });
        break;
    }

  } catch (error) {
    console.error('Webhook processing error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};