import React from 'react';
import {Header} from './Header'; 
import {SideNav} from './SideNav';
import {Home} from './Home';
import './scss/home.scss';

const Dashboard = () =>{
    return (
        <div>
            <Header/>
            <div className="contentWrapper">
                <SideNav/>
                <Home/>
            </div>
        </div>
    )
}

export default Dashboard;