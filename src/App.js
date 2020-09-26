import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import {Container, Navbar, NavbarBrand, Nav} from 'react-bootstrap';
import './App.css';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

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
        title: 'Be Relentless', 
        subTitle: 'Projects that make a difference ',
        text: 'Check out my projects below'
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

  render() {
    return (
      <Router>
        <Container fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <NavbarBrand>Aiman Hussaini</NavbarBrand>
            <Navbar.Toggle aria-controls="navbar-toggle"/>
            <Navbar.Collapse id="navbar-toggle"></Navbar.Collapse>
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>

                
              </Nav>
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
