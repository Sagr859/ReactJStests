import React from 'react';
import {Container, Row, ListGroup, Card, Button} from 'react-bootstrap';
import news from '../services/news';
import img from '../2673291.jpg';

const LatestNews = () => {
    return (
        <Container>
            <Row>
            <Button variant="success">Latest News</Button>
            </Row>
            <Row>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Card id ={news.id} style={{ width: '18rem' }} className="justify-md-centre">
                        <Card.Body>
                            <Card.Img variant="top" src={img} />
                            <Card.Title>{news.title}</Card.Title>
                                
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card id ={news.id} style={{ width: '18rem' }} className="justify-md-centre">
                        <Card.Body>
                            <Card.Img variant="top" src={img} />
                            <Card.Title>{news.title}</Card.Title>
                                
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card id ={news.id} style={{ width: '18rem' }} className="justify-md-centre">
                        <Card.Body>
                            <Card.Img variant="top" src={img} />
                            <Card.Title>{news.title}</Card.Title>
                                
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Card id ={news.id} style={{ width: '18rem' }} className="justify-md-centre">
                        <Card.Body>
                            <Card.Img variant="top" src={img} />
                            <Card.Title>{news.title}</Card.Title>
                                
                        </Card.Body>
                    </Card>
                </ListGroup.Item>
            </ListGroup>
            </Row>
        </Container>
            );
};

export default LatestNews;
