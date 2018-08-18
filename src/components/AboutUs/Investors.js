import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import Ycomb from '../../images/logos/ycomb.png';

class AboutUs extends Component {
  render() {
    return (
      <div style={{textAlign:"center", paddingBottom:"75px"}}>
        <MediaQuery minWidth={780}>
          <h1 style={{fontSize:"35px", padding:"75px 0px 60px 0px"}} className="ourtext"><b>Investors</b></h1>
          <a href="http://www.ycombinator.com/"><img src={Ycomb} style={{width:"560px", height:"160px", margin:"auto"}}/></a>
        </MediaQuery>
        <MediaQuery maxWidth={780}>
          <h1 style={{fontSize:"32px", padding:"50px 0px 30px 0px"}} className="ourtext"><b>Investors</b></h1>
          <a href="http://www.ycombinator.com/"><img src={Ycomb} style={{width:"80vw", height:"160px", margin:"auto"}}/></a>
        </MediaQuery>
      </div>
    );
  }
}

export default AboutUs;
