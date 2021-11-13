import  React, { Fragment } from 'react';
import {getTaskWeekWise } from '../utils';
import './scss/taskDetails.scss'

export const TaskDetails = ({taskDetails})=>{
    const filteredTaskData = getTaskWeekWise(taskDetails)
    console.log(taskDetails);
        return (
            <Fragment>
                {
                    taskDetails.map(item=>{
                            return(
                                <div className="task-container">
                                    <span>{item.task}</span>
                                    <span>{item.project}</span>
                                    <span>{item.tag}</span>
                                    <span>{item.billing}</span>
                                    <span>{item.timer.startTime} : {item.timer.endTime}</span>
                                </div>
                            )
                    })
                }
            </Fragment>
        )
}