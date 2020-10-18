import React from 'react';
import { useParams } from 'react-router-dom';
import Services from '../../Home/Services/Services';
import Sidebar from '../Sidebar/Sidebar';
import serviceData from '../../Home/Services/Services'

const ServiceList = () => {
    let { orderKey } = useParams();
    const order = serviceData.find(order => order.key === orderKey);
    return (
        <div>
            <div className="row">
                <div className="col-3 sidebar-bg">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-9 review-bg">
                    <h3>ServiceList</h3>
                    <Services order={order}></Services>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;