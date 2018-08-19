import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import MediaQuery from 'react-responsive';
import Snackbar from '@material-ui/core/Snackbar';
import axios from 'axios';

import './sign.css';
import 'font-awesome/css/font-awesome.min.css';

class RegisterForm extends React.Component  {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: props.email,
      phone: '',
      company: '',
    };
  }

  notify(mess){
    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = `height:0px;webkit-transition:all 0.5s;transition:all 0.5s;position:fixed;width:100vw;height:0px;z-index:1000;
    display:inline;background:#33CC33;text-align:center;padding:10px;font-size:16px;`;
    elemDiv.style.height= "35px";
    elemDiv.innerHTML=`<i class="fa fa-check-circle-o" aria-hidden="true"></i><span>${mess}<span>`;
    document.body.appendChild(elemDiv);
    document.body.insertBefore(elemDiv, document.getElementById('root'));

    setTimeout(function(){
      elemDiv.style.height="0px";
      elemDiv.style.padding="0px";
      elemDiv.innerHTML="";
    }, 5000);

    setTimeout(function(){
      elemDiv.remove();
    }, 8000);
  }

  error(mess){
    var elemDiv = document.createElement('div');
    elemDiv.style.cssText = `height:0px;webkit-transition:all 0.5s;transition:all 0.5s;position:fixed;width:100vw;height:0px;z-index:1000;
    display:inline;background:red;text-align:center;padding:10px;font-size:16px;`;
    elemDiv.style.height= "35px";
    elemDiv.innerHTML=`</i><span>${mess}<span>`;
    document.body.appendChild(elemDiv);
    document.body.insertBefore(elemDiv, document.getElementById('root'));

    setTimeout(function(){
      elemDiv.style.height="0px";
      elemDiv.style.padding="0px";
      elemDiv.innerHTML="";
    }, 5000);

    setTimeout(function(){
      elemDiv.remove();
    }, 8000);
  }

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += ' was-validated';

    if(event.target.checkValidity()){
      const url = "https://api-server.prodigaltech.com:9999//webform_jshgy9u_82";

      axios.post(url, {
        "name": this.state.name,
        "email": this.state.email,
        "phone":this.state.phone,
        "company":this.state.company
      }).then(res => {
        if(res.status==200){
          this.props.handleClose();
          this.notify(" Thank You For Contacting Us. We will be in touch shortly.")
        }else{
          console.log(res);
          this.error("Something went wrong.")
        }
      }).catch(err => {
        console.log(err);
        this.error(err)
      });
    }
  }

  changeHandler = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value});
  }

  render() {
    return(
      <div>
      <MediaQuery minWidth={780}>
        <Container className="pt-5">
          <Row className="pt-5" style={{textAlign:"center"}}>
            <Col>
              <form className='needs-validation' onSubmit={this.submitHandler} noValidate>
              <Row style={{padding:"0", margin:"0"}} style={{width:"100%"}}>
                <div className="col-12 my-3 row">
                  <label htmlFor="defaultFormRegisterNameEx"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Full Name *</label>
                  <input value={this.state.name} name='name' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" placeholder="Full Name" required/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>This field cannot be empty.</div>
                </div>
                <div className="col-12 my-3 row">
                  <label htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Work Email *</label>
                  <input value={this.state.email} onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" name='email' placeholder="Your Email address" required/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>Enter valid email.</div>
                </div>
                <div className="col-12 my-3 row">
                  <label htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Phone *</label>
                  <input value={this.state.phone} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" name='phone' placeholder="Phone Number"/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>Enter valid phone number.</div>
                </div>
                <div className="col-12 my-3 row">
                  <label htmlFor="defaultFormRegisterNameEx"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Company Name *</label>
                  <input value={this.state.company} name='company' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" placeholder="Company Name" required/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>This field cannot be empty.</div>
                </div>
              </Row>
              <button className="btn btn-unique mt-5 ourbutton" type="submit">Submit</button>
              </form>
            </Col>
          </Row>
        </Container>
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <Container className="pt-1">
          <Row className="pt-1" style={{textAlign:"center", padding:"0", margin:"0"}}>
            <Col>
              <form className='needs-validation' onSubmit={this.submitHandler} noValidate>
              <Row style={{width:"100%", margin:"auto", padding:"0px", textAlign:"center"}}>
                <div className="col-12 my-3 row labelclass">
                  <label htmlFor="defaultFormRegisterNameEx"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Full Name *</label>
                  <input value={this.state.name} name='name' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" placeholder="Full Name" required/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>This field cannot be empty.</div>
                </div>
                <div className="col-12 my-3 row labelclass">
                  <label htmlFor="defaultFormRegisterConfirmEx3"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Work Email *</label>
                  <input value={this.state.email} onChange={this.changeHandler} type="email" id="defaultFormRegisterConfirmEx3"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" name='email' placeholder="Your Email address" required/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>This field cannot be empty.</div>
                </div>
                <div className="col-12 my-3 row labelclass">
                  <label htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Phone *</label>
                  <input value={this.state.phone} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" name='phone' placeholder="Phone Number" required/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>This field cannot be empty.</div>
                </div>
                <div className="col-12 my-3 row labelclass">
                  <label htmlFor="defaultFormRegisterNameEx"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Company Name *</label>
                  <input value={this.state.company} name='company' onChange={this.changeHandler} type="text" id="defaultFormRegisterNameEx"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" placeholder="Company Name" required/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>This field cannot be empty.</div>
                </div>
              </Row>
              <button className="btn btn-unique my-2 ourbutton" type="submit">Submit</button>
              </form>
            </Col>
          </Row>
        </Container>
      </MediaQuery>
      </div>
    );
  }
};

export default RegisterForm;
