import React, { Component } from 'react';
import { Container, Col, Row, Icon } from 'react-materialize';
import Photo from '../images/family_photo.jpg';

class Portfolio extends Component {

  constructor(props){
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.state = {
      isExpanded: false
    }
  }

  handleExpand() {
    if(this.state.isExpanded) {
      this.setState({isExpanded: false});
    } else {
      this.setState({isExpanded: true});
    }
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <div className="about-me-container obj-fade-in">
          <Container>
            <Row>
              <Col s={12} className='center'>
                <div className='img-container' style={ {backgroundImage: `url(${Photo})`} } />
                
                <div className='text-container'>
                  <h4 className='header-text'>About Me</h4>
                  <div className='body-text'>
                    <p>
                      My name is James Martineau and I have been a Full Stack Web Developer since February 2018. After
                      receiving a Bechelor's degree from the University of New Hampshire in Business Administration with
                      concentrations in Information Systems Management and Management in 2013, I began working as a 
                      Project Analyst at a software development company and automating anything I could find.
                    </p>
                    <div className={isExpanded ? 'extra-text-expanded' : 'extra-text'}>
                      <p>
                        After a couple years of optimizing our team's processes and scaling out the home grown VBA tools,
                        my manager pulled me aside and encouraged me to consider software development professionally. With much
                        grace, I was able to attend the University of New Hampshire's <i>Full Stack Web Development Boot Camp </i> 
                        for six months and was hired as a Software Developer.
                      </p>
                      <p>
                        This career change has awakened a natural passion in me for coding and problem solving while also serving 
                        as a creative outlet. My personality lends itself to bringing a team together for collaboration
                        and fun.
                      </p>
                      <p>
                        Tinkering with personal projects at home is great, but being present with my wife and son are much 
                        more important for me. We like hiking with our dog, reading, getting together with friends often, and serving the 
                        community of Somersworth, NH. You'll find us at church on Sundays and often times having a BBQ with 
                        the neighborhood out back. Come on by if you're around!!
                      </p>
                    </div>
                  </div>
                  <div className='expand-body' onClick={() => this.handleExpand()}>
                    { isExpanded ? (
                      <Icon>expand_less</Icon>
                    ) : (
                      <Icon>expand_more</Icon>
                    )}
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Portfolio;
