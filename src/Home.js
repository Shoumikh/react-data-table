import React from "react";
import Form from "./Form";
import TableReact from "./TableReact";
import "./Home.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div className="home">
        <h1>TABLE</h1>
        <div className="home__container">
          <div className="home__sidebar">
            <Sidebar />
          </div>
          <Switch>
            <Route path="/form">
              <div className="home__form">
                <Form />
              </div>
            </Route>
            <Route path="/">
              <div className="home__tableReact">
                <TableReact />
              </div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default Home;
