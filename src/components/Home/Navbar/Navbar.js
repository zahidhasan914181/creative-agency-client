import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png';
import './Navbar.css'

const Navbar = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-light">
                <a class="navbar-brand mt-2" href="#">
                    <img src={logo} alt="" className="logo"/>
                </a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ml-auto mt-2">
                        <li class="nav-item ml-5">
                            <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item ml-5">
                            <a class="nav-link" href="#">Our Portfolio</a>
                        </li>
                        <li class="nav-item ml-5">
                            <a class="nav-link" href="#">Our Team</a>
                        </li>
                        <li class="nav-item ml-5">
                            <a class="nav-link" href="#">Conatct Us</a>
                        </li>
                        <li class="nav-item ml-5">
                            <a class="nav-link" href="#">{loggedInUser.name}</a>
                        </li>
                        <Link to="/login"><button class="btn btn-dark ml-3 px-5" type="submit">Log In</button></Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;