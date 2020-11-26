import React from 'react';
import "./VolunteerDetails.css";
import { Link } from "react-router-dom";

const VolunteerDetails = (props) => {
    const { image, title, _id } = props.volunteer;
    // console.log(props);
    return (

        <div className="col-md-6 col-lg-4 col-xl-3 work-container">
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