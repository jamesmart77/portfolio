import React, { Component } from 'react';
import { Container, Col, Row } from 'react-materialize';
import Profile from '../images/profile.jpg';

class Portfolio extends Component {
  render() {
    return (
      <div className="about-me-container">
          <Container>
            <Row>
              <Col s={12} className='center'>
                <div className='img-container' style={ {backgroundImage: `url(${Profile})`} } />
                
                <div className='text-container'>
                  <h4 className='header-text'>About Me</h4>
                  <div className='body-text'>
                    <p>
                      My name is James Martineau and I have been a Full Stack Web Developer since February 2018. After
                      receiving a Bechelor's degree from the University of New Hampshire in Business Administration with
                      concentrations in Information Systems Management and Management in 2013, I began working as a 
                      Project Analyst at a software development company and automating anything I could find.
                    </p>
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
              </Col>
            </Row>
          </Container>
      </div>
    );
  }
}

export default Portfolio;
