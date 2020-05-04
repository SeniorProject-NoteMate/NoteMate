import React, { Component } from 'react';
import { HashRouter as Router, NavLink, Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js'
import TabBar from '../NavBar/TabBar.js'
import Course from './Course.js'
import CourseList from './CourseList.js'


   
const roomfield = {
  width: "800%",
  backgroundColor: "white",
  padding: "130px",
  fontFamily: "Arial",
  overflow: "auto",
  
};

export default function RoomSelection(){
 return(

        <Router basename="/react-auth-ui/">
       
            <div className="PageForm">
                  <div className="topbar">
                    <NavBar />
                  </div>
                  <div className="courselist" style={roomfield} >
                      <CourseList />
                  </div>
            
            </div>
         </Router>
    );
}

//export default function RoomSelection(){
  // constructor(){
  //     super();
  //     this.state={
  //         room:'',
  //         subject:'',
         

  //     };
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // handleChange(event) {
  //   const target = event.target;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const name = target.name;

  //   this.setState({
  //     [name]: value
  //   });
  // }
  // handleSubmit(event) {
  //   event.preventDefault();
  // }
