import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import 'font-awesome/css/font-awesome.min.css';
import './about.css';

class Card extends Component {
  render() {
    return (
      <div>
      <MediaQuery minWidth={780}>
        <div style={{width:"26.56vw", minWidth:"300px", boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        borderRadius: "30px", backgroundColor:"#FFF", margin:"auto", height:"600px"}}>
          <div style={{padding: "0px 50px"}}>
            <img src={this.props.image} alt="Avatar"
            style={{borderRadius: "50%", width:"16vw", height:"16vw",marginTop:"20px", minHeight:"240px", minWidth:"240px"}}/>
            <div style={{textAlign:"center", paddingBottom: "50px",}}>
            <div style={{height:"250px"}}>
              <span style={{fontSize:"28px"}}><b>{this.props.name}</b></span><br/>
              <div style={{fontSize:"22px",marginBottom:"10px"}}>{this.props.position}</div>
              <p style={{fontSize:"16px", marginBottom:"50px"}}>{this.props.description}</p>
            </div>
              <a href={this.props.link}><button className="linkedin"
              style={{width:"80px", height:"50px", backgroundColor:"#336699", border:"none", color:"white", borderRadius:"8px"}}>
              <i className="fa fa-linkedin" style={{fontSize:"30px"}}></i>
              </button></a>
            </div>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={780}>
        <div className="row">
          <div className="col-10 offset-1 row" style={{height:"200px", backgroundColor:"white"}}>
            <div className="col-4" style={{padding:"0", margin:"0", display:"table", height:"100%"}}>
              <div style={{backgroundColor:"white", height:"100%",display:"table-cell", verticalAlign:"middle"}}>
                <img src={this.props.image} alt="Avatar" style={{borderRadius: "50%", width:"90px", height:"90px"}}/>
              </div>
            </div>
            <MediaQuery maxWidth={321}>
              <div className="col-6" style={{backgroundColor:"white", height:"100%", textAlign:"left", display:"table"}}>
                <div style={{height:"100%", display:"table-cell", verticalAlign:"middle"}}>
                  <span style={{fontSize:"12px"}}><b>{this.props.name}</b></span><br/>
                  <div style={{fontSize:"12px", marginBottom:"10px"}}>{this.props.position}</div>
                  <p style={{fontSize:"9px"}}>{this.props.description}</p>
                  <a href={this.props.link} >
                  <button className="linkedin" style={{width:"30%", height:"27px", backgroundColor:"#336699", border:"none", color:"white", borderRadius:"8px"}}>
                  <i className="fa fa-linkedin" style={{fontSize:"13px"}}></i>
                  </button></a>
                </div>
              </div>
            </MediaQuery>
            <MediaQuery minWidth={321}>
            <div className="col-7" style={{backgroundColor:"white", height:"100%", textAlign:"left", display:"table"}}>
              <div style={{height:"100%", display:"table-cell", verticalAlign:"middle"}}>
                <span style={{fontSize:"12px"}}><b>{this.props.name}</b></span><br/>
                <div style={{fontSize:"12px", marginBottom:"10px"}}>{this.props.position}</div>
                <p style={{fontSize:"9px"}}>{this.props.description}</p>
                <div style={{textAlign:"center"}}>
                <a href={this.props.link} >
                <button className="linkedin" style={{width:"30%", height:"27px", backgroundColor:"#336699", border:"none", color:"white", borderRadius:"8px"}}>
                <i className="fa fa-linkedin" style={{fontSize:"13px"}}></i>
                </button></a></div>
              </div>
            </div>
            </MediaQuery>
        </div>
        </div><br/><br/>
      </MediaQuery>
      </div>
    );
  }
}

export default Card;
