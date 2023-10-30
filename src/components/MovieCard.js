import React from 'react'
import Card from 'react-bootstrap/Card';
import Rating from './Rating';

function MovieCard({ movie: { id, movieName, description, rating, imgUrl }}) {
  return (
    <div>
       <Card style={{ width: '20rem'}} className="cardContainer" >
      <Card.Img variant="top" style={{height : '15rem'}}  src={imgUrl} />
      <Card.Body>
        <Card.Title>{movieName} </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Rating rating= {rating}/>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard