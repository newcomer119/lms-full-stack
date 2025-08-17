import { clerkClient } from "@clerk/express"

// Middleware ( Protect User Routes )
export const protectUser = async (req, res, next) => {
    try {
        const userId = req.auth?.userId
        
        if (!userId) {
            console.error('No userId found in req.auth:', req.auth);
            return res.status(401).json({ success: false, message: 'Authentication required' });
        }

        // Verify the user exists in Clerk
        try {
            const clerkUser = await clerkClient.users.getUser(userId);
            if (!clerkUser) {
                return res.status(401).json({ success: false, message: 'User not found in Clerk' });
            }
        } catch (clerkError) {
            console.error('Error verifying user with Clerk:', clerkError);
            return res.status(401).json({ success: false, message: 'Invalid user token' });
        }
        
        next()
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(500).json({ success: false, message: 'Authentication error' })
    }
}

// Middleware ( Protect Educator Routes )
export const protectEducator = async (req,res,next) => {

    try {

        const userId = req.auth?.userId
        
        if (!userId) {
            return res.status(401).json({ success: false, message: 'Authentication required' });
        }
        
        const response = await clerkClient.users.getUser(userId)

        if (response.publicMetadata.role !== 'educator') {
            return res.json({success:false, message: 'Unauthorized Access'})
        }
        
        next ()

    } catch (error) {
        res.json({success:false, message: error.message})
    }

}