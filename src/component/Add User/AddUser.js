import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'date-fns';
import addIcons from '../resources/logos/plus 1.png';
import volunteerIcon from '../resources/logos/users-alt 1.png';
import logo from '../resources/logos/Group 1329.png';
import { Link, useHistory } from "react-router-dom";
import { AppBar, Container, Typography } from '@material-ui/core';
import './AddUser.css'
import AllEvent from '../AllEvent/AllEvent';

const AddUser = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const history = useHistory();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = document.getElementById("eventName").value;
        const description = document.getElementById("eventDescription").value;
        const allUser = { title, description, selectedDate }
        fetch('https://morning-river-04073.herokuapp.com/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(allUser)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                history.push('/')
            })
    }

    const handleList = () => {
        document.getElementById("list").style.display = "block";
        document.getElementById("form-field").style.display = "none";

    }
    const handleAddEvent = () => {
        document.getElementById("list").style.display = "none";
        document.getElementById("form-field").style.display = "block";
    }



    return (
        <>
            <Container>
                <div className="row">
                    <div className="col-md-4">
                        <Link to="/"><img style={{ width: '250px', marginTop: '50px' }} src={logo} alt="" /></Link>
                        <div onClick={handleList} style={{ display: 'flex', marginTop: '30px' }}>
                            <img style={{ width: "25px", height: "25px" }} src={volunteerIcon} alt="" />
                            <p className="ml-2" style={{ cursor: "pointer" }}>Volunteer register list</p>
                        </div>
                        <div onClick={handleAddEvent} style={{ display: 'flex', marginTop: '30px' }}>
                            <img style={{ width: "25px", height: "25px" }} src={addIcons} alt="" />
                            <p className="ml-2" style={{ cursor: "pointer" }}>Add event</p>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div id="form-field">
                            <AppBar position="static">
                                <Typography variant="h6" color="inherit">Add event</Typography>
                            </AppBar>
                            <form onSubmit={handleSubmit} className="form-field" >
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="my-3">
                                            <label htmlFor="title">Event Name</label>
                                            <input className="form-control" type="text" id="eventName" name="title" placeholder="Event Name" />
                                        </div>
                                        <div className="my-3">
                                            <label htmlFor="textarea">Description</label>
                                            <br />
                                            <textarea className="form-control" name="textarea" id="eventDescription" cols="20" rows="3" placeholder="Event Designation"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <MuiPickersUtilsProvider className="my-3" utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                margin="normal"
                                                id="date-picker-dialog"
                                                label="Date picker dialog"
                                                format="dd/MM/yyyy"
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                        <div className="my-5">
                                            <label htmlFor="file">Banner</label>
                                            <br />
                                            <input type="file" name="file" id="file" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-outline-primary float-right mr-5">submit</button>
                            </form>
                        </div>
                        <div id="list">
                            <AllEvent></AllEvent>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default AddUser;