import React, { Component } from 'react';
import Header from './components/Header';
import Routes from './Routes';
import Main from './components/Main/Main';
import FooterForm from './components/FooterForm';
import Copyrights from './components/Copyrights';
import './app.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Routes/>
        <FooterForm/>
        <Copyrights/>
      </div>
    );
  }
}

export default App;
