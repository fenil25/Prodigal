import React, { Component } from 'react';
import Card from './Card.js';

import sangram from '../../images/team/sangram.jpg';
import shantanu from '../../images/team/shantanu.jpg';
import saransh from '../../images/team/saransh.jpg';

class Team extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#DDD", textAlign:"center", paddingBottom:"100px"}}>
        <h1 style={{fontSize:"35px", padding:"75px 0px"}} className="ourtext"><b>Our Team</b></h1>
        <div className="row">
          <div className="col-md-4">
            <Card name="Shantanu Gangal" description="Head of Data & Analytics at Fundbox, San Francisco based SMB lender where he implemented
            novel collection strategies." image={shantanu} position="Chief Executive Officer" link="https://www.linkedin.com/in/shantanugangal/"/>
          </div>
          <div className="col-md-4">
            <Card name="Sangram Raje" position="Chief Technical Officer" description="Co-led a 15-member trading desk at Tower Research
             (prop. high-frequency hedge fund) for 9 years in New York. Sangram built algorithms and engineering infrastructure for handling
             massive amount of data in real-time." image={sangram} link="https://www.linkedin.com/in/sangramraje/"/>
          </div>
          <div className="col-md-4">
          <Card name="Saransh Garg" position="Chief Operations Officer" description="Fintech investor at Accel, helped invest $50M+ in consumer and
          SMB lenders. Previously consulted banks and other institutions at The Boston Consulting Group." image={saransh}
          link="https://www.linkedin.com/in/saranshgarg2/"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
