import React from 'react';
import {Card, Navbar} from 'react-bootstrap';
import UserPhoto from '../Images/UserPhoto.jpg';
import Purge from '../Images/purge.png';
import facebook from '../Images/facebook-icon.png';
import twitter from '../Images/twitter-icon.png';
import linkedIn from '../Images/linkedIn-icon.png';
import '../CSS/UserProfile.css';

const UserProfile = () => {
    return (
        <div className='container'>
            <Navbar className='navbar'>
                <Navbar.Text>
                    <img className='Purge' width='50px' src = {Purge} alt='Logo'></img>
                </Navbar.Text>
            </Navbar>
            
            <div className='container-card'>
                <Card className='card-item'>
                    <Card.Img variant="top" className='Avatar' width='70px' src = {UserPhoto} alt='UserPhoto'/>
                    <Card.Body>
                        <Card.Title>Name</Card.Title>
                        <Card.Text>email address</Card.Text>
                            <div class="social">
                                <img src={facebook} alt="icon_facebook"/>
                                <img src={twitter} alt="icon_twitter"/>
                                <img src={linkedIn} alt="icon_linkedIn"/>
                            </div>  
                    </Card.Body>
                </Card>
            </div>
        </div> 
      );
};

export default UserProfile;
