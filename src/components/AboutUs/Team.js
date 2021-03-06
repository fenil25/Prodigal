import React, { Component } from 'react';
import Card from './Card.js';

import sangram from '../../images/team/sangram.jpg';
import shantanu from '../../images/team/shantanu.jpg';
import saransh from '../../images/team/saransh.jpg';

class Team extends Component {
  render() {
    return (
      <div style={{backgroundColor:"#DDD", textAlign:"center", paddingBottom:"100px", overflow:"hidden"}}>
        <h1 style={{fontSize:"35px", padding:"40px 0px", margin:"0px"}} className="ourtext"><b>Our Team</b></h1>
        <div className="row">
          <div className="col-md-4">
            <Card name="Shantanu Gangal" description="Head of Data & Analytics at Fundbox, a San Francisco based SMB lender where he implemented
            novel collection strategies." image={shantanu} position="CEO" link="https://www.linkedin.com/in/shantanugangal/"/>
          </div>
          <div className="col-md-4">
            <Card name="Sangram Raje" position="CTO" description="Co-led a 15-member trading desk at Tower Research
            (high-frequency hedge fund) for 9 years in New York.
             Built algorithms and engineering infrastructure for handling massive amount of data in real-time" image={sangram} link="https://www.linkedin.com/in/sangramraje/"/>
          </div>
          <div className="col-md-4">
          <Card name="Saransh Garg" position="CPO" description="Fintech investor at Accel, helped invest $50M+ in consumer and
          SMB lenders. Previously consulted banks and other institutions at The Boston Consulting Group." image={saransh}
          link="https://www.linkedin.com/in/saranshgarg2/"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
