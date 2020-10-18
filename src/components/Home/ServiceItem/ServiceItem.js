import React from 'react';
import './ServiceItem.css'

const ServiceItem = ({service}) => {
    return (
        <div className="col-md-4 p-5 service">
            <img src={service.img} alt=""/>
            <h5 className="my-3">{service.title}</h5>
            <p>{service.description}</p>
        </div>
    );
};

export default ServiceItem;