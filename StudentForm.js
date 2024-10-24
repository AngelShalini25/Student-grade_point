import React, { useState } from 'react';

const StudentForm = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [deptName, setDeptName] = useState('');
  const [subjects, setSubjects] = useState([{ name: '', grade: '' }]);

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const updatedSubjects = [...subjects];
    updatedSubjects[index][name] = value;
    setSubjects(updatedSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', grade: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, rollNo, deptName, subjects });
    setName('');
    setRollNo('');
    setDeptName('');
    setSubjects([{ name: '', grade: '' }]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Department"
        value={deptName}
        onChange={(e) => setDeptName(e.target.value)}
        required
      />
      {subjects.map((subject, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder={`Subject ${index + 1} Name`}
            name="name"
            value={subject.name}
            onChange={(e) => handleChange(e, index)}
            required
          />
          <input
            type="number"
            placeholder={`Subject ${index + 1} Grade`}
            name="grade"
            value={subject.grade}
            onChange={(e) => handleChange(e, index)}
            required
          />
        </div>
      ))}
      <button type="button" onClick={addSubject}>Add Subject</button>
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
