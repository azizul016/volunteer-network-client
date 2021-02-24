import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./RegisterFrom.css";
import logo from "../resources/logos/Group 1329.png";

const RegisterFrom = () => {
  const { volunteerId } = useParams();
  const { loggedInUser, volunteer } = useContext(UserContext);

  const volunteers = volunteer.find((vol) => vol._id === volunteerId);
  const { image, title } = volunteers;

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const title = document.getElementById("title").value;
    const total = { name, email, date, description, title, image };
    fetch("https://volunteer-network-web.herokuapp.com/addActivities", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(total),
    });
    history.push("/totalActivities");
  };

  return (
    <>
      <Link to='/'>
        <div style={{ textAlign: "center" }}>
          <img style={{ width: "300px" }} src={logo} alt='' />
        </div>
      </Link>
      <div className='form-container'>
        <h3 className='text-center'>Register as a Volunteer</h3>
        <form className='form' onSubmit={handleSubmit}>
          <input
            type='text'
            required
            placeholder='Full Name'
            value={loggedInUser.name}
            id='name'
          />
          <br />
          <input
            type='email'
            required
            placeholder='Username or Email'
            value={loggedInUser.email}
            name=''
            id='email'
          />
          <br />
          <input type='date' id='date' />
          <br />
          <input
            type='text'
            placeholder='Description'
            id='description'
            required
          />
          <br />
          <input
            type='text'
            required
            value={volunteers && volunteers.title}
            placeholder='Activities'
            id='title'
          />
          <br />
          <button className='registerBtn' type='submit'>
            Registration
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterFrom;
