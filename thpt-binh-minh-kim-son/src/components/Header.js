import React from 'react';

const menuItems = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Các môn học', href: '/mon-hoc' },
  { name: 'Chủ đề', href: '/mon-hoc' },
  { name: 'Bài tập', href: '/bai-tap' },
  { name: 'Chấm bài AI', href: '/cham-bai-ai' },
  { name: 'Thống kê học tập', href: '/thong-ke' },
  { name: 'Giới thiệu nhóm phát triển', href: '#' },
  { name: 'Liên hệ', href: '#' },
];

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold text-mathPhysicsBlue font-poppins">
          Bình Minh Learning
        </div>
        <nav>
          <ul className="flex space-x-6 text-darkGray font-medium font-poppins">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-mathPhysicsBlue transition-colors duration-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
