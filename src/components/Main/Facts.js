import React, { Component } from 'react';
import FactBox from './FactBox';

import conv from '../../images/facts/conv.png';
import growth from '../../images/facts/growth.png';
import vendor from '../../images/facts/vendor.png';

class Main extends Component {
  render() {
    return (
      <div style={{minHeight:"375px", backgroundColor: "#EEEEEE", width:"100vw"}}>
      <div className="row" style={{margin:"0px"}}>
        <FactBox className="col" image={vendor} number="10+" description="Lenders working with us"/>
          <FactBox className="col" image={conv} number="50,000+" description="Borrower Conversations"/>
        <FactBox className="col" image={growth} number="20%" description="Lift in repayments"/>
        </div>
      </div>
    );
  }
}

export default Main;
