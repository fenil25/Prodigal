import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MediaQuery from 'react-responsive';
import SignUp from './SignUp/SignUp';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class Header extends Component {
  constructor(props){
    super(props);

    this.state={
      open: false
    }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
      <MediaQuery minWidth={780}>
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#006DAA"}}>
        <Link to="/" class="navbar-brand" style={{fontSize: "34px", fontStyle: "italic", color:"white", textDecoration:"none"}}>Prodigal</Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <div style={{fontSize: "24px"}}>
            <Link to="/" style={{color: "white"}} className="mx-5">Home</Link>
            <Link to="/about" style={{color: "white"}} className="mx-5">About Us</Link>
            <button className="btn mx-5" style={{width: "175px", height: "45px",
            fontSize:"14px", color:"white", backgroundColor:"#F95738"}} onClick={this.handleOpen}><b>Sign Up</b></button>
          </div>
        </div>
      </nav>
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <div className="clearfix" style={{backgroundColor:"#006DAA"}}>
          <div className="float-left" style={{display:"table"}}>
            <Link to="/" style={{fontSize: "34px", fontStyle: "italic", color:"white", display: "table-cell", verticalAlign: "middle", paddingLeft:"10px", textDecoration:"none"}} >Prodigal</Link>
          </div>
          <div style={{fontSize: "14px"}} className="mt-2 float-right">
            <Link to="/about" style={{color: "white"}} className="mx-1">About Us</Link>
            <button className="btn mx-1" style={{width: "80px", height: "34px",fontSize:"14px", color:"white", backgroundColor:"#F95738"}} onClick={this.handleOpen}>Sign Up</button>
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

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(Header);
