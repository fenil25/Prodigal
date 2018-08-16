import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import MediaQuery from 'react-responsive';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../images/carousel/img1.jpg';
import img2 from '../../images/carousel/img2.jpg';
import img3 from '../../images/carousel/img3.jpg';
import img4 from '../../images/carousel/img4.jpg';
import img5 from '../../images/carousel/img5.jpg';
import './main.css';

class PCarousel extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedItem: 0
    }
  }

  changeImage(k){
      this.setState({selectedItem: k});
  }

  display() {
    let s = this.state.selectedItem;
    if(s==0){
      return(
        <div>
          <h2><b>Collection Mode</b></h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been t</p>
        </div>
      );
    }else if(s==1){
      return(
        <div>
          <h2><b>Engage Borrower on preferred channel</b></h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, </p>
        </div>
      );
    }else if(s==2){
      return(
        <div>
          <h2><b>Personalized Approach</b></h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1 recently    with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      );
    }else if(s==3){
      return(
        <div>
        <h2><b>Payment Processing</b></h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetti</p>
        </div>
      );
    }else if(s==4){
      return(
        <div>
        <h2><b>Agent Assist</b></h2>
        <p>ext ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containin</p>
        </div>
      );
    }
    else {
      return null;
    }
  }

  render() {
    const css = `
      .list:hover{
        cursor: pointer;
        box-shadow: 2px 4px 6px 0 rgba(0,0,0,0.2);
      }
    `;
    return (
      <div className="row">
        <style>{css}</style>
        <MediaQuery minWidth={780}>
          <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12" style={{padding: "40px"}}>
            <h2 style={{fontSize: "35px", paddingBottom: "80px", paddingLeft:"20px", paddingTop:"40px"}} className="ourtext">Our Product Offerings</h2>
            <ul style={{fontSize: "28px", listStyle: "none", padding: "0", margin:"0"}}>
              <li onClick={this.changeImage.bind(this, 0)} style={{padding: "20px 0px 30px 20px"}} id="0" className="list">
                {this.state.selectedItem==0 ? <b>Collection Mode</b> : "Collection Mode"}
              </li>
              <li onClick={this.changeImage.bind(this, 1)} style={{padding: "20px 0px 30px 20px"}} id="1" className="list">
                {this.state.selectedItem==1 ? <b>Engage Borrower</b> : "Engage Borrower"}
              </li>
              <li onClick={this.changeImage.bind(this, 2)} style={{padding: "20px 0px 30px 20px"}} id="2" className="list">
                {this.state.selectedItem==2 ? <b>Personalized Approach</b> : "Personalized Approach"}
              </li>
              <li onClick={this.changeImage.bind(this, 3)} style={{padding: "20px 0px 30px 20px"}} id="3" className="list">
                {this.state.selectedItem==3 ? <b>Payment processing</b> : "Payment processing"}
              </li>
              <li onClick={this.changeImage.bind(this, 4)} style={{padding: "20px 0px 30px 20px"}} id="4" className="list">
                {this.state.selectedItem==4 ? <b>Agent Assist</b> : "Agent Assist"}
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12" style={{padding:"50px"}}>
            <Carousel showThumbs={false} selectedItem={this.state.selectedItem} showArrows={false} showIndicators={false} style={{width:"700px"}}>
                <div>
                    <img src={img1} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
                <div>
                    <img src={img2} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
                <div>
                    <img  src={img3} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
                <div>
                    <img src={img4} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
                <div>
                    <img src={img5} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
            </Carousel>
            <br/>
            <div style={{height:"150px"}}>
              {this.display()}
            </div>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={780}>
          <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12" style={{padding: "40px 40px"}}>
            <h2 style={{fontSize: "27px", fontStyle: "italic", paddingBottom: "20px"}}>Our Product Offerings</h2>
            <ul style={{fontSize: "16px", listStyle: "none", padding: "0", margin:"0"}} className="row">
              <li onClick={this.changeImage.bind(this, 0)} style={{padding: "10px 10px 10px 10px"}} id="0" className="list col-6">
                {this.state.selectedItem==0 ? <b>Collection Mode</b> : "Collection Mode"}
              </li>
              <li onClick={this.changeImage.bind(this, 1)} style={{padding: "10px", fontSize:"14px"}} id="1" className="list col-6">
                {this.state.selectedItem==1 ? <b>Engage Borrower</b> : "Engage Borrower"}
              </li>
              <li onClick={this.changeImage.bind(this, 2)} style={{padding: "10px"}} id="2" className="list col-6">
                {this.state.selectedItem==2 ? <b>Personalized Approach</b> : "Personalized Approach"}
              </li>
              <li onClick={this.changeImage.bind(this, 3)} style={{padding: "10px"}} id="3" className="list col-6">
                {this.state.selectedItem==3 ? <b>Payment processing</b> : "Payment processing"}
              </li>
              <li onClick={this.changeImage.bind(this, 4)} style={{padding: "10px"}} id="4" className="list col-6">
                {this.state.selectedItem==4 ? <b>Agent Assist</b> : "Agent Assist"}
              </li>
            </ul>
          </div>
          <div className="col-md-7 col-sm-12 col-xs-12" style={{padding:"30px 50px"}}>
            <Carousel showThumbs={false} selectedItem={this.state.selectedItem} showArrows={false} showIndicators={false} style={{width:"700px"}}>
                <div>
                    <img src={img1} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
                <div>
                    <img src={img2} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
                <div>
                    <img  src={img3} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
                <div>
                    <img src={img4} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
                <div>
                    <img src={img5} style={{width:"49.48vw", height:"520px", minWidth:"300px"}}/>
                </div>
            </Carousel>
            <br/>
            {this.display()}
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default PCarousel;
