import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './Review.css'

const Review = () => {
    const [info, setInfo] = useState({})
    const handleSubmit = () => {

        fetch('http://localhost:4000/addReview',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => data )   
        }

        const handleBlur = e => {
            const newInfo = { ...info}
            newInfo[e.target.name] = e.target.value
            setInfo(newInfo)
        } 
    return (
        <div>
            <div className="row">
                <div className="col-3 sidebar-bg">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-9 review-bg">
                    <h3>Review</h3>
                    <form action="">
                    <input type="email" onBlur={handleBlur} name="email" className="form-control mb-3 w-50" placeholder="Your name"/>
                    <input type="text" onBlur={handleBlur} name="name" className="form-control mb-3 w-50" placeholder="Company's name, Designation"/>
                    <textarea class="form-control mb-3 w-50" onBlur={handleBlur} id="exampleFormControlTextarea1" rows="5" placeholder="Description"></textarea>
                    <input type="submit" onClick={handleSubmit} className="btn btn-dark" value="submit"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;