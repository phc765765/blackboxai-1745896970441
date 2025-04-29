import React, { useState } from 'react';

const exercisesData = [
  {
    id: 1,
    subject: 'Toán học',
    topic: 'Ứng dụng đạo hàm',
    description: 'Tính đơn điệu của hàm số.',
    document: null,
  },
  {
    id: 2,
    subject: 'Toán học',
    topic: 'Nguyên hàm và tích phân',
    description: 'Công thức nguyên hàm cơ bản.',
    document: null,
  },
  // Thêm bài tập khác ở đây
];

export default function BaiTap() {
  const [subjectFilter, setSubjectFilter] = useState('');
  const [topicFilter, setTopicFilter] = useState('');
  // State to hold uploaded files per exercise id
  const [uploadedFiles, setUploadedFiles] = useState({});
  // State to hold submission status per exercise id
  const [submissionStatus, setSubmissionStatus] = useState({});

  const filteredExercises = exercisesData.filter((exercise) => {
    return (
      (subjectFilter === '' || exercise.subject === subjectFilter) &&
      (topicFilter === '' || exercise.topic.toLowerCase().includes(topicFilter.toLowerCase()))
    );
  });

  const handleFileChange = (exerciseId, e) => {
    const file = e.target.files[0];
    setUploadedFiles((prev) => ({
      ...prev,
      [exerciseId]: file,
    }));
    // Reset submission status on new file upload
    setSubmissionStatus((prev) => ({
      ...prev,
      [exerciseId]: null,
    }));
  };

  const handleSubmit = (exerciseId) => {
    const file = uploadedFiles[exerciseId];
    if (!file) {
      alert('Vui lòng chọn file trước khi gửi bài.');
      return;
    }
    // Simulate submission process
    setSubmissionStatus((prev) => ({
      ...prev,
      [exerciseId]: 'Đang gửi bài...',
    }));

    // Simulate async submission delay
    setTimeout(() => {
      setSubmissionStatus((prev) => ({
        ...prev,
        [exerciseId]: 'Gửi bài thành công!',
      }));
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 font-poppins">Trang Bài Tập</h1>

      <div className="mb-6 flex space-x-4">
        <select
          value={subjectFilter}
          onChange={(e) => setSubjectFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2"
        >
          <option value="">Chọn môn học</option>
          <option value="Toán học">Toán học</option>
          <option value="Vật lí">Vật lí</option>
          <option value="Hóa học">Hóa học</option>
          <option value="Sinh học">Sinh học</option>
        </select>

        <input
          type="text"
          placeholder="Lọc theo chủ đề"
          value={topicFilter}
          onChange={(e) => setTopicFilter(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 flex-grow"
        />
      </div>

      <ul className="space-y-4">
        {filteredExercises.map((exercise) => (
          <li key={exercise.id} className="border border-gray-300 rounded p-4">
            <h2 className="text-xl font-semibold font-poppins">{exercise.subject} - {exercise.topic}</h2>
            <p className="mb-2">{exercise.description}</p>
            {exercise.document && (
              <a
                href={exercise.document}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mathPhysicsBlue underline"
              >
                Tài liệu đính kèm
              </a>
            )}
            <div className="mt-4">
              <label className="block mb-1 font-semibold font-poppins">Upload bài làm (ảnh hoặc PDF):</label>
              <input
                type="file"
                accept="image/*,application/pdf"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                onChange={(e) => handleFileChange(exercise.id, e)}
              />
              <button
                onClick={() => handleSubmit(exercise.id)}
                className="mt-2 bg-mathPhysicsBlue text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Gửi bài
              </button>
              {submissionStatus[exercise.id] && (
                <p className="mt-2 text-green-600 font-semibold">{submissionStatus[exercise.id]}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
