import React from 'react';
import Frame from '../../../images/logos/Frame.png'

const HeaderMain = () => {
    return (
        <div className="row py-5">
            <div className="col-md-6 pb-5">
                <h1>Let's Grow Your<br/> Brand To The<br/> Next Level</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rem labore explicabo, aut quasi maiores id sit quia cumque provident.</p>
                <button className="btn btn-dark">HIRE US</button>
            </div>
            <div className="col-md-6 pb-5">
                <img src={Frame} alt="" className="img-fluid"/>
            </div>
        </div>
    );
};

export default HeaderMain;