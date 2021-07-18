import React, { Component } from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import './Progress.css'

export default class StepProgressBar extends Component {
  render() {
    return (
      <div className="bar">
      <ProgressBar
        percent={75}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step>
    {({ accomplished, index }) => (
      <div className="progress"
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      ><span className="progress">1</span>
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
  <Step>
    {({ accomplished, index }) => (
      <div
        className={`indexedStep ${accomplished ? "accomplished" : null}`}
      >
        {index + 1}
      </div>
    )}
  </Step>
      </ProgressBar>
      </div>
    )
  }
}
