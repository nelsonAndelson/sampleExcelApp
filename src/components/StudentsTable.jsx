import React from "react";

function StudentTable({ students }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Rank</th>
            <th className="border px-4 py-2">First Name</th>
            <th className="border px-4 py-2">Last Name</th>
            {students[0]?.subjects.map((subject, index) => (
              <th key={index} className="border px-4 py-2">
                {subject.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{student.firstName}</td>
              <td className="border px-4 py-2">{student.lastName}</td>
              {student.subjects.map((subject, subjectIndex) => (
                <td
                  key={subjectIndex}
                  className="border px-4 py-2"
                >{`${subject.grade}% (${subject.letterGrade})`}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StudentTable;
