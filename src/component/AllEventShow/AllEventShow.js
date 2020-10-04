import React from 'react';
import { Button } from 'react-bootstrap';

const AllEventShow = (props) => {
    const { email, description, date, title, image, _id, name } = props.data;
    return (
        <div className="col-md-5 activities">
            <div className="row">
                <div className="col-md-6">
                    <img style={{ width: "190px", height: "170px" }} src={image} alt="" />
                </div>
                <div className="col-md-6 container">
                    <h3>{title}</h3>
                    <p>{date}</p>
                    <div className="success">
                        <Button onClick={() => props.handleDelete(_id)} variant="outline-success">cancel</Button>{' '}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllEventShow;