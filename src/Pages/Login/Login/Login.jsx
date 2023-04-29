import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Provider/AuthProvider';

const Login = () => {
    const [success,setSuccess]=useState('');
    const [error,setError]=useState('');
    const location=useLocation();
    console.log(location)
   const from=location.state?.from?.pathname || '/';
   console.log(from)

    const navigate=useNavigate()
    const {logIn}=useContext(authContext)

    const handleLogin=(event)=>{
        event.preventDefault();
        setSuccess('')
        setError('')
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
  
        console.log(email,password)
        logIn(email,password)
        .then(result=>{
            const loggedUser=result.user;
            setSuccess('Successfully login')
            navigate(from)
        })
        .catch(error=>{
            setError(error.message)
        })
    }

    return (
        <div className='mx-auto my-5 w-50'>
                      <Form onSubmit={handleLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"  name='password' placeholder="Password" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
       Login
      </Button>
    </Form>

       <div className="">
        <p><small>New to dragon ? Please<Link to='/login/register'>Register</Link> </small></p>
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

export default Login;