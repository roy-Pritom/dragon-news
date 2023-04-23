import React from 'react';
import { Button } from 'react-bootstrap';
import { FaGoogle ,FaGithub,FaFacebookF,FaTwitter,FaInstagram} from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'



const RightNav = () => {
    return (
        <div>
         <h4>Login With</h4>
         <Button variant="outline-primary"><FaGoogle/> Login with Google</Button>
      <Button variant="outline-secondary"><FaGithub></FaGithub>Login with Github</Button>
      <div className="">
        <h4>Find Us On</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebookF/>Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/>Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/>Instagram</ListGroup.Item>
    </ListGroup>
      </div>
      <Qzone></Qzone>
      <div className="position-relative ">
        <img src={bg} alt="" className='' style={{width:"300px"}} />
        <div className="position-absolute top-0 text-white text-center ">
            <h4 className=' text-center my-5 '>
            Create an <br /> Amazing <br /> Newspaper
            </h4>
            <p>
            Discover thousands of <br /> options, easy to <br /> customize layouts, one- <br /> click to import demo <br /> and much more.
            </p>
            <Button variant="danger">Learn More</Button>

        </div>
      </div>
            
        </div>
    );
};

export default RightNav;