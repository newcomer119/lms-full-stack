import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, required: true },
  selectedOption: { type: Number, required: true }, // index of selected option
}, { _id: false });

const testResultSchema = new mongoose.Schema({
  userId: { type: String, ref: 'User', required: true },
  testSeriesId: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSeries', required: true },
  answers: [answerSchema],
  score: { type: Number, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const TestResult = mongoose.model('TestResult', testResultSchema);

export default TestResult; 