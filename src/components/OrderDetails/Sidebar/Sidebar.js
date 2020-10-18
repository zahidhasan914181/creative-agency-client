import React from 'react';
import { Link } from 'react-router-dom';
import SideLogo from '../../../images/logos/logo.png'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <section className="p-3 sidebar-bg">
            <div className="side-logo mb-5">
                <img src={SideLogo} alt=""/>
            </div>
            <div className="side-list mt-5">
                <ul className="list">
                   <Link to="/order"><li><a href="" className="text-dark font-weight-bold">Order</a></li></Link>
                    <Link to="/serviceList"><li><a href="" className="text-dark font-weight-bold">Service list</a></li></Link>
                    <Link to="/review"><li><a href="" className="text-dark font-weight-bold">Review</a></li></Link>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;