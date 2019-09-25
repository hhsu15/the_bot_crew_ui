import React, { Component } from 'react';
import './App.css';
import './components/style.scss'
import Header from './components/Header'
import Navi from './components/Navi'
import Landing from './components/Landing'
import Banner from './components/Banner'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

const initialState = {
  showLanding: true,
  showAbout: false,
  showBanner: true,
  showProjects: false,
  showContactUs: false
}

class App extends Component{
  constructor(){
    super()
    this.state = initialState
  }

  onAboutClick = () => {
    this.setState({showAbout: true})
    this.setState({showLanding:false})
    this.setState({showBanner:false})
    this.setState({showProjects:false})
    this.setState({showContactUs:false})
  }

  onContactUsClick = () => {
    this.setState({showAbout: false})
    this.setState({showLanding:false})
    this.setState({showBanner:false})
    this.setState({showProjects:false})
    this.setState({showContactUs:true})
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Navi onAboutClick={this.onAboutClick}
              onContactUsClick={this.onContactUsClick}/>
        <Landing showLanding={this.state.showLanding} 
                 onAboutClick={this.onAboutClick}
                 onContactUsClick={this.onContactUsClick}
                 />
        <Banner showBanner={this.state.showBanner}/>
        <About showAbout={this.state.showAbout}
               onContactUsClick={this.onContactUsClick}
               />
        <ContactUs showContactUs={this.state.showContactUs}/>
        <Footer />

      </div>
    )
  }
}

export default App;
