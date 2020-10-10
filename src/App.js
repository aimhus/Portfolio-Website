import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Container, Navbar, NavbarBrand, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { animateScroll as scroll } from 'react-scroll';
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';

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
        //text: 'Check out my projects below'
      },
      about: {
        title: 'About Moi',
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

  render() {
    return (
      <Router>
        <Container fluid={true} className="p-0">
          <Navbar className="" bg="nav-colour" expand="lg" fixed="top">
            <NavbarBrand color="hero-colour" onClick={(e) => this.handleNameClick()}>
              <img src=""/>
              Aiman Hussaini</NavbarBrand>
            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={(e) => this.handleClick(1730)}>Project 1</NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

                
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
