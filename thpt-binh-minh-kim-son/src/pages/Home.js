import React from 'react';

const subjects = [
  {
    name: 'Toán học',
    color: 'mathPhysicsBlue',
    image: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
    link: '/mon-hoc',
  },
  {
    name: 'Vật lí',
    color: 'mathPhysicsBlue',
    image: 'https://images.pexels.com/photos/256369/pexels-photo-256369.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
    link: '/mon-hoc',
  },
  {
    name: 'Hóa học',
    color: 'chemistryOrange',
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
    link: '/mon-hoc',
  },
  {
    name: 'Sinh học',
    color: 'biologyGreen',
    image: 'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150',
    link: '/mon-hoc',
  },
];

// Đối tượng ánh xạ các màu sắc sang class Tailwind tĩnh
const colorClasses = {
  mathPhysicsBlue: {
    border: 'border-mathPhysicsBlue',
    text: 'text-mathPhysicsBlue',
  },
  chemistryOrange: {
    border: 'border-chemistryOrange',
    text: 'text-chemistryOrange',
  },
  biologyGreen: {
    border: 'border-biologyGreen',
    text: 'text-biologyGreen',
  },
};

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Phần Hero */}
      <section className="relative bg-lightGray rounded-lg overflow-hidden mb-12">
        <img
          src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600"
          alt="Học sinh học nhóm"
          className="w-full h-64 object-cover brightness-90"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins drop-shadow-lg text-center">
            Học Toán - Lí - Hóa - Sinh hiệu quả, chinh phục kỳ thi!
          </h1>
          <a
            href="#"
            className="bg-mathPhysicsBlue hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition-colors duration-300"
          >
            Bắt đầu học ngay
          </a>
        </div>
      </section>

      {/* Phần các môn học */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {subjects.map((subject) => (
          <a
            key={subject.name}
            href={subject.link}
            className={`block rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ${colorClasses[subject.color].border} border-4`}
          >
            <img
              src={subject.image}
              alt={subject.name}
              className="w-full h-40 object-cover"
            />
            <div
              className={`${colorClasses[subject.color].text} p-6 font-bold text-xl text-center font-poppins`}
            >
              {subject.name}
            </div>
          </a>
        ))}
      </section>

      {/* Phần giới thiệu tính năng */}
      <section className="bg-lightGray rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6 font-poppins">Giới thiệu tính năng</h2>
        <ul className="list-disc list-inside space-y-3 text-darkGray font-montserrat text-lg">
          <li>Học theo chủ đề</li>
          <li>Bài tập nhỏ theo từng phần</li>
          <li>Chấm điểm bằng AI</li>
          <li>Theo dõi tiến độ tự động</li>
        </ul>
      </section>
    </div>
  );
}
