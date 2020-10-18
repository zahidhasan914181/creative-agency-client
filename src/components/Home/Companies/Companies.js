import React from 'react';
import Airbnb from '../../../images/logos/airbnb.png';
import Google from '../../../images/logos/google.png';
import Netflix from '../../../images/logos/netflix.png';
import Uber from '../../../images/logos/uber.png';
import Slack from '../../../images/logos/slack.png';
import './Companies.css'

const Companies = () => {
    return (
        <div className=" container text-center">
            <div className="company">
                <img src={Airbnb} alt=""/>
                <img src={Google} alt=""/>
                <img src={Netflix} alt=""/>
                <img src={Uber} alt=""/>
                <img src={Slack} alt=""/>
            </div>
        </div>
    );
};

export default Companies;