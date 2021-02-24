import React, { useEffect, useState } from "react";

const AllEvent = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetch("https://volunteer-network-web.herokuapp.com/activity")
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`https://volunteer-network-web.herokuapp.com/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        const activity = event.filter((ac) => ac._id !== id);
        setEvent(activity);
      });
  };

  return (
    <>
      <div className='row'>
        <h3>Volunteer Registration List</h3>
        {event.map((data) => (
          <li key={Math.random()}>
            {data.name} - {data.email} - {data.date} - {data.title} -{" "}
            <button
              className='mt-3 btn-danger'
              onClick={() => handleDelete(data._id)}
            >
              Delete
            </button>
          </li>
        ))}
      </div>
    </>
  );
};

export default AllEvent;
