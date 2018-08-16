import React, { Component } from 'react';
import PCarousel from './PCarousel';
import Facts from './Facts';
import SignUpForm from './SignUpForm';
import Info from './Info';
import './main.css';

class Main extends Component {
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
