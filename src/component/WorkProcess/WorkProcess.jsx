import React from 'react'
import ProgressBar from '../ProgressBar/StepProgressBar'
import './WorkProgress.css';

export default function WorkProcess() {
    return (
        <div  className="Work__progress">
            <p style={{color:'white',textAlign:'center'}}>Quisque tellus risus, adipisci</p>
            <h1 style={{color:'white',textAlign:'center',fontSize:"50px"}}>Our Work Process</h1>
            <ProgressBar />
        </div>
    )
}
