import React from 'react';
import './scss/home.scss';
import {CreateTask}  from './CreateTask';

export const Home =() =>{
        return (
            <div className="home-container">
                <CreateTask/>
            </div>
        )
}