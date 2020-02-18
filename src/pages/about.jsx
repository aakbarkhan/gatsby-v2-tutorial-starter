import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About'} />
    <Header title="About">freeAcademy</Header>
    <Container center={center}>
      <h3>
        This is free online class for the student who can't afford to attain any tutions or any other form of study material.  
        <p>Aim: Saveing time which is much more important then money.</p> 
        
        Building up a student community. We encourage students to participate by asking questions and teaching or giving explainations to other students. We will do our best to help students. Never give up when you learn something. The aim of the studnets is to thinks and solve not just mugging up the concepts. Students should repeteadly pracetice what they learn. This is completely free. If any teachers or mantors want to help they can reach through whatsapp numbers-  1234567890  or {' '}
        <a href="aakbarkhan.github.io">here.</a>
      </h3>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
