import React,{Component} from 'react';
import { CardDeck } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import food1 from './food1.jpg'
import food2 from './food2.jpg'
import food3 from './food3.jpg'


class Card1 extends Component{

    render(){
      return(
          <div>
  <CardDeck>
  <Card>
    <Card.Img variant="top" src={food1} />
    <Card.Body>
      <Card.Title>Family pack</Card.Title>
      <Card.Text>
        3 Drinks,2 burgers and Bucket of broast
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
  <Card.Img variant="top" height="200px" src={food2} />
    <Card.Body>
      <Card.Title>Biryani</Card.Title>
      <Card.Text>
        1 Biryani with special raita
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
  </Card>
  <Card>
  <Card.Img variant="top" height="200px" src={food3} />
    <Card.Body>
      <Card.Title>Chicken Qorma</Card.Title>
      <Card.Text>
        1 Chicken Qorma with drinks
      </Card.Text>
    </Card.Body>
    {/* <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer> */}
    
  </Card>
</CardDeck>
          
         
 
 
       </div>    
    );
}
}
export default Card1;