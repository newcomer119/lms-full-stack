import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import connectCloudinary from './configs/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import { clerkMiddleware, ClerkExpressWithAuth } from '@clerk/express'
import { clerkWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import courseRouter from './routes/courseRoute.js'
import testSeriesRouter from './routes/testSeriesRoutes.js'

// Initialize Express
const app = express()

// Connect to database
await connectDB()
await connectCloudinary()

// Middlewares
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://lms-full-stack-taupe-six.vercel.app',
      'https://gurukul-classes-iota.vercel.app',
      'https://lms-full-stack-ku7w.vercel.app',
      'https://thegurukulclasses.com',
      'https://www.thegurukulclasses.com'
    ];
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      console.log('Allowed origin:', origin);
      return callback(null, true);
    }
    
    // Allow subdomains of thegurukulclasses.com
    if (origin.endsWith('.thegurukulclasses.com')) {
      console.log('Allowed subdomain origin:', origin);
      return callback(null, true);
    }
    
    // Log blocked origins for debugging
    console.log('Blocked origin:', origin);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'svix-id', 'svix-timestamp', 'svix-signature'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 86400, // Cache preflight for 24 hours
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}))

// Add CORS headers to all responses as a fallback
app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  if (origin && (
    origin === 'https://thegurukulclasses.com' ||
    origin === 'https://www.thegurukulclasses.com' ||
    origin.endsWith('.thegurukulclasses.com')
  )) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, svix-id, svix-timestamp, svix-signature');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  next();
})
app.use(express.json())

// Clerk middleware with proper configuration
app.use(ClerkExpressWithAuth({
  secretKey: process.env.CLERK_SECRET_KEY,
  publishableKey: process.env.CLERK_PUBLISHABLE_KEY,
  // This will populate req.auth with user information
  onError: (err, req, res) => {
    console.error('Clerk middleware error:', err);
    res.status(401).json({ success: false, message: 'Authentication failed' });
  }
}))

// Routes
app.get('/', (req, res) => res.send("API Working"))
app.post('/clerk', express.json() , clerkWebhooks)
app.use('/api/educator', educatorRouter)
app.use('/api/course', courseRouter)
app.use('/api/user', userRouter)
app.use('/api/testseries', testSeriesRouter)

// Port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

// Global error handler to ensure CORS headers are always sent
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  
  // Ensure CORS headers are set even on errors
  const origin = req.headers.origin;
  if (origin && (
    origin === 'https://thegurukulclasses.com' ||
    origin === 'https://www.thegurukulclasses.com' ||
    origin.endsWith('.thegurukulclasses.com')
  )) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, svix-id, svix-timestamp, svix-signature');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Send error response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});