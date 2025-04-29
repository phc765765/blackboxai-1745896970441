import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-lightGray text-darkGray py-6 mt-12 font-poppins">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>© 2024 Bình Minh Learning. All rights reserved.</p>
        </div>
        <div className="flex space-x-6">
          <a href="mailto:phc765@gmail.com" className="hover:text-mathPhysicsBlue transition-colors duration-300">
            phc765@gmail.com
          </a>
          <a href="tel:0912747685" className="hover:text-mathPhysicsBlue transition-colors duration-300">
            0912.74.76.85
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-mathPhysicsBlue transition-colors duration-300">
            Facebook
          </a>
          <a href="https://zalo.me" target="_blank" rel="noopener noreferrer" className="hover:text-mathPhysicsBlue transition-colors duration-300">
            Zalo
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-mathPhysicsBlue transition-colors duration-300">
            Youtube
          </a>
        </div>
      </div>
    </footer>
  );
}
