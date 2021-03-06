import React, { Component } from 'react';
import {a} from 'react-router-dom';
import MediaQuery from 'react-responsive';
import 'font-awesome/css/font-awesome.min.css';

class Copyrights extends Component {
  render() {
    return (
      <div>
      <MediaQuery minWidth={781}>
        {/*}<div style={{backgroundColor: "#111", color:"#EEE", height:"70px", paddingLeft:"10px", paddingTop: "10px"}} className="row">
          <div className="col-3" style={{textAlign:"left"}}><br/>
          <i class="fa fa-copyright" aria-hidden="true"></i>Prodigal Technologies Inc, 2018</div>
          <div className="col-3" style={{textAlign:"center"}}>
            <a href="/" style={{color:"white"}}><span>Home</span></a><br/>
            <a href="/about" style={{color:"white"}}><span>About Us</span></a>
          </div>
          <div className="col-3" style={{textAlign:"center"}}>
          <div style={{width:"100%"}}>
            <a href="/terms&conditions" style={{color:"white"}}><span>Terms</span></a><br/>
            <a href="/privacypolicy" style={{color:"white"}}><span>Privacy</span></a></div>
          </div>
          <div className="col-3" style={{textAlign:"right", paddingRight:"40px"}}>+1 (650) 802-7795<br/>support@prodigaltech.com</div>
        </div>*/}

        <div style={{backgroundColor: "#111", color:"#AAA", padding: "20px 0px 10px 10px"}}>
          <div className="row mx-4" style={{textAlign:"left", fontSize:"20px"}}>
            <a href="/" style={{color:"#AAA"}} className="col-3"><span>Home</span></a><br/>
            <a href="/about" style={{color:"#AAA"}} className="col-3"><span>About Us</span></a>
            <a href="/terms&conditions" style={{color:"#AAA"}} className="col-3"><span>Terms</span></a><br/>
            <a href="/privacypolicy" style={{color:"#AAA"}} className="col-3"><span>Privacy</span></a>
          </div><br/>
          <div className="row px-4" style={{textAlign:"right"}}>
          <div className="col-12" style={{textAlign:"center", paddingRight:"40px", fontSize:"16px"}}>+1 (650) 802-7795<br/>support@prodigaltech.com</div>
          <div className="col-12"><i class="fa fa-copyright" aria-hidden="true"></i>Prodigal Technologies Inc, 2018</div>
          </div>
        </div>
      </MediaQuery>


      <MediaQuery maxWidth={781}>
        <div style={{backgroundColor: "#111", color:"#EEE",
        height:"200px",padding:"3.9vw", paddingTop: "10px", fontSize:"14px", textAlign:"center"}}>
          <a href="/" style={{color:"white"}}><span>Home</span></a><br/>
          <a href="/about" style={{color:"white"}}><span>About Us</span></a><br/>
          <a href="/terms&conditions" style={{color:"white"}}><span>Terms</span></a><br/>
          <a href="/privacypolicy" style={{color:"white"}}><span>Privacy</span></a><br/><br/>
          <div style={{fontSize:"12px"}}>+1 (650) 802-7795<br/>support@prodigaltech.com</div><br/>
          <div style={{fontSize:"10px"}}><i class="fa fa-copyright" aria-hidden="true"></i>Prodigal Technologies Inc, 2018</div>
        </div>
      </MediaQuery>
      </div>
    );
  }
}

export default Copyrights;
