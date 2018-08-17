import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaQuery from 'react-responsive';
import img1 from '../../images/facts/img1.jpg';
import 'font-awesome/css/font-awesome.min.css';

import RegisterForm from './RegisterForm';
import SignUpFact from './SignUpFact';
import './sign.css';

import conv from '../../images/facts/conv.png';
import growth from '../../images/facts/growth.png';
import vendor from '../../images/facts/vendor.png';

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

class SignUp extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <MediaQuery minWidth={780}>
      <i className="fa fa-times float-right fa-5x m-5 exit" style={{fontSize:"50px", color:"#777"}} onClick={this.props.handleClose}></i>
        <div className="mx-5 mt-3 row">
          <div className="col" style={{display:"table"}}>
            <h1 style={{fontSize: "52px", color:"#006DAA", fontFamily:"'Merriweather', serif"}}><i>Prodigal</i></h1>
            <span style={{fontSize: "24px", color:"#5B5B5B"}}>Sign Up For Free</span>
          </div>
        </div><Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <div style={{textAlign:"left"}}>
              <SignUpFact image={vendor} number="10+" description="Lenders working with us"/>
              <SignUpFact image={conv} number="50,000+" description="Borrower Conversations"/>
              <SignUpFact image={growth} number="20%" description="Lift in repayment for lenders"/>
            </div>
          </Grid>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <div style={{textAlign:"center"}}>
              <RegisterForm email={this.props.email} handleClose={this.props.handleClose} opensnackbar={this.props.opensnackbar}/>
            </div>
          </Grid>
        </Grid>
      </MediaQuery>


      <MediaQuery maxWidth={780}>
      <i className="fa fa-times float-right fa-3x m-5 exit" style={{fontSize:"50px", color:"#777"}} onClick={this.props.handleClose}></i>
        <div className="mx-4 mt-4 row">
          <div className="col" style={{display:"table"}}>
            <h1 style={{fontSize: "40px", color:"#006DAA", fontFamily:"'Merriweather', serif"}}><i><b>Prodigal</b></i></h1>
            <span style={{fontSize: "16px", color:"#5B5B5B"}}>Sign Up For Free</span>
          </div>
        </div>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <div style={{textAlign:"center"}}>
              <RegisterForm email={this.props.email} handleClose={this.props.handleClose} opensnackbar={this.props.opensnackbar}/>
            </div>
          </Grid>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <div style={{textAlign:"left"}}>
              <SignUpFact image={vendor} number="10+" description="Lenders working with us"/>
              <SignUpFact image={conv} number="50,000+" description="Borrower Conversations"/>
              <SignUpFact image={growth} number="20%" description="Lift in repayment for lenders"/>
            </div>
          </Grid>
        </Grid>
      </MediaQuery>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
