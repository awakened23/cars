import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Grid, Button } from 'react-bootstrap';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin: 10px 0;
  text-align: right;
`;
export const StyledImage = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  render() {
    const {heading='', subheading='', heroImageUrl=''} = this.props.homepage || {};
    return (
      <Grid>
        <div>
          <h1>{heading}</h1>
          <h2>{subheading}</h2>
          <StyledImage src={heroImageUrl}/>
          <ButtonContainer>
          <LinkContainer to="/faqs">
            <Button
              bsStyle="success"
              bsSize="large"
              target="_blank">
              Learn more
            </Button>
          </LinkContainer>
          </ButtonContainer>
        </div>
      </Grid>
    );
  }
}
