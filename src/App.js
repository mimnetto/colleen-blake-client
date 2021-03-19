import React, { Component } from 'react'
import './App.css';
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from './styles/Global';
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
    return (
    <div className="App">
  <> <Navbar navbarState={this.state.navbarOpen} handleNavbar={this.handleNavbar}/>
  <GlobalStyle/>
</>
      <header className="App-header">
      </header>
        <div className="Join-Us">
          <h1 className="Join-Day">
            Join us on October 16th, 2021
          </h1>
          <p>
          Owl's Nest Resort <br />White Mountains Thornton, New Hampshire
          </p>
          <img className="leaf" src={leaf} alt="Logo" />
      </div>
    </div>
  );
}
}

export default App;
