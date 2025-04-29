import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import MonHoc from './pages/MonHoc';
import BaiTap from './pages/BaiTap';
import ChamBaiAI from './pages/ChamBaiAI';
import ThongKe from './pages/ThongKe';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-darkGray font-poppins">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mon-hoc" element={<MonHoc />} />
            <Route path="/bai-tap" element={<BaiTap />} />
            <Route path="/cham-bai-ai" element={<ChamBaiAI />} />
            <Route path="/thong-ke" element={<ThongKe />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
