import React, { Component } from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import Top from "./components/Top";
import Wedding from "./components/sections/Wedding";
import Footer from "./components/Footer";
import {Fade, Slide} from "react-awesome-reveal";
import GlobalStyle from './styles/Global';
import {Container, Row, Col} from 'react-bootstrap';
import leaf from './img/leaf.png';


class App extends Component {
  state = {
    navbarOpen: false
  }
  handleNavbar = () => {
    this.setState({
      navbarOpen: !this.state.navbarOpen
    });
  }
  render() {
    return (<HashRouter basename='/'>
      <div className="App">
        <>
          <Navbar navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar}/>
            <GlobalStyle/>
              </>
      <header className="App-header">
      </header>
      <main>
      <Top />
      <Wedding />
      </main>
      <Footer/>
    </div>
  </HashRouter>);
}
}

export default App;
