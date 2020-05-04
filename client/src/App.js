import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import TabBar from './NavBar/TabBar.js';
import NavBar from './NavBar/NavBar.js';
import SignPages from './AuthenticationPage/SignPages';
import SigninForm from './AuthenticationPage/SigninForm';
import SignupForm from './AuthenticationPage/SignupForm';
 import RoomSelection from './RoomSelection/RoomSelection';
// import Recording from './Record/Recording';
 import VoicetoText from './Record/VoicetoText';
// import Dictaphone from './Record/Dictaphone';
import Home from './Home/Home.js';
function App() {
  return (
    <div className="App">
     
      <Home />
    </div>
  );
}

export default App;
