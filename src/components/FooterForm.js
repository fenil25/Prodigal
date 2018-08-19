import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import { Col, Container, Row, Footer } from 'mdbreact';
import MediaQuery from 'react-responsive';

import SignUp from './SignUp/SignUp';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FooterForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      email: "",
      open: false,
    }
  }

    handleClose = () => {
      this.setState({ open: false });
    };

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
        this.setState({email: v, open: true});
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
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 hform redheight" style={{display: "table"}}>
          <div style={{display: "table-cell", verticalAlign: "middle", textAlign: "center"}}>
            <MediaQuery maxWidth={780}>
              <span style={{color:"white", fontSize:"28px", padding:"0px 15px"}}>Want a 20% increase in your repayments?</span><br/>
            </MediaQuery>
            <MediaQuery minWidth={780}>
              <div className="mx-1">
              <span style={{color:"#FFF", fontSize:"24px"}}>Want a 20% increase in your repayments?</span><br/>
              <span style={{color:"#BCBCBC", fontSize:"16px"}}>Schedule a demo to see how our intelligent platform can help you benefit</span>
              </div>
            </MediaQuery>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 hform redheight2" style={{display: "table"}}>
          <div className="col-md-10" style={{display: "table-cell", verticalAlign: "middle", textAlign:"center"}}>
            <div className="mb-2 form-group" style={{display:"inline"}}>
              <input ref="input1" type="email" className="col-md-8 col-lg-8 col-sm-12 col-xs-12 inputbox" placeholder="  Enter your work email"
              style={{width: "100%", height: "45px", backgroundColor:"#4F4F4F", color:"white", border:"none", borderRadius:"8px"}}/>
              <button type="submit" className="btn ourbutton mx-3 gsff"
              style={{height: "45px", fontSize:"14px"}} onClick={this.check}>Get Started For Free</button>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        fullScreen
        open={this.state.open}
        onClose={this.handleClose}
      >
        <SignUp handleClose={this.handleClose} email={this.state.email}/>
      </Dialog>
      </div>
    );
  }
}

FooterForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(FooterForm);
