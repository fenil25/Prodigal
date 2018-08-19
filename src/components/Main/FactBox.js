import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './main.css';

class FactBox extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <MediaQuery minWidth={780}>
      {
        (matches)=>{
          if(matches){
            return(
                <div className="col-md-4">
                <div style={{height:"100%", display:"table", margin:"auto"}}>
                  <div style={{textAlign:"center", display: "table-cell", verticalAlign: "middle", paddingTop:"14%"}}>
                    <img src={this.props.image} height="150px" width="150px"/>
                    <div style={{width: "280px", height: "100px", margin: "auto",display:"table"}} className="row">
                      <div style={{display: "table-cell", verticalAlign: "middle"}}>
                        <span className="ourcolor" style={{fontSize: "50px", marginRight:"10px"}}>{this.props.number}</span>
                      </div>
                      <div style={{display: "table-cell", verticalAlign: "middle", textAlign:"left"}}>
                        <span style={{fontSize: "18px"}}>{this.props.description}</span>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
            );
          }else{
            return(
                <div className="col-sm-12 col-md-12">
                  <div style={{height: "180px"}}>
                    <div style={{textAlign:"center"}} className="row">
                      <img src={this.props.image} height="90px" width="90px" className="offset-2 col-3 mt-4"/>
                      <div className="col-5 mt-4">
                        <div style={{fontSize:"30px"}} className="ourcolor">{this.props.number}</div>
                        <div style={{fontSize:"18px"}}>{this.props.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
            );
          }
        }
      }
        </MediaQuery>
    );
  }
}

export default FactBox;
