import React from 'react';
import './App.css';
import Naviv from './pages/navbar';
import { Form } from 'react-bootstrap';
//import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


function signupuser() {
  return (
    <div >
        <Naviv/>
      {/* <header className="App-header">
      
            <input placeholder="enter full name"/> 
             <input placeholder="enter email"/>
             <input placeholder="enter gender"/>
             <input placeholder="enter age"/> 
             <input placeholder="enter country"/>
             <input placeholder="enter city"/>
             <input placeholder="enter email"/>
             <input placeholder="enter confirm password"/>

            <button>submits</button>
   
      </header> */}
      <Form>
      <Form.Group controlId="Name">
    <Form.Label>Name</Form.Label>
    <Form.Control type="Name" placeholder="Enter Your Name" />
  </Form.Group>
  



  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="radio" label="Customer" name="tyi" value="Customer" />
    
    <Form.Check type="radio" label="Resturent" name="tyi" value="Resturent"/>
    
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
  );
}

export default signupuser;
