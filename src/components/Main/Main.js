import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import PCarousel from './PCarousel';
import Facts from './Facts';
import SignUpForm from './SignUpForm';
import Info from './Info';
import './main.css';
import { Zoom, Slide } from 'react-toastify';

class Main extends Component {
  render() {
    return (
      <div>
        <ToastContainer autoClose={5000} hideProgressBar={true} transition={Slide} style={{width:"100%", margin:"0", padding:"0"}}/>
        <Info/>
        <Facts/>
        <SignUpForm/>
        <PCarousel/>
      </div>
    );
  }
}

export default Main;
