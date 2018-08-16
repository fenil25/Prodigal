import React, { Component } from 'react';
import FactBox from './FactBox';

import img1 from '../../images/facts/img1.jpg'

class Main extends Component {
  render() {
    return (
      <div style={{minHeight:"375px", backgroundColor: "#EEEEEE", width:"100vw"}}>
      <div className="row">
        <FactBox image={img1} number="10+" description="Vendors working with us"/>
          <FactBox image={img1} number="50,000+" description="Borrower Conversations"/>
        <FactBox image={img1} number="20%" description="Lift in repayment for lenders"/>
        </div>
      </div>
    );
  }
}

export default Main;
