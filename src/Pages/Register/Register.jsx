import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';

const Register = () => {
    const [success,setSuccess]=useState('');
    const [error,setError]=useState('');
    const [accepted,setAccepted]=useState(false);
     
    const {createUser}=useContext(authContext)
    const handleSignUp=(event)=>{
        event.preventDefault();
        setSuccess('')
        setError('')
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        const photoUrl=form.url.value;
        console.log(photoUrl,email,password)
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
            setSuccess('Successfully register')
        })
        .catch(error=>{
            setError(error.message)
        })
    }
    const handleTerms=(event)=>{
        // console.log(event.target.checked)
      setAccepted(event.target.checked)

    }
    return (
        <div className='mx-auto my-5 py-5  w-50'>
            <h3 className=''>Register your account</h3>
             <Form className='py-3' name='form' onSubmit={handleSignUp}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter your name" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name='url' placeholder="Enter photo url" />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"name='email' placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" onClick={handleTerms}
        label={<>Accepts <Link to='/login/terms'>Terms and Condition</Link></>} />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
    <div className="">
        <p><small>Already have an account? Please<Link to='/login/login'>Login</Link> </small></p>
       </div>
       <Form.Text className="text-muted text-success">
          {success}
        </Form.Text>
      <Form.Text className="text-muted text-danger">
          {error}
        </Form.Text>
        </div>
    );
};

export default Register;