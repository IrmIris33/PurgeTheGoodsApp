import React from 'react';
import {Carousel} from 'react-bootstrap';
import logo from '../Images/purge.png';


const LandingPage = () => {
    return (
        <div>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src= {logo}
                alt="First slide"/>
              <Carousel.Caption>
                <p>Purge items you no longer use or pick up something new, quick and easy!</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"/>
              <Carousel.Caption>
                <h3>HOW DOES IT WORK?</h3>
                <p>Donor</p>
                <ul>
                  <li>Log In</li>
                  <li>Create a profile </li>
                  <li>Add photos of items with pick up location </li>
                  <li>Then watch your items purge from your list </li>
                </ul>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"/>
              <Carousel.Caption>
              <p>Recipient</p>
                <ul>
                  <li>Log In</li>
                  <li>Create a profile </li>
                  <li>Swipe through items </li>
                  <li>Click on the heart to choose the item </li>
                  <li>Review and accept instructions and disclaimer </li>
                  <li>Pick up item at designated location </li>
               </ul>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
    );
};

export default LandingPage;
