import React, { Component } from 'react';
import "./About.css";
import profile_pic from "../assets/profile_pic.jpeg";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
            <div className="split left">
            <div className="centered">
            <img 
            src= {profile_pic}
            className="profile_image"
            // Image goes here
            alt="Profile Pic"
            ></img>
            </div>
            </div>
            <div className="split right">
            <div className="centered">
            <div className="name_title">Jaden Ritchie</div>
            <div className="brief_description">
              <p>My name is Jaden Ritchie. I am to become a software engineeer. In my free time I watch movies, play basketball, and play console games</p>
            </div>
            </div>
            </div>
            </div>
      </div>
    )
  }
}
