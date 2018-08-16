import React, { Component } from 'react';
import Approach from './Approach.js';
import Team from './Team';
import Investors from './Investors';
import './about.css';

class AboutUs extends Component {
  render() {
    return (
      <div>
        <Approach/>
        <Team/>
        <Investors/>
      </div>
    );
  }
}

export default AboutUs;
