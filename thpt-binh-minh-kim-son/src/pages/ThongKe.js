import React from 'react';

export default function ThongKe() {
  // Placeholder data for statistics
  const progressData = {
    subjects: [
      { name: 'Toán học', completed: 80, total: 100 },
      { name: 'Vật lí', completed: 60, total: 100 },
      { name: 'Hóa học', completed: 70, total: 100 },
      { name: 'Sinh học', completed: 50, total: 100 },
    ],
    exercises: {
      correct: 150,
      incorrect: 30,
    },
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 font-poppins">Thống Kê Tiến Độ Học Tập</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-poppins">Tiến độ từng môn học</h2>
        <ul className="space-y-3">
          {progressData.subjects.map((subject) => (
            <li key={subject.name} className="flex items-center space-x-4">
              <span className="w-32 font-semibold font-poppins">{subject.name}</span>
              <div className="flex-grow bg-gray-200 rounded h-6">
                <div
                  className="bg-mathPhysicsBlue h-6 rounded"
                  style={{ width: `${(subject.completed / subject.total) * 100}%` }}
                ></div>
              </div>
              <span className="w-12 text-right font-poppins">{subject.completed}%</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 font-poppins">Tỉ lệ hoàn thành bài tập</h2>
        <p className="font-poppins">
          Đúng: {progressData.exercises.correct} bài | Sai: {progressData.exercises.incorrect} bài
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 font-poppins">Khuyến nghị luyện tập</h2>
        <p className="font-poppins">Bạn nên luyện tập thêm các chủ đề Toán học và Sinh học để cải thiện kết quả.</p>
      </section>
    </div>
  );
}
