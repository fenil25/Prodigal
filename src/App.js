import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './Routes';
import Main from './components/Main/Main';
import FooterForm from './components/FooterForm';
import Copyrights from './components/Copyrights';
import './app.css';

import Intercom from 'react-intercom';

class App extends Component {
  
componentDidMount(){
  window.Intercom("boot", {
  app_id: "cnmmydox"
});
}

  render() {
    return (
      <div>
        <Intercom appID="cnmmydox"/>
        <Header/>
        <Routes/>
        <FooterForm/>
        <Copyrights/>
      </div>
    );
  }
}

export default App;
