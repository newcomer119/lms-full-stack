import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import { toast } from 'react-toastify';
import { useUser } from '@clerk/clerk-react';

const TestSeries = () => {
  const { backendUrl, getToken } = useContext(AppContext);
  const { user, isSignedIn } = useUser();
  const [testSeriesList, setTestSeriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTest, setActiveTest] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchTestSeries = async () => {
      try {
        const { data } = await axios.get(backendUrl + '/api/testseries');
        if (data.success) setTestSeriesList(data.testSeries);
        setLoading(false);
      } catch (error) {
        toast.error('Failed to load test series');
        setLoading(false);
      }
    };
    fetchTestSeries();
  }, [backendUrl]);

  const startTest = async (test) => {
    if (!isSignedIn) {
      toast.error('Please login to take the test');
      return;
    }
    
    setActiveTest(test);
    setCurrentQ(0);
    setAnswers([]);
    setShowResult(false);
    setResult(null);
  };

  const handleOptionSelect = (optionIdx) => {
    const newAnswers = [...answers];
    newAnswers[currentQ] = { questionId: activeTest.questions[currentQ]._id, selectedOption: optionIdx };
    setAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQ < activeTest.questions.length - 1) {
      setCurrentQ(currentQ + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const submitTest = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + `/api/testseries/${activeTest._id}/submit`,
        { testSeriesId: activeTest._id, answers },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        setResult(data.result);
        setShowResult(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Failed to submit test');
    }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col items-center bg-white p-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-600">Test Series</h1>
      
      <div className="w-full max-w-3xl">
        {testSeriesList.length === 0 && <p>No test series available.</p>}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testSeriesList.map(test => (
            <div key={test._id} className="bg-blue-50 rounded-lg shadow-md p-6 flex flex-col items-start">
              <img src={test.image} alt="Test Series" className="w-full h-40 object-cover rounded mb-4" />
              <h2 className="text-xl font-semibold mb-2">{test.title}</h2>
              <p className="mb-4 text-gray-700">{test.description}</p>
              <button 
                className={`px-6 py-2 rounded font-semibold transition-colors ${
                  isSignedIn 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-400 text-gray-600 cursor-not-allowed'
                }`} 
                onClick={() => startTest(test)}
                disabled={!isSignedIn}
              >
                {isSignedIn ? 'Take Test' : 'Login Required'}
              </button>
              {!isSignedIn && (
                <p className="text-sm text-gray-500 mt-2">
                  Please login to access this test
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Test Modal */}
      {activeTest && !showResult && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-xl relative">
            <button className="absolute top-4 right-4 text-gray-500" onClick={() => setActiveTest(null)}>X</button>
            <h2 className="text-lg font-semibold mb-4">{activeTest.title}</h2>
            <div className="mb-4">
              <p className="font-semibold">Question {currentQ + 1} of {activeTest.questions.length}</p>
              <p className="mb-2">{activeTest.questions[currentQ].questionText}</p>
              {activeTest.questions[currentQ].image && (
                <img src={activeTest.questions[currentQ].image} alt="Question" className="max-h-40 mb-2" />
              )}
              <div className="flex flex-col gap-2">
                {activeTest.questions[currentQ].options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={`border rounded px-4 py-2 text-left ${answers[currentQ]?.selectedOption === idx ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}
                    onClick={() => handleOptionSelect(idx)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <button onClick={prevQuestion} disabled={currentQ === 0} className="px-4 py-2 rounded bg-gray-200">Previous</button>
              {currentQ < activeTest.questions.length - 1 ? (
                <button onClick={nextQuestion} className="px-4 py-2 rounded bg-blue-500 text-white">Next</button>
              ) : (
                <button onClick={submitTest} className="px-4 py-2 rounded bg-green-500 text-white">Submit</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Result Modal */}
      {showResult && result && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button className="absolute top-4 right-4 text-gray-500" onClick={() => { setActiveTest(null); setShowResult(false); }}>X</button>
            <h2 className="text-lg font-semibold mb-4">Your Result</h2>
            <p className="mb-2">Score: <span className="font-bold text-blue-600">{result.score} / {activeTest.questions.length}</span></p>
            <ul className="mb-2">
              {activeTest.questions.map((q, idx) => (
                <li key={q._id} className="mb-1">
                  <span className="font-semibold">Q{idx + 1}:</span> {q.questionText}
                  <br />
                  <span className="text-green-600">Correct: {q.options[q.correctOption]}</span>
                  <br />
                  <span className={result.answers[idx]?.selectedOption === q.correctOption ? 'text-blue-600' : 'text-red-600'}>
                    Your Answer: {typeof result.answers[idx]?.selectedOption === 'number' ? q.options[result.answers[idx].selectedOption] : 'Not answered'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestSeries; 