import React, {Component} from 'react';
import {HashRouter} from "react-router-dom";
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {Fade, Slide} from "react-awesome-reveal";
import Top from "./components/Top";
import Story from "./components/sections/Story";
import Travel from "./components/sections/Travel";
import Hotel from "./components/sections/Accommodations";
import Party from "./components/sections/Party";
import Registry from "./components/sections/Registry";
import Footer from "./components/Footer";
import GlobalStyle from './styles/Global';


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
        <> <Navbar navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar}/>
        <GlobalStyle/>
      </>
      <header className="App-header"></header>
      <main>
        <Top/>
          <Fade>
          <hr></hr>
          </Fade>
        <Slide direction="right">
          <section id='story'>
            <Story/>
          </section>
        </Slide>
        <Fade>
        <hr></hr>
        </Fade>
        <Slide direction="left">
          <section id='travel'>
            <Travel/>
          </section>
        </Slide>
        <Fade>
          <hr></hr>
        </Fade>
        <Slide direction="right">
          <section id='hotel'>
            <Hotel/>
          </section>
        </Slide>
        <Fade>
          <hr></hr>
        </Fade>
        <Slide direction="left">
          <section id='party'>
            <Party/>
          </section>
        </Slide>
        <Fade>
          <hr></hr>
        </Fade>
        <Slide direction="right">
          <section id='reg'>
            <Registry/>
          </section>
        </Slide>
        <Fade>
          <hr></hr>
        </Fade>
      </main>
      <Footer/>
    </div>
  </HashRouter>);
  }
}

export default App;
