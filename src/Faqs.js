import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid, Row, Col, Well, PageHeader } from 'react-bootstrap';

export const StyledFaqLink = styled.div`
  color: ${props => props.disabled ? 'grey' : 'black'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
  &:hover{
    text-decoration: ${props => props.disabled ? 'none' : 'underline'};
  }
  margin-bottom: 10px;
`;
const StyledFaqsContainer = styled(Col)`
  margin-top: 20px;
`;
const StyledPageHeader = styled(PageHeader)`
  border-color: darkgray;
`;

export default class Faqs extends Component {

  constructor(props){
    super(props);
    const faq = props.faqs? props.faqs[0]: {}
    const {title='', body=''} = faq;
    this.state = {
      title: title,
      body: body,
    }
  }
  componentDidUpdate(prevProps){
    const {faqs} = this.props;
    if (faqs !== prevProps.faqs) {
      this.setState({
        title: faqs[0].title,
        body: faqs[0].body,
      });
    }
  }

  renderFaqs(){
    const {faqs} = this.props;
    return faqs && faqs.map((faq, idx)=><StyledFaqLink key={idx} disabled={faq.title===this.state.title?true: false} 
    onClick={()=>{
      if(faq.title!==this.state.title){
        this.setState({
          title: faq.title,
          body: faq.body
        });
      }
    }}>{faq.title}</StyledFaqLink>);
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}><StyledPageHeader>Frequently asked questions</StyledPageHeader></Col>
        </Row>
        <Row>
          <StyledFaqsContainer smPush={9} sm={3}><Well>{this.renderFaqs()}</Well></StyledFaqsContainer>
          <Col sm={1}></Col>
          <Col smPull={4} sm={8}>
            <h2>
              {this.state.title}
            </h2>
            <p dangerouslySetInnerHTML={{__html: this.state.body}}>
            </p>
          </Col>
        </Row>  
      </Grid>  
    );
  }
}
