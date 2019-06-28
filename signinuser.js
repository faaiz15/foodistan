import React from 'react';
import './App.css';
import Naviv from './pages/navbar';
import { Form } from 'react-bootstrap';

//import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import * as firebase from 'firebase';


// function signinuser() {
  
//   return (
//     <div >
//       <Naviv/>

//       <Form>
//   <Form.Group controlId="email">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="password">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group controlId="formBasicChecbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>
//     </div>
//   );
// }

class signinuser extends React.Component {

  constructor(){
      super();
      this.state ={
          email:'dwsd',
          password: ''
      }
     

  }
   login(email,password){


      return new Promise(()=>{
          firebase.auth().signInWithEmailAndPassword(email, password).then(user =>{
          console.log("salam");
          })
      })
  
      }

  showAlert() {

      alert("Im an alert");
      console.log();
    }
  
  render(){

      return (
          <div >
 <Naviv/>

<Form>
<Form.Group controlId="email">
<Form.Label>Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
<Form.Text className="text-muted">
We'll never share your email with anyone else.
</Form.Text>
</Form.Group>

<Form.Group controlId="password">
<Form.Label>Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>
<Form.Group controlId="formBasicChecbox">
<Form.Check type="checkbox" label="Check me out" />
</Form.Group>
<Button variant="primary" type="submit" onClick={this.login.bind(this)}>
Signin
</Button>
</Form>



{/* <button onClick={this.login.bind(this)}>Signin</button> */}
  </div>
);}}






export default signinuser;
