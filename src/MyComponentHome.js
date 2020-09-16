import React from 'react';
import {Container} from 'react-bootstrap';
import image from './icecream.jpg'

const styles = {
    width: '100%',
    height: '1000px',
    color: 'blue',
    margin: '0',
    backgroundImage: 'url('+image+')',
    backgroundSize: 'cover'
      
    };


export function MyComponentHome() {


return (
    <div>
        <Container fluid style = {styles}>
        <br />
        <br />
        <h1 style={{ fontWeight: 'bold' }}>Gauntio's Icecream Ltd</h1>
        <br/>
        <h1 style={{ fontWeight: 'bold' }}>Online Inventory</h1>

               
        <h2 style={{ fontWeight: 'bold' }}>(For authorised personnel use only!)</h2>
        <br /> 
        <br />
        <br />
        <br />
        <br /> 
        </Container>      
       
      </div>
  );
}