import React from 'react';
import {Container, Row, Col, Card, Button, Image, Carousel} from 'react-bootstrap';
import news from '../news.json';
import img from '../2673291.jpg';



const FeaturedNews = () => {
    return (
        <Container>
            <Card style={{ width: '50rem' }} className="text-center mt-4 mb-4">
                <Card.Header>
                    <Row>
                    <Button variant="success">Featured News</Button>
                    </Row>
                </Card.Header>
                     <Row>
                     <Carousel style={{ width: '60rem'}} className="text-center mt-4 mb-4">   
                        { news.map((n,i) => {

                            return (
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            style={{ width: '40rem', height:'20rem'}}
                                            src={n.urlToImage}
                                        />
                                        <Carousel.Caption>
                                            <h3>{n.title}</h3>
                                            <p>{n.description}</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                               
                            );
                    }
                    )}
                    </Carousel>  
                    </Row>
                </Card>

            
        </Container>
            );
};

export default FeaturedNews;
