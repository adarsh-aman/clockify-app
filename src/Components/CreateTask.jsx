import React,{ Fragment,useState,useEffect } from 'react';
import { Modal } from './Modal';
import {TaskDetails} from './TaskDetails'

export const CreateTask = () =>{
    const [showProjectModal, setShowProjectModal] = useState(false);
    const [taskName,setTaskName] = useState('');
    const [startTimer, setStartTimer] = useState(true)
    const [stopTimer, setStopTimer] = useState(false);
    const [taskDetails, setTaskDetails] = useState([]);

    function handleChange(e){
        let value = e.target.value;
        setTaskName(value);
    }
    function handleProjectClick(){
        setShowProjectModal(!showProjectModal)
    }
    function handleStartClick(){
        setStartTimer(!startTimer)
        setStopTimer(!stopTimer)
    }
    function handleStopClick(){
        let value = {
            task : taskName,
            project: "Project 1",
            timer:{
                startTime: '12:30',
                endTime: '12:35'
            },
            billing: '$5',
            tag: 'development',
            date: new Date()
        }
        let temp = [];
        temp.push(value)
        setTaskDetails([...taskDetails, ...temp]);
        setStartTimer(!startTimer);
        setStopTimer(!stopTimer)
        setTaskName('')
    }

        return (
                <Fragment>
                    <div>
                    <input onChange={handleChange} value={taskName}/>
                    <button onClick={()=>handleProjectClick()}>Project</button>
                    {startTimer && <button onClick={()=>handleStartClick()}>Start</button>}
                    {stopTimer && <button onClick={()=>handleStopClick()}>Stop</button>}
                    {showProjectModal && <Modal/>}
                    </div>
                    {taskDetails.length ? <TaskDetails taskDetails={taskDetails}/>:null}
                </Fragment>
        )
}