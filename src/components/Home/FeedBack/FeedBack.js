import React from 'react';
import customar1 from '../../../images/customer-1.png'
import customar2 from '../../../images/customer-2.png'
import customar3 from '../../../images/customer-3.png'
import Clients from '../Clients/Clients';
const clientFeedback = [
    {
        'img': customar1,
        'name': 'Nash Patrik',
        'position': 'CEO, Manpol'
    },
    {
        'img': customar2,
        'name': 'Miriam Barron',
        'position': 'CEO, Manpol'
    },
    {
        'img': customar3,
        'name': 'Bria Malone',
        'position': 'CEO, Manpol'
    },
]
const FeedBack = () => {
    return (
        <div className="container">
            <h1 className="text-center mb-5 pb-5">Clients <span className="text-success">Feedback</span></h1>
            <div className="card-deck row my-5">
                {
                    clientFeedback.map(feedback => <Clients feedback={feedback}></Clients>)
                }
            </div>
        </div>
    );
};

export default FeedBack;