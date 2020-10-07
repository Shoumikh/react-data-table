import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <List className="sidebar__list" disablePadding dense>
        <Link className="sidebar__link" to="./form">
          <ListItem button>
            <ListItemText>Form</ListItemText>
          </ListItem>
        </Link>
        <Link className="sidebar__link" to="./">
          <ListItem button>
            <ListItemText>Table</ListItemText>
          </ListItem>
        </Link>
      </List>
    </div>
  );
}

export default Sidebar;
