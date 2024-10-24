import React, { useState } from 'react';
import StudentForm from './StudentForm';
import StudentList from './StudentList';
import StaffLogin from './StaffLogin';
import './App.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <h1>Student Grade Portal</h1>
          <h3>Enter Marks</h3>
          <StudentForm addStudent={addStudent} />
          <StudentList students={students} />
        </>
      ) : (
        <StaffLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
