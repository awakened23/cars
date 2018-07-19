import React, { Component } from 'react';
import { Navbar, Jumbotron, Nav, NavItem } from 'react-bootstrap';
import Home from './Home';
import Faqs from './Faqs';
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from "react-router-dom";
import styled from 'styled-components';
import {getProductDetails} from './services/apiService';

const StyledNavbarToggle = styled(Navbar.Toggle)`
  float: left;
  margin-left: 15px;
`;

const StyledJumbotron = styled(Jumbotron)`
  margin-bottom: 0;
  padding-top: 48px;

  h1 {
    font-size:30px;
  }
  h2 {
    font-size:18px;
  }
`;

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      product: null
    }
  }
  componentDidMount(){
    getProductDetails().then((resp) => this.setState({product: resp.data}));
  }
  render() {
    const {product} = this.state;
    return (
      <div>
        <Navbar inverse fixedTop collapseOnSelect>
          <Navbar.Header>
            <StyledNavbarToggle/>
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer exact to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </LinkContainer>
              <LinkContainer to="/faqs">
                <NavItem eventKey={2}>Faqs</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <StyledJumbotron>
          <Route path="/faqs" render={ (routeProps) => 
            <Faqs routeProps={routeProps} faqs={product && product.faqs}/>
          }/>
          <Route path="/" exact render={ (routeProps) => 
            <Home routeProps={routeProps} homepage={product && product.homepage}/>
          }/> 
        </StyledJumbotron>  
      </div>
    );
  }
}