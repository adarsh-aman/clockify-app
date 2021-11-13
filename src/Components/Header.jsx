import React,{Fragment} from 'react';
import './scss/header.scss';

export const Header = () =>{
        return (
            <React.Fragment>
                <div className='header-wrapper'>
                    <div className="header-left">
                        <span className="clockify-title">Clockify</span>
                    </div>
                    <div className="header-right">
                        <span className="workspace-name">Adarsh Aman Workspace</span>
                        <span className="upgrade">UPGRADE</span>
                        <span className="help-icon"></span>
                        <span className="notification-icon"></span>
                        <span className="Profile-icon">AA</span>
                    </div>
                </div>
            </React.Fragment>
        )
}