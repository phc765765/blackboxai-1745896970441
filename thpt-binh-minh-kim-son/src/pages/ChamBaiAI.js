import React, { useState } from 'react';

export default function ChamBaiAI() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for AI grading logic
    // For now, simulate a result
    setResult({
      score: 8,
      comments: [
        'Cần chú ý cách trình bày',
        'Sai bước áp dụng công thức',
        'Bố cục bài làm tốt',
      ],
      suggestion: 'Ôn lại phần đạo hàm để cải thiện kết quả.',
    });
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 font-poppins">Chấm Bài Bằng AI</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <label className="block mb-2 font-semibold font-poppins">Upload ảnh bài làm:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
        />
        <button
          type="submit"
          disabled={!file}
          className="bg-mathPhysicsBlue text-white px-6 py-2 rounded disabled:opacity-50 hover:bg-blue-700 transition-colors duration-300"
        >
          Gửi bài
        </button>
      </form>

      {result && (
        <div className="border border-gray-300 rounded p-4 bg-lightGray">
          <h2 className="text-xl font-semibold mb-2 font-poppins">Kết quả chấm bài</h2>
          <p className="mb-2">Điểm: {result.score} / 10</p>
          <ul className="list-disc list-inside mb-2">
            {result.comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
          <p><strong>Gợi ý:</strong> {result.suggestion}</p>
        </div>
      )}
    </div>
  );
}
