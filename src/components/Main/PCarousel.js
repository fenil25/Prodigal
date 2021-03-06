import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import MediaQuery from 'react-responsive';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import omnichannel from '../../images/carousel/omnichannel.png';
import portfolio from '../../images/carousel/portfolio.png';
import payment from '../../images/carousel/payment.png';
import personalized from '../../images/carousel/personalized.png';
import voice from '../../images/carousel/voice.png';
import './main.css';

import 'font-awesome/css/font-awesome.min.css';

class PCarousel extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedItem: 0,
      autoRotate: true,
      time: 4000,
    }
  }

  changeImage(k){

    if(this.state.autoRotate){
      this.setState({autoRotate:false, selectedItem: k});
    }
    this.setState({selectedItem:k});
  }

  display() {
    let s = this.state.selectedItem;
    if(s==0){
      return(
        <div>
          <h2><b>Omnichannel Engagement</b></h2>
          <p>Engage borrower on channel of her choice. Provide agents a single interface for all communication</p>
        </div>
      );
    }else if(s==1){
      return(
        <div>
          <h2><b>Collection Models</b></h2>
          <p>Prioritize accounts and improve total portfolio value</p>
        </div>
      );
    }else if(s==2){
      return(
        <div>
          <h2><b>Process Payments</b></h2>
          <p>Manage payments, adjustments and reconciliation</p>
        </div>
      );
    }else if(s==3){
      return(
        <div>
        <h2><b>Personalized Approach</b></h2>
        <p>Account for borrower's life situation</p>
        </div>
      );
    }else if(s==4){
      return(
        <div>
        <h2><b>Voice Analytics</b></h2>
        <p>Analyze calls for compliance checks & agent training</p>
        </div>
      );
    }
    else {
      return null;
    }
  }

  render() {
    return (
      <div className="row clearoverflow">
        <MediaQuery minWidth={780}>
          <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12" style={{padding: "40px 0px 40px 100px"}}>
            <h2 style={{fontSize: "2vw", paddingBottom: "80px", paddingLeft:"20px", paddingTop:"40px"}} className="ourtext">
            Our Product Offerings</h2>
            <ul style={{fontSize: "1.56vw", listStyle: "none", padding: "0", margin:"0", color:"#787878", fontWeight:"bold"}}>
              <li onClick={this.changeImage.bind(this, 0)} style={{padding: "20px 0px 30px 20px"}} id="0" className="list">
                {this.state.selectedItem==0 ? <span className="si"><i className="fa fa-comments"></i>
                &nbsp;  Omnichannel Engagement</span> : <span><i className="fa fa-comments"></i>
                &nbsp;  Omnichannel Engagement</span>}
              </li>
              <li onClick={this.changeImage.bind(this, 1)} style={{padding: "20px 0px 30px 20px"}} id="1" className="list">
                {this.state.selectedItem==1 ? <span className="si"><i className="fa fa-bar-chart"></i>
                &nbsp;Collection Models</span> : <span><i className="fa fa-bar-chart"></i>
                &nbsp;Collection Models</span>}
              </li>
              <li onClick={this.changeImage.bind(this, 2)} style={{padding: "20px 0px 30px 20px"}} id="2" className="list">
                {this.state.selectedItem==2 ? <span className="si"><i className="fa fa-usd"></i>
                &nbsp;Process Payments</span> : <span><i className="fa fa-usd"></i>
                &nbsp;Process Payments</span>}
              </li>
              <li onClick={this.changeImage.bind(this, 3)} style={{padding: "20px 0px 30px 20px"}} id="3" className="list">
                {this.state.selectedItem==3 ? <span className="si"><i className="fa fa-users"></i>
                &nbsp;Personalized Approach</span> : <span><i className="fa fa-users"></i>
                &nbsp;Personalized Approach</span>}
              </li>
              <li onClick={this.changeImage.bind(this, 4)} style={{padding: "20px 0px 30px 20px"}} id="4" className="list">
                {this.state.selectedItem==4 ? <span className="si"><i className="fa fa-microphone"></i>
                &nbsp;Voice Analytics</span> : <span><i className="fa fa-microphone"></i>
                &nbsp;Voice Analytics</span>}
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12" style={{padding:"50px"}}>
          { this.state.autoRotate ?
              <Carousel showThumbs={false} autoPlay={true}
            infiniteLoop={true}
            showArrows={false} showIndicators={false} statusFormatter={
              (current, total) => {
                if(this.state.autoRotate && this.state.selectedItem!=current-1)
                  {this.setState({selectedItem: current-1});}
              }
            } selectedItem={this.state.selectedItem} >
                <div>
                    <img src={omnichannel} className="styleimage"/>
                </div>
                <div>
                    <img src={portfolio} className="styleimage"/>
                </div>
                <div>
                    <img  src={payment} className="styleimage"/>
                </div>
                <div>
                    <img src={personalized} className="styleimage"/>
                </div>
                <div>
                    <img src={voice} className="styleimage"/>
                </div>
            </Carousel> :
            <div>
              {this.state.selectedItem==0 ? <img src={omnichannel} className="styleimage"/> : null}
              {this.state.selectedItem==1 ? <img src={portfolio} className="styleimage"/> : null}
              {this.state.selectedItem==2 ? <img src={payment} className="styleimage"/> : null}
              {this.state.selectedItem==3 ? <img src={personalized} className="styleimage"/> : null}
              {this.state.selectedItem==4 ? <img src={voice} className="styleimage"/> : null}
            </div>
          }

            <div className="mt-4 desc" style={{width:"100%", textAlign:"left", paddingLeft:"40px", height: "100px"}}>
              {this.display()}
            </div>
            <br/>
          </div>
        </MediaQuery>




        <MediaQuery maxWidth={780}>
          <div style={{padding: "40px 40px"}}>
            <h2 style={{fontSize: "27px", fontStyle: "italic", paddingBottom: "20px"}}>Our Product Offerings</h2>
            <ul style={{fontSize: "13px", listStyle: "none", padding: "0", margin:"0", fontWeight:"bold", color:"#787878"}} className="row">
            <li onClick={this.changeImage.bind(this, 0)} style={{padding: "10px"}} id="0" className="list col-6">
              {this.state.selectedItem==0 ? <div className="si"><i className="fa fa-comments"></i>
              &nbsp;  Omnichannel Engagement</div> : <div><i className="fa fa-comments"></i>
              &nbsp;  Omnichannel Engagement</div>}
            </li>
            <li onClick={this.changeImage.bind(this, 1)} style={{padding: "10px"}} id="1" className="list col-6">
              {this.state.selectedItem==1 ? <div className="si"><i className="fa fa-bar-chart"></i>
              &nbsp;Collection Models</div> : <div><i className="fa fa-bar-chart"></i>
              &nbsp;Collection Models</div>}
            </li>
            <li onClick={this.changeImage.bind(this, 2)} style={{padding: "10px"}} id="2" className="list col-6">
              {this.state.selectedItem==2 ? <div className="si"><i className="fa fa-usd"></i>
              &nbsp;Process Payments</div> : <div><i className="fa fa-usd"></i>
              &nbsp;Process Payments</div>}
            </li>
            <li onClick={this.changeImage.bind(this, 3)} style={{padding: "10px"}} id="3" className="list col-6">
              {this.state.selectedItem==3 ? <div className="si"><i className="fa fa-users"></i>
              &nbsp;Personalized Approach</div> : <div><i className="fa fa-users"></i>
              &nbsp;Personalized Approach</div>}
            </li>
            <li onClick={this.changeImage.bind(this, 4)} style={{padding: "10px"}} id="4" className="list col-6">
              {this.state.selectedItem==4 ? <div className="si"><i className="fa fa-microphone"></i>
              &nbsp;Voice Analytics</div> : <div><i className="fa fa-microphone"></i>
              &nbsp;Voice Analytics</div>}
            </li>
            </ul>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12" style={{padding:"0px 25px 30px 25px", textAlign:"center"}}>
          { this.state.autoRotate ?
              <Carousel showThumbs={false} autoPlay={true}
            infiniteLoop={true}
            showArrows={false} showIndicators={false} statusFormatter={
              (current, total) => {
                if(this.state.autoRotate && this.state.selectedItem!=current-1)
                  {this.setState({selectedItem: current-1});}
              }
            } selectedItem={this.state.selectedItem} >
                <div>
                    <img src={omnichannel} className="styleimage"/>
                </div>
                <div>
                    <img src={portfolio} className="styleimage"/>
                </div>
                <div>
                    <img  src={payment} className="styleimage"/>
                </div>
                <div>
                    <img src={personalized} className="styleimage"/>
                </div>
                <div>
                    <img src={voice} className="styleimage"/>
                </div>
            </Carousel> :
            <div>
              {this.state.selectedItem==0 ? <img src={omnichannel} className="styleimage"/> : null}
              {this.state.selectedItem==1 ? <img src={portfolio} className="styleimage"/> : null}
              {this.state.selectedItem==2 ? <img src={payment} className="styleimage"/> : null}
              {this.state.selectedItem==3 ? <img src={personalized} className="styleimage"/> : null}
              {this.state.selectedItem==4 ? <img src={voice} className="styleimage"/> : null}
            </div>
          }
            <br/>
            <div className="desc" style={{fontSize:"16px"}}>
              {this.display()}
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default PCarousel;
