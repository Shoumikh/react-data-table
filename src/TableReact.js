import React from "react";
import { useStateValue } from "./StateProvider";
import "./TableReact.css";

function TableReact() {
  const [{ students, user }, dispatch] = useStateValue();

  const renderTableData = () => {
    return students.map((student, index) => {
      return (
        <tr key={student.id}>
          <td>{student.id}</td>
          <td>{student.name}</td>
          <td>{student.age}</td>
          <td>{student.email}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    let header = Object.keys(students[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };

  return (
    <div>
      <table id="students">
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
}

export default TableReact;
