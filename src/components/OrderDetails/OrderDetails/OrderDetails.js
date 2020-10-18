import React from 'react';
import Order from '../Order/Order';
import Sidebar from '../Sidebar/Sidebar';
import './OrderDetails.css'

const OrderDetails = () => {
    return (
        <div className="order-details">
            <div className="row">
                <div className="col-3 sidebar-bg">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-9 create-order">
                    <Order></Order>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;