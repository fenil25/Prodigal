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

class FooterPage extends React.Component {
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

    render(){
      let sendTo = {
        pathname: '/signup',
        state:{
          email: this.state.email
        }
      };
        return(
          <div style={{backgroundColor:"#003366"}}>
          <MediaQuery minWidth={780}>
            <Footer color="unique-color-dark" className="page-footer font-small" style={{backgroundColor:"#003366"}}>
                <div className="text-center text-md-left">
                    <Row>
                        <Col md="3" className="pt-4" style={{backgroundColor: "#001122", paddingLeft:"3.9vw"}}>
                            <span style={{fontSize: "30px", color: "orange"}}><i>Prodigal</i></span>
                            <div style={{color:"#DDD", fontSize:"18px"}} className="mt-4">
                              <p>655 FairOaks,<br/>Sunnyvale, CA</p>
                              <p>support@prodigaltech.com</p>
                              <p>650-476-4XXX</p>
                            </div>
                        </Col>
                        <Col md="1" className="pt-4">
                          <div style={{color:"#FFF", fontSize:"22px"}} className="mt-4">
                            <Link to="/" style={{color:"white", textDecoration:"none"}}><p>Home</p></Link>
                          </div>
                        </Col>
                        <Col md="2" className="p-4">
                          <div style={{color:"#FFF", fontSize:"22px"}} className="mt-4">
                            <Link to="about" style={{color:"white", textDecoration:"none"}}><p>About Us</p></Link>
                            <Link to="about" style={{color:"white", textDecoration:"none"}}><p>Investors</p></Link>
                          </div>
                        </Col>
                        <Col md="6" >
                          <div style={{display: "table", height:"100%"}}>
                          <div className="mb-2" style={{display: "table-cell", verticalAlign: "middle"}}>
                            <span style={{color:"white", fontSize:"30px"}}>Want a 20% increase in your repayments?</span><br/>
                            <span style={{color:"#AAA", fontSize:"22px"}}>Schedule a demo to see how our intelligent platform can help you benefit</span><br/><br/>
                            <div className="form-group">
                              <input ref="input1" type="email" className="col-md-8 col-lg-8 col-sm-12 col-xs-12" placeholder="  Email"
                                style={{width: "100%", height: "45px", backgroundColor:"#002244", color:"white", border:"none", borderRadius:"8px"}}/>
                              <button type="submit" className="col-md-4 col-lg-4 col-sm-12 col-xs-12 btn mx-3 ourbutton"
                                style={{width: "150px", height: "45px", fontSize:"14px"}} onClick={this.check}>Sign Up For Free</button>
                            </div>
                          </div>
                          </div>
                        </Col>
                    </Row>
                </div>
            </Footer>
            </MediaQuery>
            <MediaQuery maxWidth={780}>
              <div style={{width:"100vw"}}>
                <div style={{display: "table", height:"100%", backgroundColor:"#003366", textAlign:"center", padding:"30px"}}>
                <div style={{display: "table-cell", verticalAlign: "middle"}}>
                  <span style={{color:"white", fontSize:"20px"}}>Want a 20% increase in your repayments?</span><br/>
                  <span style={{color:"#AAA", fontSize:"14px"}}>Schedule a demo to see how our intelligent platform can help you benefit</span><br/><br/>
                  <div className="form-group">
                    <input ref="input1" type="email" className="col-md-8 col-lg-8 col-sm-12 col-xs-12 mb-3" placeholder="  Email"
                      style={{width: "90%", height: "45px", backgroundColor:"#002244", color:"white", border:"none", borderRadius:"8px"}}/>
                    <button type="submit" className="col-md-4 col-lg-4 col-sm-12 col-xs-12 btn ourbutton mx-3"
                      style={{width: "150px", height: "45px", fontSize:"14px"}} onClick={this.check}>Sign Up For Free</button>
                  </div>
                </div>
                </div>
              </div>
              <div className="row" style={{backgroundColor: "#003366", width:"100vw"}}>
                <div className="col-7" style={{backgroundColor:"#001122", padding:"30px"}}>
                  <span style={{fontSize: "22px", color: "orange"}}><i>Prodigal</i></span>
                  <div style={{color:"#DDD", fontSize:"14px"}} className="mt-4">
                    <p>655 FairOaks,<br/>Sunnyvale, CA</p>
                    <p>support@prodigaltech.com</p>
                    <p>650-476-4XXX</p>
                  </div>
                </div>
                <div className="col-2">
                  <div style={{color:"#FFF", fontSize:"12px"}} className="mt-4">
                    <Link to="/" style={{color:"white", textDecoration:"none"}}><p>Home</p></Link>
                  </div>
                </div>
                <div className="col-3">
                  <div style={{color:"#FFF", fontSize:"12px"}} className="mt-4">
                    <Link to="/about" style={{color:"white", textDecoration:"none"}}><p>About Us</p></Link>
                    <Link to="/about" style={{color:"white", textDecoration:"none"}}><p>Investors</p></Link>
                  </div>
                </div>
              </div>
            </MediaQuery>
            <Dialog
              fullScreen
              open={this.state.open}
              onClose={this.handleClose}
              TransitionComponent={Transition}
            >
              <SignUp handleClose={this.handleClose} email={this.state.email}/>
            </Dialog>
          </div>
        );
    }
}

FooterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(FooterPage);
