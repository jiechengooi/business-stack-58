import { useEffect, useState } from 'react';
import {
  Row,
  Container,
  Col,
  Card,
  Form,
  ListGroup,
  FormSelect,
} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DefaultLayout from '../components/layouts/default-layout';
import Features from "../components/features-section/Features"
import Testimonial from '../components/testimonials/Testimonials';

const About= () => {
  return (
    <DefaultLayout>
      <Container>
      <Features />
      <Testimonial />
      </Container>
    </DefaultLayout>
  );
};

export default About;