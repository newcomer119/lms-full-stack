import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  image: { type: String },
  options: [{ type: String, required: true }],
  correctOption: { type: Number, required: true }, // index of the correct option
}, { _id: true });

const testSeriesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  questions: [questionSchema],
  createdBy: { type: String, ref: 'User', required: true },
}, { timestamps: true });

const TestSeries = mongoose.model('TestSeries', testSeriesSchema);

export default TestSeries; 