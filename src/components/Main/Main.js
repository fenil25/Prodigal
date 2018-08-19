import React, { Component } from 'react';
import PCarousel from './PCarousel';
import Facts from './Facts';
import SignUpForm from './SignUpForm';
import Info from './Info';
import './main.css';
import { Zoom, Slide } from 'react-toastify';

class Main extends Component {

  componentDidMount () {
    window.Intercom("update");
  }

  render() {
    return (
      <div>
        <Info/>
        <Facts/>
        <SignUpForm/>
        <PCarousel/>
      </div>
    );
  }
}

export default Main;
