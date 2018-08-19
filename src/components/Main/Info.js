import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';
import Dialog from '@material-ui/core/Dialog';
import SignUp from '../SignUp/SignUp';
import Slide from '@material-ui/core/Slide';
import './main.css';

import img1 from '../../images/home.png';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Info extends Component {
  constructor(props) {
    super(props);

    this.state={
      email: "",
      open: false,
    }
  }

    handleClose = () => {
      console.log(this.state.open);
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
    return (
      <div className="row inforow">
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
          <div style={{textAlign:"center", width:"100%"}} className="inf">
            <img src={img1} className="mainimg"/>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
          <div style={{display:"table"}} className="infodiv">
            <div style={{display: "table-cell", verticalAlign: "middle"}}>
            <h1 className="infohead" style={{margin:"0px", padding:"0px"}}><b>
            Lenders use Prodigal software to improve servicing and collections</b></h1>
            <br/>
            <div className="infosubhead">
            <p style={{margin:"0px", marginBottom:"10px"}}>We help lenders reach borrowers on channels they choose.
            We generate an improvement of 20% in repayments.</p>
            </div>
            <br/>
            <div className="form-group mb-2">
              <input ref="input1" type="email" className="col-md-8 col-lg-8 col-sm-12 col-xs-12" placeholder="  Enter you work email"
              style={{width: "100%", height: "45px", backgroundColor:"#DDDDDD",color:"#444444",
              borderRadius:"8px", border:"none", marginBottom:"20px"}}/>
              <button type="submit" className="btn ourbutton suf mx-3"
               style={{height: "45px", fontSize:"14px"}}
               onClick={this.check}><b>Sign Up For Free</b></button>
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

Info.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(Info);
