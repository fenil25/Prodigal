import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';
import Dialog from '@material-ui/core/Dialog';
import SignUp from '../SignUp/SignUp';
import './main.css';

class SignUpForm extends Component {
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
      <div style={{width:"100vw"}}>
      <div className="row hform" style={{backgroundColor:"#353535"}}>
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 hform redheight" style={{display: "table"}}>
          <div style={{display: "table-cell", verticalAlign: "middle", textAlign: "center"}}>
            <MediaQuery maxWidth={780}>
              <span style={{color:"white", fontSize:"28px", padding:"0px 15px"}}><b>See why collection managers love us</b></span><br/>
            </MediaQuery>
            <MediaQuery minWidth={780}>
              <div className="mx-5">
              <span style={{color:"#FFF", fontSize:"30px"}}><b>See why collection managers love us</b></span><br/>
              </div>
            </MediaQuery>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 hform redheight2" style={{display: "table", padding:"0px"}}>
          <div className="col-md-12" style={{display: "table-cell", verticalAlign: "middle"}}>
            <div className="mb-2 form-group" style={{textAlign:"center"}}>
              <input ref="input1" type="email" className="col-md-8 col-lg-8 col-sm-12 col-xs-12 inputbox" placeholder="  Enter you work email"
              style={{width: "80%", height: "45px", backgroundColor:"#4F4F4F", color:"white",
              border:"none", borderRadius:"8px"}}/>
              <button type="submit" className="col-md-4 col-lg-4 col-sm-12 col-xs-12 btn ourbutton suf mx-3"
              style={{height: "45px", fontSize:"14px"}} onClick={this.check}>Sign Up For Free</button>
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

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(SignUpForm);
