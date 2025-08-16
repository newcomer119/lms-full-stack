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

// Middlewares
app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://lms-full-stack-taupe-six.vercel.app',
    'https://gurukul-classes-iota.vercel.app',
    'https://lms-full-stack-ku7w.vercel.app',
    'https://thegurukulclasses.com' // <-- no trailing slash
  ],
  credentials: true
}))
app.use(express.json())
app.use(clerkMiddleware())

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