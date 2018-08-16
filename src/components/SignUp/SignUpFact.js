import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './sign.css';

class SignUpFact extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-sm-12 col-md-12 my-3">
        <div style={{height: "33%"}}>
          <div style={{textAlign:"left"}} className="row">
            <img src={this.props.image} height="100px" width="100px" className="offset-2 col-3 mt-4"/>
            <MediaQuery maxWidth={780}>
              <div className="col-5 mt-1">
                <div className="signfacthead">{this.props.number}</div>
                <div className="signfactsubhead">{this.props.description}</div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={780}>
              <div className="col-5 mt-3">
                <div className="signfacthead">{this.props.number}</div>
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
