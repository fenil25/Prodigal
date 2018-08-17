import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grow from '@material-ui/core/Grow';
import MediaQuery from 'react-responsive';
import SignUp from './SignUp/SignUp';
import Dialog from '@material-ui/core/Dialog';

function Transition(props) {
  return <Grow in={true} timeout={3000} {...props} />;
}

class Header extends Component {
  constructor(props){
    super(props);

    this.state={
      open: false,
      snack: false
    }
  }

  handleSnackClose = () => {
  this.setState({ snack: false });
};

opensnackbar = () => {
  this.setState({snack: true});
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
        <Link to="/" class="navbar-brand"
        style={{fontSize: "34px", fontStyle: "italic", color:"white", paddingLeft:"50px",
        textDecoration:"none", fontFamily:"'Tienne', serif"}}>Prodigal</Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <div style={{fontSize: "1.25vw", fontWeight:"550", display:"table"}}>
            <Link to="/about" style={{color: "#DDDDDD", display:"table-cell", verticalAlign:"middle", padding:"0px 30px"}}>ABOUT US</Link>
            <a href="http://app.prodigaltech.com" style={{color: "#DDDDDD", display:"table-cell", verticalAlign:"middle", padding:"0px 30px"}}
            >LOGIN</a>
            <button className="btn mx-5" style={{width: "175px", height: "45px",
            fontSize:"18px", color:"white", backgroundColor:"#F95738", display:"table-cell", verticalAlign:"middle", padding:"0px 0px"}}
            onClick={this.handleOpen}><b>REQUEST DEMO</b></button>
          </div>
        </div>
      </nav>
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <div className="clearfix" style={{backgroundColor:"#006DAA"}}>
          <div className="float-left" style={{display:"table"}}>
            <Link to="/"
            style={{fontSize: "23px", fontStyle: "italic", color:"white", display: "table-cell",
            verticalAlign: "middle", paddingLeft:"18px", textDecoration:"none", fontFamily:"'Tienne', serif"}} >Prodigal</Link>
          </div>
          <div style={{fontSize: "10px"}} className="mt-2 float-right">
            <Link to="/about" style={{color: "#DDDDDD", fontSize:"10px"}} className="mx-2">ABOUT US</Link>
            <a href="http://app.prodigaltech.com" style={{color: "#DDDDDD", fontSize:"10px"}} className="mx-2">LOGIN</a>
            <button className="btn mx-2" style={{width: "70px", height: "20px",fontSize:"8px", padding:"0px",
            color:"white", backgroundColor:"#F95738"}}
            onClick={this.handleOpen}>REQUEST DEMO</button>
          </div>
        </div>
      </MediaQuery>
      <Dialog
        fullScreen
        open={this.state.open}
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <SignUp handleClose={this.handleClose} email={this.state.email} opensnackbar={this.opensnackbar}/>
      </Dialog>
      <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
          open={this.state.snack}
          onClose={this.handleSnackClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<div id="message-id" style={{width:"100vw", backgroundColor:"green"}}>We will get back to you shortly.</div>}
          autoHideDuration={5000}
        />
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles({})(Header);
