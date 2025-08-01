import React, { useState, useEffect } from 'react';
import { sanityClient } from '../../../sanity';

const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [currentNoticeIndex, setCurrentNoticeIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const query = `*[_type == "notice" && isActive == true] | order(priority desc, createdAt desc) {
          _id,
          title,
          description,
          isNew,
          priority,
          link
        }`;
        
        const result = await sanityClient.fetch(query);
        setNotices(result);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching notices:', error);
        setIsLoading(false);
      }
    };

    fetchNotices();
  }, []);

  useEffect(() => {
    if (notices.length > 1) {
      const interval = setInterval(() => {
        setCurrentNoticeIndex((prevIndex) => 
          prevIndex === notices.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change notice every 4 seconds

      return () => clearInterval(interval);
    }
  }, [notices.length]);

  const handleNoticeClick = (notice) => {
    if (notice.link) {
      window.open(notice.link, '_blank');
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 bg-red-500 rounded-full animate-pulse mr-3"></div>
          <h3 className="text-lg font-bold text-red-600">NOTICE BOARD</h3>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    );
  }

  if (notices.length === 0) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-center mb-4">
          <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          <h3 className="text-lg font-bold text-red-600">NOTICE BOARD</h3>
        </div>
        <p className="text-gray-500 text-center py-4">No active notices at the moment.</p>
      </div>
    );
  }

  const currentNotice = notices[currentNoticeIndex];

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center mb-4">
        <svg className="w-6 h-6 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
        </svg>
        <h3 className="text-lg font-bold text-red-600">NOTICE BOARD</h3>
      </div>

      {/* Notice Content */}
      <div className="relative min-h-[80px]">
        <div 
          className={`transition-all duration-500 ease-in-out ${currentNotice.link ? 'cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors' : ''}`}
          onClick={() => handleNoticeClick(currentNotice)}
        >
          <div className="flex items-start mb-2">
            {currentNotice.isNew && (
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mr-3 font-semibold">
                NEW
              </span>
            )}
            <h4 className="text-base font-semibold text-gray-800 flex-1">
              {currentNotice.title}
            </h4>
            {currentNotice.link && (
              <svg className="w-4 h-4 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
              </svg>
            )}
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            {currentNotice.description}
          </p>
        </div>

        {/* Navigation Dots */}
        {notices.length > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {notices.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNoticeIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentNoticeIndex ? 'bg-red-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard; 