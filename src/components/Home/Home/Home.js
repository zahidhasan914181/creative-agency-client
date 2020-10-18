import React from 'react';
import Login from '../../Login/Login';
import Companies from '../Companies/Companies';
import FeedBack from '../FeedBack/FeedBack';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Companies></Companies>
            <Services></Services>
            <Work></Work>
            <FeedBack></FeedBack>
            <Footer></Footer>
        </div>
    );
};

export default Home;