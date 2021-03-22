import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

const FriendsContentItem = ({imageUrl,age,title,dob,address,
  socialmedia,lastseen,followers,hobbies,email,education,job}) => (
    
<div class="row">
    <div class="column">
      <Card.Img variant="top" height="450px" src={imageUrl}/>
    </div>
      <div class="column">
        <Card.Body >
          <Card.Title>{title}</Card.Title>
          <Card.Title>{age}</Card.Title>
          <Card.Title>{dob}</Card.Title>
          <Card.Title>{address}</Card.Title>
          <Card.Title>{socialmedia}</Card.Title>
          <Card.Title>{lastseen}</Card.Title>
          <Card.Title>{followers}</Card.Title>
          <Card.Title>{hobbies}</Card.Title>
          <Card.Title>{email}</Card.Title>
          <Card.Title>{education}</Card.Title>
          <Card.Title>{job}</Card.Title>   
        </Card.Body>
      </div>
</div>
   )
  
export default FriendsContentItem ;