import React from 'react';
import './scss/home.scss';

export const SideNav = () =>{
        return(
            <div className="sideNav-container">
                <a><span>Timer Tracker</span></a>
                <a><span>Calender</span></a>
                <div>Analyze</div>
                <a><span>Dashboard</span></a>
                <a><span>Reports</span></a>
                <div>Manage</div>
                <a><span>Projects</span></a>
                <a><span>Team</span></a>
                <a><span>Client</span></a>
                <a><span>Tags</span></a>
                <a><span>Settings</span></a>
            </div>
        )
}