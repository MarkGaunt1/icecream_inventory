import React,{useState, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import image from './icecream2.jpg';



const stockPage = {
  width: '100%',
  height: '100%',
  color: 'blue',
  margin: '0',
  backgroundImage: 'url('+image+')',
  backgroundSize: 'contain'
  
}


const table = {
  margin:'0'
};


export function MyComponentIceView() {

  const[responseData, setResponseData] = useState([]);

useEffect(() => {
  fetch(`${process.env.REACT_APP_APIHOST}/api/todos`)
  .then(response => response.json())
.then(data => setResponseData(data));
},[]);

console.log(process.env.APIHOST);

function lowStock(currentstock_boxes, name) {
  if(currentstock_boxes <160) {
    return alert(`${name} is low - please order more!`);
  }
};

const renderTable = () => {
  return responseData.map(ice => {
    return (
  
  <tbody >

      <tr>
      <td>Icecream ID:</td>
      <td>{ice._id}</td>
          
      </tr>


      <tr>
      <td>Flavour:</td>
      <td>{ice.name}</td>
          
      </tr>

                      
      <tr>
      <td>supplier:</td>
      <td>{ice.supplier}</td>
      </tr>
      
      <tr>
      <td>Vegan?:</td>
      <td>{ice.vegan}</td>
      </tr>

      <tr>
      <td>Current Stock (no of boxes):</td>
      <td>{ice.currentstock_boxes} {ice && lowStock(ice.currentstock_boxes, ice.name)} </td>
      </tr>

      <br />
      <br />
      


  </tbody>





     
    )
  })
}

return (
  <div style = {stockPage}>
                  <br />
                  <h1 style={{ fontWeight: 'bold' }}>Current Stock</h1>
                  <br />
                  <div style = {table}>
                      <Table striped bordered hover variant="dark" >
                      {renderTable()} 
                          
                      
                      </Table>
                      
                  </div>
                  <br />
              </div>
);
}