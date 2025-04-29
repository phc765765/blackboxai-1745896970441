import React, { useState } from 'react';

const subjects = [
  {
    name: 'Toán học',
    topics: [
      {
        title: 'Ứng dụng đạo hàm',
        description: 'Các bài tập về tính đơn điệu, cực trị hàm số, GTLN/GTNN và bài toán thực tế.',
        lessons: [
          { title: 'Bài 1: Tính đơn điệu' },
          { title: 'Bài 2: Cực trị hàm số' },
          { title: 'Bài 3: GTLN/GTNN và bài toán thực tế' },
        ],
      },
      {
        title: 'Nguyên hàm và tích phân',
        description: 'Các bài tập về công thức nguyên hàm cơ bản và tính diện tích hình phẳng.',
        lessons: [
          { title: 'Bài 1: Công thức nguyên hàm cơ bản' },
          { title: 'Bài 2: Tính diện tích hình phẳng' },
        ],
      },
    ],
  },
  // Các môn khác có thể thêm tương tự
];

export default function MonHoc() {
  const [expandedSubjects, setExpandedSubjects] = useState({});
  const [expandedTopics, setExpandedTopics] = useState({});

  const toggleSubject = (subjectName) => {
    setExpandedSubjects((prev) => ({
      ...prev,
      [subjectName]: !prev[subjectName],
    }));
  };

  const toggleTopic = (subjectName, topicTitle) => {
    const key = `${subjectName}-${topicTitle}`;
    setExpandedTopics((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 font-poppins">Các Môn Học</h1>
      {subjects.map((subject) => (
        <div key={subject.name} className="mb-10">
          <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleSubject(subject.name)}>
            <h2 className="text-2xl font-semibold mb-4 font-poppins">{subject.name}</h2>
            <button
              className="text-xl font-bold select-none"
              aria-label={expandedSubjects[subject.name] ? 'Thu gọn môn học' : 'Mở rộng môn học'}
            >
              {expandedSubjects[subject.name] ? '−' : '+'}
            </button>
          </div>
          {expandedSubjects[subject.name] && (
            <>
              {subject.topics.map((topic) => {
                const topicKey = `${subject.name}-${topic.title}`;
                return (
                  <div key={topic.title} className="mb-6 border border-gray-300 rounded-lg p-4">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleTopic(subject.name, topic.title)}>
                      <h3 className="text-xl font-semibold mb-2 font-poppins">{topic.title}</h3>
                      <button
                        className="text-lg font-bold select-none"
                        aria-label={expandedTopics[topicKey] ? 'Thu gọn chủ đề' : 'Mở rộng chủ đề'}
                      >
                        {expandedTopics[topicKey] ? '−' : '+'}
                      </button>
                    </div>
                    {expandedTopics[topicKey] && (
                      <>
                        <p className="mb-3 text-gray-700">{topic.description}</p>
                        <ul className="list-disc list-inside space-y-1">
                          {topic.lessons.map((lesson, index) => (
                            <li key={index} className="flex justify-between items-center">
                              <span>{lesson.title}</span>
                              <button
                                onClick={() => alert(`Bạn đã chọn làm bài tập: ${lesson.title}`)}
                                className="bg-mathPhysicsBlue text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors duration-300"
                              >
                                Làm bài tập
                              </button>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
