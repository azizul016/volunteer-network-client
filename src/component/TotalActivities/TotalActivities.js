import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import ShowActivities from '../ShowActivities/ShowActivities';

const TotalActivities = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const [activities, setActivities] = useState([])
    console.log(activities);
    useEffect(() => {
        fetch("https://morning-river-04073.herokuapp.com/activities?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    const handleDelete = (id) => {
        fetch(`https://morning-river-04073.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                const activity = activities.filter(ac => ac._id !== id)
                setActivities(activity)

                console.log("delete successfully");
            })

    }

    return (
        <div className="container">
            <Header></Header>
            <div className="row">
                {
                    activities.map(activity => <ShowActivities key={Math.random()} handleDelete={handleDelete} activity={activity} />)
                }
            </div>
        </div>
    );
};

export default TotalActivities;