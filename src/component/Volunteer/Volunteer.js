import React, { useContext, useEffect } from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import VolunteerDetails from '../VolunteerDetails/VolunteerDetails';

const Volunteer = () => {
    const { volunteer, setVolunteer } = useContext(UserContext)

    useEffect(() => {
        fetch('https://morning-river-04073.herokuapp.com/volunteer')
            .then(res => res.json())
            .then(data => setVolunteer(data))
    }, [])

    return (
        <>
            <Header></Header>
            <h2 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h2>
            <Form inline>
                <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
                <Button type="submit" variant="contained" className="btn btn-primary"> Submit</Button>

            </Form>
            <div className="container mt-5">
                <div className="row">
                    {
                        volunteer.map(volunteer => <VolunteerDetails key={Math.random()} volunteer={volunteer} />)
                    }
                </div>
            </div>
        </>
    );
};

export default Volunteer;