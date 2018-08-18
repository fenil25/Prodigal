import React, { Component } from 'react';
import {a} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import 'font-awesome/css/font-awesome.min.css';

class Copyrights extends Component {
  render() {
    return (
      <div>
      <MediaQuery minWidth={781}>
        <div style={{backgroundColor: "#111", color:"#EEE", height:"70px", paddingLeft:"10px", paddingTop: "10px"}} className="row">
          <div className="col-3" style={{textAlign:"left"}}><br/><i class="fa fa-copyright" aria-hidden="true"></i>Prodigal Technologies Inc, 2018</div>
          <div className="col-3" style={{textAlign:"center"}}>
            <a href="/" style={{color:"white"}}><span>Home</span></a><br/>
            <a href="/about" style={{color:"white"}}><span>About Us</span></a>
          </div>
          <div className="col-3" style={{textAlign:"center"}}>
          <div style={{width:"100%"}}>
            <a href="/terms&conditions" style={{color:"white"}}><span>Terms</span></a><br/>
            <a href="/privacypolicy" style={{color:"white"}}><span>Privacy</span></a></div>
          </div>
          <div className="col-3" style={{textAlign:"right", paddingRight:"40px"}}><br/>support@prodigaltech.com</div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={781}>
        <div style={{backgroundColor: "#111", color:"#EEE",
        height:"170px",padding:"3.9vw", paddingTop: "10px", fontSize:"14px", textAlign:"center"}}>
          <a href="/" style={{color:"white"}}><span>Home</span></a><br/>
          <a href="/about" style={{color:"white"}}><span>About Us</span></a><br/>
          <a href="/terms&conditions" style={{color:"white"}}><span>Terms</span></a><br/>
          <a href="/privacypolicy" style={{color:"white"}}><span>Privacy</span></a><br/><br/>
          <div style={{fontSize:"12px"}}>support@prodigaltech.com</div><br/>
          <div style={{fontSize:"10px"}}><i class="fa fa-copyright" aria-hidden="true"></i>Prodigal Technologies Inc, 2018</div>
        </div>
      </MediaQuery>
      </div>
    );
  }
}

export default Copyrights;
