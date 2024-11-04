import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Chatbot from './Chatbot';
import { Link } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book-tickets" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;
