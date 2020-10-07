import React from "react";
import { useStateValue } from "./StateProvider";
import "./TableReact.css";

function TableReact() {
  const [{ students, user }, dispatch] = useStateValue();

  const renderTableData = () => {
    return user?.map((user, index) => {
      return (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.phone}</td>
          <td>{user.email}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    let header = Object?.keys(students[0]);
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
