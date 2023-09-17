import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom
import NevBar from './Nevbar';
import Sidebar from './component/Sidebar';
import DisplayForm from './component/center/Context/Displayform.js';
import CenterContent from './component/center/CenterContent';
import Study from './component/center/Study';
import Communication from './component/center/Communi/Communication';
import School from './component/center/Communi/School/School';
import Library from './component/center/Communi/Librarycomp/Library';
import Test from './component/center/Communi/Testexam/Test';
import Edit from './component/center/Context/Edit';
import { Provider } from './component/center/Context/Profile';
import { useState,useEffect } from 'react';
import Home from './component/Home';
import CourseSelection from './component/CourseSelection';

import Videoani from './component/Videoani';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 6300);
  }, []);
  if (loading) {
    return (
     <Videoani/>
    )
  }
  return (
    <Provider>
    <BrowserRouter>

      <NevBar />
      <Sidebar />
      {/* Use Routes and Route components for ro*/}
      <Routes>
      <Route path="/" element={<Home />} />
        
        <Route path="/batch" element={<CenterContent />} />
        <Route path="/study" element={<Study />} />
        <Route path="/communication" element={<Communication />} />
        <Route path="/school" element={<School />} />
        <Route path="/library" element={<Library />} />
        <Route path="/test" element={<Test/>} />
        <Route path="/profile" element={<DisplayForm/>} />
        <Route path="/editprofile" element={<Edit/>} />
        <Route path="/select" element={<CourseSelection/>} />
      
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
