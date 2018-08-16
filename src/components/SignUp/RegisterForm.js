import React from 'react';
import { Container, Row, Col } from 'mdbreact';
import MediaQuery from 'react-responsive';
import './sign.css';

class RegisterForm extends React.Component  {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      email: props.email,
      phone: '',
      company: ''
    };
  }

  submitHandler = (event) => {
    event.preventDefault();
    event.target.className += ' was-validated';
  }

  changeHandler = (event) => {
    this.setState({...this.state, [event.target.name]: event.target.value})
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
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>This field cannot be empty.</div>
                </div>
                <div className="col-12 my-3 row">
                  <label htmlFor="defaultFormRegisterPasswordEx4"
                  className="grey-text col-md-4 col-lg-4 col-sm-12 col-xs-12 labelclass">Phone *</label>
                  <input value={this.state.phone} onChange={this.changeHandler} type="text" id="defaultFormRegisterPasswordEx4"
                  className="form-control col-md-8 col-sm-12 col-xs-12 col-lg-8 inputbox" name='phone' placeholder="Phone Number" required/>
                  <div className="invalid-feedback offset-4" style={{textAlign:"left"}}>This field cannot be empty.</div>
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
              <Row style={{padding:"0", margin:"0"}} style={{width:"100%"}}>
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
