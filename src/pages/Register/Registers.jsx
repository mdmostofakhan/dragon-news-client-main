import React, { useContext, useState } from 'react';
import { Button, Container, Form, } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
import { AuthContext } from '../../Authproviders/AuthProvider';

const Registers = () => {
    const { createUser} = useContext(AuthContext)
   const [accept, setAccept] = useState(false)
 
    const handleRegister = event => {
          event.preventDefault()
          const form = event.target;
          const name = form.name.value;
          const photo = form.photo.value;
          const email = form.email.value;
          const password = form.password.value;
          console.log(name, photo, email, password)

          createUser(email, password)
          .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
          })
          .catch(error => {
            console.log(error)
          })
    }
   const handleAccept = (event) => {
         setAccept(event.target.checked)
   }

    return (
        <Container className="mx-auto w-25">
        <h3>Please Login</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter your name" required/> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Photo Url" required/> 
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter your email address" required/> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" required placeholder="Enter your password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
           onClick={handleAccept}
           type="checkbox" 
           name='accept'
           label={<>Accept <Link to= "/terms">Term & Conditions</Link></>} />
        </Form.Group>

        <Button variant="primary" disabled={!accept} type="submit">
                Register
        </Button>
        <br />
        <Form.Text className="text-secondary">
            All Ready Have an Account ? <Link to="/login">Login</Link>
        </Form.Text>
      </Form>
    </Container>
    );
};

export default Registers;