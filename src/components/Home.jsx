import React, { Component } from "react";
import DisplayCard from "./DisplayCard";
import { Container, Row, Col, Carousel } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <Carousel>
            <Carousel.Item>
              Put background image or something here
            </Carousel.Item>
          </Carousel>
        </Container>
        <br />
        <br />
        <h1>Online Open AI API (GPT3) Testing</h1>
        <Row>
          <Col>
            <DisplayCard
              header='Product Descriptions'
              title='Generate Product Descriptions'
              text='Generate product descriptions for any types of products, simply enter the name and product description'
              theLink='/product-description'
            />
          </Col>
          <Col>
            <DisplayCard
              header='Tweets'
              title='Generate Tweets'
              text='Generate tweets, simply enter a general idea or topic/person/thing and see what happens'
              theLink='/tweets'
            />
          </Col>
          <Col>
            <DisplayCard
              header='Cold Emails'
              title='Generate Cold Emails'
              text='Generate cold emails for any topic, simply enter the topic and any details you want to mention'
              theLink='/cold-emails'
            />
          </Col>
        </Row>
      </div>
    );
  }
}
