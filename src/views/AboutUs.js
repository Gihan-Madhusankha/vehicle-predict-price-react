import React from 'react';
import { Card, CardText, CardTitle } from "reactstrap";

const AboutUs = () => {
  return (
    <Card className='p-3 text-center rounded-0' style={{background: 'linear-gradient(to bottom, #333, #34495e)'}}>
      <CardTitle className='text-center mt-3'>
        <h1 className='text-white' style={{fontWeight: 'bold'}}>About Us</h1>
      </CardTitle>
      
      <p style={{color: 'gray'}}>Welcome to vehicle.lk, your go-to platform for all your vehicle buying and selling needs. We're passionate about connecting buyers and sellers, making the process smooth and enjoyable.</p>

      <p style={{color: 'gray'}}>Explore our user-friendly interface, powerful search tools, and a dedicated support team ready to assist you at every step. Join vehicle.lk and embark on a journey where buying or selling a vehicle is not just a transaction but an experience.</p>

      <p className='mb-3' style={{color: 'gray'}}>Thank you for choosing vehicle.lk - where your next adventure begins!</p>
    </Card>
  );
}

export default AboutUs;
