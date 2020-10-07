import React from "react";
import Sidebar from "./Sidebar";
import TableReact from "./TableReact";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <h1>TABLE</h1>
      <div className="home__container">
        <div className="home__sidebar">
          <Sidebar />
        </div>
        <div className="home__tableReact">
          <TableReact />
        </div>
      </div>
    </div>
  );
}

export default Home;
