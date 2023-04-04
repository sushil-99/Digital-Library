import Card from 'react-bootstrap/Card';
import { Ratings } from '../ratings/Ratings';
import "./customCard.style.css"

export const CustomCard = ({title, thumbnail, summary, ratings}) =>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={thumbnail}/>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{summary}</Card.Text>
        <Ratings rating={ratings} />
      </Card.Body>
    </Card>
  );
}

export default CustomCard;