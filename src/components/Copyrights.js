import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import MediaQuery from 'react-responsive';

class Copyrights extends Component {
  render() {
    return (
      <div>
      <MediaQuery minWidth={781}>
        <div style={{backgroundColor: "#111", color:"#EEE", height:"70px", paddingLeft:"3.9vw", paddingTop: "10px"}} className="row">
          <div className="col-md-4 col-lg-4" style={{textAlign:"left"}}><br/>@Copyrights reserved by ProdicalTech.</div>
          <div classname="col-md-4 col-lg-4" style={{marginLeft:"20px"}}>
            <div style={{width:"20vw"}}>
            <Link to="/" style={{color:"white"}}><span>Home</span></Link><br/>
            <Link to="/about" style={{color:"white"}}><span>About</span></Link>
            </div>
          </div>
          <div classname="col-md-4 col-lg-4" style={{textAlign:"center"}}>
          <div style={{width:"100%"}}>
            <Link to="/terms&conditions" style={{color:"white"}}><span>Terms and Conditions</span></Link><br/>
            <Link to="/privacypolicy" style={{color:"white"}}><span>Privacy Policy</span></Link></div>
          </div>
          <br/><div className="col-md-4 col-lg-4" style={{textAlign:"right"}}><br/>support@prodigaltech.com</div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={781}>
        <div style={{backgroundColor: "#111", color:"#EEE",
        height:"170px",padding:"3.9vw", paddingTop: "10px", fontSize:"14px", textAlign:"center"}}>
          <Link to="/" style={{color:"white"}}><span>Home</span></Link><br/>
          <Link to="/about" style={{color:"white"}}><span>About</span></Link><br/>
          <Link to="/terms&conditions" style={{color:"white"}}><span>Terms & Conditions</span></Link><br/>
          <Link to="/privacypolicy" style={{color:"white"}}><span>Privacy Policy</span></Link><br/><br/>
          <div style={{fontSize:"12px"}}>support@prodigaltech.com</div><br/>
          <div style={{fontSize:"10px"}}>@Copyrights reserved by ProdicalTech.</div>
        </div>
      </MediaQuery>
      </div>
    );
  }
}

export default Copyrights;
