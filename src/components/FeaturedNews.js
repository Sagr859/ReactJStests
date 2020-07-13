import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import news from '../services/news';
import img from '../2673291.jpg';
const FeaturedNews = () => {
    return (
        <Container>
            <Row>
            <Button variant="success">Featured News</Button>
            </Row>
            <Row>
                <Col>
                    <Card id ={news.id} style={{ width: '18rem' }} className="justify-md-centre">
                        <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                    <Card.Text></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card id ={news.id} style={{ width: '18rem' }} className="justify-md-centre">
                        <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                    <Card.Text></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>
                <Col>
                <Card id ={news.id} style={{ width: '18rem' }} className="justify-md-centre">
                        <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title>{news.title}</Card.Title>
                                    <Card.Text></Card.Text>
                            </Card.Body>
                    </Card>
                </Col>

            </Row>
        </Container>
            );
};

export default FeaturedNews;
