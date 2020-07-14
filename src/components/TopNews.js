import React from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import news from '../news.json';
import img from '../2673291.jpg';

const TopNews = () => {
    return (
        <Container>
            <Row>
            <Button variant="success">Top News</Button>
            </Row>
            
            { news.map((n,i) => {
                if(i==0)
                {
                    return(
                        <Row>
                    <Card id ={n.id} style={{ width: '18rem' }} className="justify-md-centre">
                <Card.Img variant="top" src={n.urlToImage} />
                <Card.Body>
                    <Card.Title>{n.title}</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                        <Card.Text>
                            {n.content}
                        </Card.Text>
                </Card.Body>
            </Card>
            </Row>
            
                   );
                }
                
                else if(i>0 && i<3){
                    return(
                      
                    <Card id ={n.id} style={{ width: '7rem' }} >
                <Card.Img variant="top" src={n.urlToImage} />
                <Card.Body>
                    <Card.Title>{n.title}</Card.Title>
                    <Card.Subtitle></Card.Subtitle>
                        <Card.Text>
                            {n.content}
                        </Card.Text>
                </Card.Body>
            </Card>
                    
                    );

                    
                    }
                }
            )}

            
            
        </Container>
            );
};

export default TopNews;
