import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./StudentList.css";
import Pagination from "./Pagination";
import { useState } from "react";

const StudentList = () => {
  const students = useSelector((state) => state.students.students);
  const [currentPage, setCurrentPage] = useState(1);
  const resultsPerPage = 4;
  const indexOfLastStudent = currentPage * resultsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - resultsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <Link to="/add">
    <button>Add student</button></Link>
      <div className="student-list-container">
        {currentStudents.map((student, idx) => (
          <div key={idx} className="student-card">
            <p className="student-name">{student?.Name}</p>
            <p className="student-email">{student?.Email}</p>
            <p className="student-phone">{student?.Phone}</p>
            <p className="student-marks">{student?.Marks}</p>
            <p className="student-pass">{student?.Pass.toString()}</p>
            <Link to={`/edit/${student?.id}`}>
              <button className="edit-button">Edit</button>
            </Link>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={handlePageChange}
        totalItems={students.length}
        itemsPerPage={resultsPerPage}
      />
    </>
  );
};

export default StudentList;
