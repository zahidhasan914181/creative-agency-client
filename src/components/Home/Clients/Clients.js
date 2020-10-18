import React from 'react';
import './Clients.css'

const Clients = ({feedback}) => {
    return (
        <div className="col-md-4 p-4 mb-5 card">
            <div className="row clients">
                <div className="col-md-4">
                <img src={feedback.img} alt=""/>
                </div>
                <div className="col-md-8">
                <h5 className="my-3">{feedback.name}</h5>
                <p>{feedback.position}</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sit ipsa nulla quod eaque et voluptate sed laudantium dignissimos placeat.</p>
        </div>
    );
};

export default Clients;