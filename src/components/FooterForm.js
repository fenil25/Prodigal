import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import MediaQuery from 'react-responsive';

class FooterForm extends Component {
  constructor(props){
    super(props);

    this.state={
      valid: 0,
      email: ""
    }
  }

  check = () => {
    let x = this.refs.input1;
    let v = x.value;
    let t=x.parentNode.childNodes[2];
    if(v==""){
      x.style.border="2px solid red";
      let err = document.createElement('small');
      err.innerHTML = "<br/>This field is required.";
      err.style.color = "red";
      if(t){
        x.parentNode.replaceChild(err, t);
      }else{
        x.parentNode.appendChild(err);
      }
    }
    else{
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(String(v).toLowerCase())){
        this.setState({valid:3, email:v});
      }else{
        x.style.border="2px solid red";
        let err = document.createElement('small');
        err.innerHTML = "<br/>Enter a valid Email.";
        err.style.color = "red";
        if(t){
          x.parentNode.replaceChild(err, t);
        }else{
          x.parentNode.appendChild(err);
        }
      }
    }
  }

  render() {
    let sendTo = {
      pathname: '/signup',
      state:{
        email: this.state.email
      }
    };

    return (
      <div style={{width:"100vw", overflow:"hidden"}}>
      <div className="row hform" style={{backgroundColor:"#353535"}}>
        {this.state.valid==3 && <Redirect to={sendTo}/>}
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 hform redheight" style={{display: "table"}}>
          <div style={{display: "table-cell", verticalAlign: "middle", textAlign: "center"}}>
            <MediaQuery maxWidth={780}>
              <span style={{color:"white", fontSize:"28px", padding:"0px 15px"}}>Want a 20% increase in your repayments?</span><br/>
            </MediaQuery>
            <MediaQuery minWidth={780}>
              <div className="mx-5">
              <span style={{color:"#FFF", fontSize:"30px"}}>Want a 20% increase in your repayments?</span><br/>
              <span style={{color:"#BCBCBC", fontSize:"22px"}}>Schedule a demo to see how our intelligent platform can help you benefit</span>
              </div>
            </MediaQuery>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 hform redheight2" style={{display: "table"}}>
          <div className="col-md-10" style={{display: "table-cell", verticalAlign: "middle", textAlign:"center"}}>
            <div className="mb-2 form-group" style={{display:"inline"}}>
              <input ref="input1" type="email" className="col-md-8 col-lg-8 col-sm-12 col-xs-12 inputbox" placeholder="  Email"
              style={{width: "100%", height: "45px", backgroundColor:"#4F4F4F", color:"white", border:"none", borderRadius:"8px"}}/>
              <button type="submit" className="col-md-4 col-lg-4 col-sm-12 col-xs-12 btn ourbutton mx-3"
              style={{width: "180px", height: "45px", fontSize:"14px"}} onClick={this.check}>Get Started For Free</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default FooterForm;
