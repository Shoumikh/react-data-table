import React, { useState } from "react";
import "./Form.css";
import { useStateValue } from "./StateProvider";

function Form() {
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
      <div className="form">
        <div className="form__item">
          {console.log("halaaaaa" + user)}
          <p className="form__title">Name</p>
          <input
            className="form__input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form__item">
          <p className="form__title">Id </p>
          <input
            className="form__input"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form__item">
          <p className="form__title">Phone </p>
          <input
            className="form__input"
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form__item">
          <p className="form__title">Email</p>
          <input
            className="form__input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button onClick={handleClick} className="form__button" type="submit">
          Add Member
        </button>
      </div>
    </form>
  );
}

export default Form;
