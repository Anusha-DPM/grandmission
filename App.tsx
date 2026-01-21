import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home.tsx';
import { Survey } from './components/Survey.tsx';
import { BlogPost } from './components/BlogPost.tsx';
import { ThankYou } from './components/ThankYou.tsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
    </Routes>
  );
}

export default App;
