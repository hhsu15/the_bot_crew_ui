import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './components/style.scss'
import Header from './components/Header'
import Navi from './components/Navi'
import Landing from './components/Landing'
import Banner from './components/Banner'
import About from './components/About'
import Footer from './components/Footer'

const initialState = {
  showLanding: true,
  showAbout: true,
  showBanner: true
}

class App extends Component{
  constructor(){
    super()
    this.state = initialState
  }

  onAboutClick = () => {
    this.setState({showLanding:false})
    this.setState({showBanner:false})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navi onAboutClick={this.onAboutClick}/>
        <Landing showLanding={this.state.showLanding} 
                 onAboutClick={this.onAboutClick}/>
        <Banner showBanner={this.state.showBanner}/>
        <About showAbout={this.state.showAbout}/>
        <Footer />

      </div>
    )
  }
}

export default App;
