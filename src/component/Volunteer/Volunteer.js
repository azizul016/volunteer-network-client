import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import { UserContext } from "../../App";
import Header from "../Header/Header";
import VolunteerDetails from "../VolunteerDetails/VolunteerDetails";
import "./Volunteer.css";

const Volunteer = () => {
  const { volunteer, setVolunteer } = useContext(UserContext);
  console.log(volunteer);
  const [search, setSearch] = useState("");
  const [searchBtn, setSearchBtn] = useState("");
  useEffect(() => {
    fetch("https://morning-river-04073.herokuapp.com/volunteer")
      .then((res) => res.json())
      .then((data) => setVolunteer(data));
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    setSearchBtn(search.toLowerCase());
  };
  // const handleChange = (event) =>{
  //     if (event.keyCode === 13) {
  //         event.preventDefault();
  //         setSearch(event.target.value)
  //     }
  // }
  // const handleChange = (e) =>{
  //     if (e.charCode == 13) {
  //       console.log(e.target.value);
  //       setSearch(e.target.value)
  //     }
  //     onKeyPress ={handleChange}
  //   }
  return (
    <>
      <div className="banner-bg">
        <Header></Header>
        <h2 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h2>

        <div className="from-style">
          <Form className="d-flex">
            <FormControl
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className="form-control"
            />
            <div className="ml-2">
              {" "}
              <Button
                onClick={handleClick}
                type="submit"
                variant="contained"
                className="btn btn-primary"
              >
                {" "}
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="container mt-5">
          <div className="row">
            {volunteer
              .filter((vol) => vol.title.toLowerCase().includes(search.trim()))
              .map((volunteer) => (
                <VolunteerDetails key={Math.random()} volunteer={volunteer} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunteer;
