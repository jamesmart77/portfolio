import React, { Component } from 'react';
import { Col, Row, Button, Parallax } from 'react-materialize';
import Photo from '../images/family_photo.jpg';
import WoodWorking from '../images/wood_working.jpg';
import Code from '../images/code.jpg';
import { Fade, Slide } from 'react-reveal';
import AppFooter from '../components/AppFooter';

class Portfolio extends Component {

  constructor(props){
    super(props);
    this.handleExpand = this.handleExpand.bind(this);
    this.state = {
      isExpanded: false
    }
  }

  handleExpand() {
      this.setState({isExpanded: !this.state.isExpanded});
  }

  render() {
    const { isExpanded } = this.state;

    return (
      <div className="about-me-container">
        <Parallax className='wood-parallax hide-on-small-only' imageSrc={WoodWorking}/>
        <div className='filler-block' />
        <Row className='about-me-container-row'>
          <Col s={12} className='center'>
            <div className='img-container obj-fade-in' style={ {backgroundImage: `url(${Photo})`} } />
            
            <div className='text-container'>
              <h4 className='header-text'>
                <Slide duraction={5500} top>
                  About Me
                </Slide>
              </h4>
              <div className='body-text'>
                <p>
                  My name is James Martineau and I have been a Full Stack Web Developer since February 2018. After
                  receiving a Bechelor's degree from the University of New Hampshire in Business Administration with
                  concentrations in Information Systems Management and Management in 2013, I began working as a 
                  Project Analyst at a software development company and automating anything I could find.
                </p>
                <Fade duration={500} left cascade collapse when={isExpanded}>
                  <div>
                    <p>
                      After a couple years of optimizing our team's processes and scaling out the home grown VBA tools,
                      my manager pulled me aside and encouraged me to consider software development professionally. With much
                      grace, I was able to attend the University of New Hampshire's <i>Full Stack Web Development Boot Camp </i> 
                      for six months and was hired as a Software Developer.
                    </p>
                  </div>
                </Fade>
                <Fade duration={500} right cascade collapse when={isExpanded}>
                  <div>
                    <p>
                      This career change has awakened a natural passion in me for coding and problem solving while also serving 
                      as a creative outlet. My personality lends itself to bringing a team together for collaboration
                      and fun.
                    </p>
                  </div>
                </Fade>
                <Fade duration={500} left cascade collapse when={isExpanded}>
                  <div>
                    <p>
                      Tinkering with personal projects at home is great, but being present with my wife and son are much 
                      more important for me. We like hiking with our dog, reading, getting together with friends often, and serving the 
                      community of Somersworth, NH. You'll find us at church on Sundays and often times having a BBQ with 
                      the neighborhood out back. Come on by if you're around!!
                    </p>
                  </div>
                </Fade>
                <Row className='center'>
                  <Button
                    className='expand-btn'
                    onClick={this.handleExpand}
                  >
                    Read {isExpanded ? ' Less' : ' More'}
                  </Button>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
        <Parallax className='code-parallax hide-on-small-only' imageSrc={Code}/>
        <AppFooter />
      </div>
    );
  }
}

export default Portfolio;
