import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './sign.css';

class SignUpFact extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-sm-12 col-md-12 my-3">
        <div style={{}}>
          <div style={{textAlign:"left"}} className="row">
          <div className="offset-2 col-3 mt-4" style={{textAlign:"right"}}>
            <img src={this.props.image} style={{height:"100px", width:"100px", padding:"0px"}}/>
          </div>
            <MediaQuery maxWidth={780}>
              <div className="col-5 mt-5 ml-4">
                <div className="signfacthead ourcolor">{this.props.number}</div>
                <div className="signfactsubhead">{this.props.description}</div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={780}>
              <div className="col-5 mt-5">
                <div className="signfacthead ourcolor">{this.props.number}</div>
                <div className="signfactsubhead">{this.props.description}</div>
              </div>
            </MediaQuery>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default SignUpFact;
