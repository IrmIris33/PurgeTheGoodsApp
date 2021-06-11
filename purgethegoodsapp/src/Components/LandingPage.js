import React from 'react';
import logo from '../Images/purge.png';


const LandingPage = () => {
    return (
        <div className= "container">
          <img
            src= {logo}
            alt="Purge Logo"/>
            <p>Purge items you no longer use or pick up something new, quick and easy!</p>
    
          <h3>HOW DOES IT WORK?</h3>
            <p>Donor</p>
              <ul>
                <li>Log In</li>
                <li>Create a profile </li>
                <li>Add photos of items with pick up location </li>
                <li>Then watch your items purge from your list </li>
              </ul>
      
            <p>Recipient</p>
              <ul>
                <li>Log In</li>
                <li>Create a profile </li>
                <li>Swipe through items </li>
                <li>Click on the heart to choose the item </li>
                <li>Review and accept instructions and disclaimer </li>
                <li>Pick up item at designated location </li>
              </ul>
        </div>
    );
};

export default LandingPage;
