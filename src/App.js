import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Container, Navbar, NavbarBrand, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { animateScroll as scroll } from 'react-scroll';
import logo from './assets/logo.svg';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Aiman Hussaini',
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'About', path: '/about'},
        { title: 'Contact', path: '/contact'}
      ],
      home: {
        title: 'Passion Drives Ingenuity', 
        subTitle: 'A Collection of my Favourite Projects',
      },
      about: {
        title: 'About Me',
        subTitle: 'Shoot me an email bruh',
      },
      contact: {
        title: 'Contact Me',
      }
    }
  }

  handleNameClick = () => {
    scroll.scrollToTop();
  }

  handleClick = (scrollPos) => {

    scroll.scrollTo(scrollPos, {
        duration: 1500,
        delay: 50,
        smooth: 'easeInOutCubic',
        offset: 0,
        activeClass: true,
    });

}

// Add <Link className="nav-link" to="/contact">Contact</Link> to Line 76 to add back Contact Page

  render() {
    return (
      <Router>
        <Container fluid={true} className="p-0">
          <Navbar className="navbar-dark" expand="lg" fixed="top">
            <NavbarBrand className="navbar-brand change-cursor-p" onClick={(e) => this.handleNameClick()} color="navbar-brand">
              <img src={logo} alt=""/>
              Aiman Hussaini</NavbarBrand>
            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={(e) => this.handleClick(1730)}>Mars Rover</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => this.handleClick(3800)}>Notes App</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => this.handleClick(6000)}>Audio Amplifier</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => this.handleClick(7950)}>General Processor</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => this.handleClick(10110)}>Banking Simulation</NavDropdown.Item>
                  <NavDropdown.Item onClick={(e) => this.handleClick(12200)}>Home Automation System</NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="/about">About</Link>
                

                
              </Nav>
            </Navbar.Collapse>
              
          </Navbar>

          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text}/>}></Route>
          <Route path="/about" exact render={()=> <AboutPage title={this.state.about.title} />} />
          <Route path="/contact" exact render={() => <ContactPage title={this.state.contact.title} />} />
          <Footer />

        </Container>
      </Router>
      );
  }
  
}

export default App;
