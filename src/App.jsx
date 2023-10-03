import React from "react";
import StudentTable from "./components/StudentsTable";
import studentsData from "./data/studentsData";

const App = () => {
  return (
    <>
      <StudentTable students={studentsData} />
    </>
  );
};

export default App;
