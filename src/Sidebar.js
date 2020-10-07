import React, { useState } from "react";
import "./Sidebar.css";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => {
    {
      console.log("aaaaaaa>>>> " + user[user?.length]);
    }
    dispatch({
      type: "ADD_TO_TABLE",
      member: {
        id: id,
        name: name,
        age: age,
        email: email,
      },
    });

    setName("");
    setAge("");
    setEmail("");
    setId("");
  };

  return (
    <form>
      <div className="sidebar">
        <div className="sidebar__item>">
          {console.log("halaaaaa" + user)}
          <p className="sidebar__title">Name</p>
          <input
            className="sidebar__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="sidebar__item>">
          <p className="sidebar__title">Id</p>
          <input
            className="sidebar__input"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="sidebar__item>">
          <p className="sidebar__title">Age</p>
          <input
            className="sidebar__input"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="sidebar__item>">
          <p className="sidebar__title">Email</p>
          <input
            className="sidebar__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button onClick={handleClick} className="sidebar__button" type="submit">
          Add Member
        </button>
      </div>
    </form>
  );
}

export default Sidebar;
