import React from 'react';
import WebDesign from '../../../images/icons/service1.png'
import Graphic from '../../../images/icons/service2.png'
import WebDevelopment from '../../../images/icons/service3.png'
import ServiceItem from '../ServiceItem/ServiceItem';


const serviceData = [
    {
        key: '1',
        img: WebDesign,
        title: 'Web & Mobile Design',
        description :' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugiat expedita est facere, consequatur quidem!'
    },
    {
        key: '2',
        img: Graphic,
        title: 'Graphic Design',
        description :' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugiat expedita est facere, consequatur quidem!'
    },
    {
        key: '3',
        img: WebDevelopment,
        title: 'Web Development',
        description :' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet fugiat expedita est facere, consequatur quidem!'
    }
]
const Services = () => {
    return (
        <div className="container text-center mt-5 pt-5">
            <h1>Provide awesome <span className="text-success">services</span></h1>
            <div className="card-deck row my-5">
                {
                    serviceData.map(service => <ServiceItem service={service}></ServiceItem>)
                }
            </div>
        </div>
    );
};

export default Services;