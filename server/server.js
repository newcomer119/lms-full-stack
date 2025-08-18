import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import connectCloudinary from './configs/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import { clerkWebhooks } from './controllers/webhooks.js'
import educatorRouter from './routes/educatorRoutes.js'
import courseRouter from './routes/courseRoute.js'
import testSeriesRouter from './routes/testSeriesRoutes.js'

// Initialize Express
const app = express()

// Connect to database
await connectDB()
await connectCloudinary()

// CORS configuration
const corsOptions = {
  origin: function (origin, callback) {
    console.log('CORS check - Origin received:', origin);
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      console.log('CORS: Allowing request with no origin');
      return callback(null, true);
    }
    
    const allowedOrigins = [
      'http://localhost:5173',
      'http://localhost:3000',
      'https://lms-full-stack-taupe-six.vercel.app',
      'https://gurukul-classes-iota.vercel.app',
      'https://lms-full-stack-ku7w.vercel.app',
      'https://thegurukulclasses.com',
      'https://www.thegurukulclasses.com',
      'http://www.thegurukulclasses.com',
      'http://thegurukulclasses.com',
    ];
    
    // Check if origin is in allowed list
    if (allowedOrigins.includes(origin)) {
      console.log('CORS: Allowing origin from allowed list:', origin);
      return callback(null, origin); // Return the actual origin instead of true
    }
    
    // Allow subdomains of thegurukulclasses.com
    if (origin.endsWith('.thegurukulclasses.com')) {
      console.log('CORS: Allowing subdomain origin:', origin);
      return callback(null, origin); // Return the actual origin instead of true
    }
    
    // Log blocked origins for debugging
    console.log('CORS: Blocking origin:', origin);
    return callback(new Error('Not allowed by CORS'));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'svix-id', 'svix-timestamp', 'svix-signature'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 86400, // Cache preflight for 24 hours
  preflightContinue: false,
  optionsSuccessStatus: 200 // Some legacy browsers choke on 204
}

// Apply CORS middleware
app.use(cors(corsOptions))

// Handle preflight requests explicitly
app.options('*', cors(corsOptions))

// Additional preflight handler for specific routes
app.options('/api/*', (req, res) => {
  const origin = req.headers.origin;
  if (origin) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, svix-id, svix-timestamp, svix-signature');
  }
  res.status(200).end();
});

// Request logging middleware
app.use((req, res, next) => {
  console.log('=== Request Log ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Origin:', req.headers.origin);
  console.log('Referer:', req.headers.referer);
  console.log('User-Agent:', req.headers['user-agent']);
  console.log('==================');
  next();
});

// Additional CORS headers middleware to ensure proper headers are set
app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  if (origin) {
    // Set the Access-Control-Allow-Origin header to the actual requesting origin
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, svix-id, svix-timestamp, svix-signature');
    
    // Add cache-busting headers to prevent CORS caching issues
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
  }
  
  next();
});

// Response interceptor to ensure CORS headers are always set
app.use((req, res, next) => {
  const originalSend = res.send;
  const originalJson = res.json;
  
  res.send = function(data) {
    const origin = req.headers.origin;
    if (origin) {
      this.header('Access-Control-Allow-Origin', origin);
      this.header('Access-Control-Allow-Credentials', 'true');
    }
    return originalSend.call(this, data);
  };
  
  res.json = function(data) {
    const origin = req.headers.origin;
    if (origin) {
      this.header('Access-Control-Allow-Origin', origin);
      this.header('Access-Control-Allow-Credentials', 'true');
    }
    return originalJson.call(this, data);
  };
  
  next();
});

app.use(express.json())

// Clerk middleware - this will populate req.auth with user information
app.use(clerkMiddleware())

// Routes
app.get('/', (req, res) => res.send("API Working"))

// Test CORS endpoint
app.get('/test-cors', (req, res) => {
  console.log('Origin received:', req.headers.origin);
  console.log('Referer:', req.headers.referer);
  res.json({ 
    success: true, 
    message: 'CORS test successful',
    origin: req.headers.origin,
    referer: req.headers.referer
  });
});

// Test API endpoint without authentication
app.get('/api/test', (req, res) => {
  console.log('API test endpoint - Origin:', req.headers.origin);
  res.json({ 
    success: true, 
    message: 'API test successful',
    origin: req.headers.origin
  });
});

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

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  console.log('Error handler - Origin:', req.headers.origin);
  
  // Ensure CORS headers are set even on errors
  const origin = req.headers.origin;
  if (origin) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, svix-id, svix-timestamp, svix-signature');
  }
  
  // Send error response
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});