import React from 'react';
import {Container, Row, ListGroup, Card, Button, Image} from 'react-bootstrap';
import news from '../news.json';
//import img from '../2673291.jpg';

const LatestNews = () => {
    return (
        <Container>
            <Card style={{ width: '18rem' }} className="justify-md-centre">
                <Card.Header>
                    <Row>
                    <Button variant="success">Latest News</Button>
                    </Row>
                </Card.Header>
            <Row>
            
           
                <ListGroup variant="flush">
                { news.map(n => {
                    return(
                        <ListGroup.Item key={n.id}><Image src={n.urlToImage} style={{ width: '3rem'}} thumbnail />{n.title}</ListGroup.Item>
                    );
                    }
                 )}

                
                </ListGroup>
            
            </Row>
            </Card>
        </Container>
            );
};

export default LatestNews;
