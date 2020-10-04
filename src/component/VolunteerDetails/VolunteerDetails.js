import React from 'react';
import "./VolunteerDetails.css";
import { Link } from "react-router-dom";

const VolunteerDetails = (props) => {
    const { image, title, _id } = props.volunteer;
    return (

        <div className="col-md-3 work-container">
            <Link className="work-field" to={`/VolunteerDetails/${_id}`} >
                <div className="single-work">
                    <img src={image} alt="" />
                    <div className="work-title">
                        <h6>{title}</h6>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default VolunteerDetails;