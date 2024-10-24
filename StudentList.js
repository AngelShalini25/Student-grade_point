import React from 'react';

const StudentList = ({ students }) => {
  const getLetterGrade = (numGrade) => {
    if (numGrade >= 95) return 'O';
    if (numGrade >= 90) return 'A+';
    if (numGrade >= 85) return 'A';
    if (numGrade >= 80) return 'B+';
    if (numGrade >= 75) return 'B';
    if (numGrade >= 70) return 'C+';
    if (numGrade >= 50) return 'C';
    return 'Fail';
  };

  return (
    <div>
      <h2>Student Grades</h2>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Roll No</th>
            <th>Department</th>
            <th>Subject Name</th>
            <th>Numerical Grade</th>
            <th>Letter Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <React.Fragment key={index}>
              {student.subjects.map((subject, idx) => (
                <tr key={idx}>
                  {idx === 0 && (
                    <>
                      <td rowSpan={student.subjects.length}>{student.name}</td>
                      <td rowSpan={student.subjects.length}>{student.rollNo}</td>
                      <td rowSpan={student.subjects.length}>{student.deptName}</td>
                    </>
                  )}
                  <td>{subject.name}</td>
                  <td>{subject.grade}</td>
                  <td>{getLetterGrade(subject.grade)}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
