import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import './content-item.styles.scss';
const ContentItem = ({imageUrl,id}) => (
   
    <Card className="col-md-4">
        <Card.Img variant="top" src={imageUrl}s/>
        <Card.Body>
        <p>Hey Hai..! what's up<mark color="red">click</mark> Below Button.</p>
            <Link to= {"friendspage/"+id} className="btn btn-primary">Explore more Details </Link>   
        </Card.Body>

    </Card>
     
    )
export default ContentItem;
      