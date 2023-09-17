import React, { useState, useContext } from 'react';
import './Course.css'
import { Link } from 'react-router-dom';
import ProfileContext from './center/Context/Profile';

function CourseSelection() {
  const [course, setCourse] = useState('');
  const [stream, setStream] = useState('');
  const { coursesubmit } = useContext(ProfileContext);

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  const handleStreamChange = (event) => {
    setStream(event.target.value);
  };

  const handleButtonClick = () => {
    coursesubmit(stream);
  };

  return (
    <div className='CourseSelection'>
      <h2>Select Your Course</h2>
      <div>
        <label htmlFor="course">Select Course:</label>
        <select name="course" id="course" onChange={handleCourseChange} value={course}>
          <option value="">Select a Course</option>
          <option value="ba">BA</option>
          <option value="bsc">BSc</option>
          <option value="btech">BTech</option>
        </select>
      </div>

      {course === 'btech' && (
        <div>
          <label htmlFor="stream">Select Stream:</label>
          <select name="stream" id="stream" onChange={handleStreamChange} value={stream}>
            <option value="">Select a Stream</option>
            <option value="civil">Civil Engineering</option>
            <option value="mechanical">Mechanical Engineering</option>
            <option value="computer">Computer Science</option>
            {/* Add more stream options as needed */}
          </select>
        </div>
      )}

      <div>
        <Link to="/" onClick={handleButtonClick}>
          <button>Submit</button>
        </Link>
      </div>
    </div>
  );
}

export default CourseSelection;
