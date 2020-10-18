import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './Order.css'

const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [order, setOrder] = useState({})
    const handelBlur = e => {
        const newOrder = { ...order}
        newOrder[e.target.name] = e.target.value
        setOrder(newOrder)
    }

    const sendHandler = ()=>{
        fetch('http://localhost:4000/addOrder', {
            method: 'POST',
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(data => {
                if(data){
                    alert("Order submitted successfully")
                }                
            })
    }
    return (
        <div className="conatainer">
            <header>
                <h3>Order</h3>
                <h5>{loggedInUser.name}</h5>
            </header>
            <div>
                <form action="">
                    <input type="text" onBlur={handelBlur} name="name" className="form-control mb-3 w-50" placeholder="Your Name/Your Company"/>
                    <input type="email" onBlur={handelBlur} name="email" className="form-control mb-3 w-50" placeholder="Your email address"/>
                    <input type="text" onBlur={handelBlur} name="name" className="form-control mb-3 w-50" placeholder=""/>
                    <textarea class="form-control mb-3 w-50" id="exampleFormControlTextarea1" rows="5" placeholder="project details"></textarea>
                    <input type="text" onBlur={handelBlur} name="price" placeholder="price" className="form-control w-50 mb-3"/>
                    <input type="file" onBlur={handelBlur} name="file" className="form-control w-50 mb-3"/>
                    <input type="submit" onClick={sendHandler} className="btn btn-dark" value="send"/>
                </form>
            </div>
        </div>
    );
};

export default Order;