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
            <h1 style={{fontSize: "52px", color:"#003366"}}><i>Prodigal</i></h1>
            <span style={{fontSize: "24px", color:"#5B5B5B"}}>Sign Up For Free</span>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={780}>
      <i className="fa fa-times float-right fa-3x m-5 exit" style={{fontSize:"50px", color:"#777"}} onClick={this.props.handleClose}></i>
        <div className="mx-4 mt-4 row">
          <div className="col" style={{display:"table"}}>
            <h1 style={{fontSize: "40px", color:"#006DAA"}}><i><b>Prodigal</b></i></h1>
            <span style={{fontSize: "16px", color:"#5B5B5B"}}>Sign Up For Free</span>
          </div>
        </div>
      </MediaQuery>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <div style={{textAlign:"center"}}>
              <RegisterForm email={this.props.email}/>
            </div>
          </Grid>
          <Grid item md={6} xs={12} sm={12} lg={6}>
            <div style={{textAlign:"left"}}>
              <SignUpFact image={img1} number="65,000+" description=" Unnecessary escape character:
              'sendTo' is assigned a value but neverimg elements must have an"/>

             <SignUpFact image={img1} number="65,000+" description=" Unnecessary escape character:
             'sendTo' is assigned a value but neverimg elements must have an"/>

              <SignUpFact image={img1} number="65,000+" description=" Unnecessary escape character:
              'sendTo' is assigned a value but neverimg elements must have an"/>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);
