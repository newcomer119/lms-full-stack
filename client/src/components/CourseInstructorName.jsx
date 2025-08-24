import React, { useState } from 'react';

const CourseInstructorName = ({ courseId, currentName, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(currentName);
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = async () => {
    if (name.trim() === '') {
      return;
    }
    
    setIsLoading(true);
    try {
      await onUpdate(name.trim());
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating instructor name:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    setName(currentName);
    setIsEditing(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (isEditing) {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyDown={handleKeyPress}
          className="px-2 py-1 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          autoFocus
          disabled={isLoading}
        />
        <button
          onClick={handleSave}
          disabled={isLoading}
          className="text-green-600 hover:text-green-800 text-xs font-medium disabled:opacity-50"
        >
          {isLoading ? 'Saving...' : 'Save'}
        </button>
        <button
          onClick={handleCancel}
          disabled={isLoading}
          className="text-red-600 hover:text-red-800 text-xs font-medium disabled:opacity-50"
        >
          Cancel
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 group">
      <span className="truncate max-w-32">{currentName}</span>
      <button
        onClick={() => setIsEditing(true)}
        className="text-blue-600 hover:text-blue-800 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        title="Click to edit instructor name"
      >
        ✏️
      </button>
    </div>
  );
};

export default CourseInstructorName;
