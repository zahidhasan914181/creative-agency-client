import React from 'react';
import './FooterCol.css'

const FooterCol = () => {
    return (
        <div className="container">
            <div className="row pb-5">
                <div className="col-md-6">
                    <h1>Let us handle your <br/>project, professionally.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse odit impedit reprehenderit, repellendus expedita, totam, adipisci reiciendis nobis quos libero obcaecati voluptas aliquid autem aut repudiandae. Asperiores, et cum!</p>
                </div>
                <div className="col-md-6">
                    <form action="">
                        <input type="email" className="form-control mb-3 p-4" placeholder="Your email address"/>
                        <input type="text" className="form-control mb-3 p-4" placeholder="Your name/Your company"/>
                        <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="10" placeholder="Your message"></textarea>
                        <input type="submit" className="btn btn-dark" value="send"/>
                    </form>
                </div>
            </div>
            <div className="copyRight text-center">
                    <small>Copyright {(new Date()).getFullYear()} All Rights Reserved</small>
                </div>
        </div>
    );
};

export default FooterCol;