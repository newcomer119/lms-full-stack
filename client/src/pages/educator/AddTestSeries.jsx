import React, { useContext, useRef, useState } from 'react';
import { assets } from '../../assets/assets';
import { toast } from 'react-toastify';
import uniqid from 'uniqid';
import axios from 'axios';
import { AppContext } from '../../context/AppContext';

const AddTestSeries = () => {
  const { backendUrl, getToken } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState({
    questionText: '',
    image: null,
    options: ['', '', '', ''],
    correctOption: 0,
  });
  const [uploading, setUploading] = useState(false);

  // Upload image to backend /api/educator/upload-image
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const { data } = await axios.post(
        backendUrl + '/api/educator/upload-image',
        formData
      );
      if (data.success && data.url) {
        return data.url;
      }
      return '';
    } catch (error) {
      toast.error('Failed to upload image');
      return '';
    }
  };

  // Upload question image before adding question
  const handleAddQuestion = async () => {
    setUploading(true);
    let imageUrl = '';
    if (currentQuestion.image) {
      imageUrl = await uploadImage(currentQuestion.image);
      if (!imageUrl) {
        setUploading(false);
        return;
      }
    }
    setQuestions([...questions, { ...currentQuestion, id: uniqid(), image: imageUrl }]);
    setShowPopup(false);
    setCurrentQuestion({ questionText: '', image: null, options: ['', '', '', ''], correctOption: 0 });
    setUploading(false);
  };

  const handleRemoveQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!image) return toast.error('Test Series Image Required');
      if (!title || !description) return toast.error('Title and Description Required');
      if (questions.length === 0) return toast.error('Add at least one question');
      const testSeriesData = {
        title,
        description,
        questions: questions.map(q => ({
          questionText: q.questionText,
          image: q.image,
          options: q.options,
          correctOption: q.correctOption,
        })),
      };
      const formData = new FormData();
      formData.append('testSeriesData', JSON.stringify(testSeriesData));
      formData.append('image', image);
      const token = await getToken();
      const { data } = await axios.post(
        backendUrl + '/api/testseries',
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (data.success) {
        toast.success('Test Series Created');
        setTitle('');
        setDescription('');
        setImage(null);
        setQuestions([]);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className='h-screen overflow-scroll flex flex-col items-start justify-between md:p-8 md:pb-0 p-4 pt-8 pb-0'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4 max-w-xl w-full text-gray-500'>
        <div className='flex flex-col gap-1'>
          <p>Test Series Title</p>
          <input value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder='Type here' className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' required />
        </div>
        <div className='flex flex-col gap-1'>
          <p>Description</p>
          <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder='Type here' className='outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500' required />
        </div>
        <div className='flex flex-col gap-1'>
          <p>Test Series Image</p>
          <label htmlFor='testSeriesImage' className='flex items-center gap-3'>
            <img src={assets.file_upload_icon} alt='' className='p-3 bg-blue-500 rounded' />
            <input type="file" id='testSeriesImage' onChange={e => setImage(e.target.files[0])} accept="image/*" hidden />
            <img className='max-h-10' src={image ? URL.createObjectURL(image) : ''} alt='' />
          </label>
        </div>
        {/* Questions List */}
        <div>
          <div className='flex justify-between items-center mb-2'>
            <p className='font-semibold'>Questions</p>
            <button type='button' className='bg-blue-500 text-white px-3 py-1 rounded' onClick={() => setShowPopup(true)}>+ Add Question</button>
          </div>
          {questions.map((q, idx) => (
            <div key={q.id} className='border rounded p-3 mb-2 flex flex-col gap-2'>
              <div className='flex justify-between items-center'>
                <span className='font-semibold'>Q{idx + 1}: {q.questionText}</span>
                <button type='button' className='text-red-500' onClick={() => handleRemoveQuestion(q.id)}>Remove</button>
              </div>
              {q.image && <img src={q.image} alt='' className='max-h-24' />}
              <ul className='list-decimal ml-6'>
                {q.options.map((opt, i) => (
                  <li key={i} className={q.correctOption === i ? 'font-bold text-green-600' : ''}>{opt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Add Question Popup */}
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white text-gray-700 p-4 rounded relative w-full max-w-lg">
              <h2 className="text-lg font-semibold mb-4">Add Question</h2>
              <div className="mb-2">
                <p>Question Text</p>
                <input type="text" className="mt-1 block w-full border rounded py-1 px-2" value={currentQuestion.questionText} onChange={e => setCurrentQuestion({ ...currentQuestion, questionText: e.target.value })} />
              </div>
              <div className="mb-2">
                <p>Question Image (optional)</p>
                <input type="file" accept="image/*" onChange={e => setCurrentQuestion({ ...currentQuestion, image: e.target.files[0] })} />
                {currentQuestion.image && <img src={typeof currentQuestion.image === 'string' ? currentQuestion.image : URL.createObjectURL(currentQuestion.image)} alt='' className='max-h-24 mt-2' />}
              </div>
              <div className="mb-2">
                <p>Options</p>
                {currentQuestion.options.map((opt, i) => (
                  <input key={i} type="text" className="mt-1 block w-full border rounded py-1 px-2 mb-1" value={opt} onChange={e => {
                    const newOpts = [...currentQuestion.options];
                    newOpts[i] = e.target.value;
                    setCurrentQuestion({ ...currentQuestion, options: newOpts });
                  }} placeholder={`Option ${i + 1}`} />
                ))}
              </div>
              <div className="mb-2">
                <p>Correct Option</p>
                <select className="block w-full border rounded py-1 px-2" value={currentQuestion.correctOption} onChange={e => setCurrentQuestion({ ...currentQuestion, correctOption: Number(e.target.value) })}>
                  {currentQuestion.options.map((_, i) => (
                    <option key={i} value={i}>{`Option ${i + 1}`}</option>
                  ))}
                </select>
              </div>
              <button type='button' className="w-full bg-blue-400 text-white px-4 py-2 rounded" onClick={handleAddQuestion} disabled={uploading}>{uploading ? 'Uploading...' : 'Add Question'}</button>
              <button type='button' className="absolute top-4 right-4 text-gray-500" onClick={() => setShowPopup(false)}>X</button>
            </div>
          </div>
        )}
        <button type="submit" className='bg-black text-white w-max py-2.5 px-8 rounded my-4'>
          ADD TEST SERIES
        </button>
      </form>
    </div>
  );
};

export default AddTestSeries; 