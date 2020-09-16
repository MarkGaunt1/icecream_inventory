import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Container, Row, Col} from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { MyComponentStockUpdate} from './MyComponentStockUpdate';





const stockManPage = {
    width: '100%',
    height: '100%',
    color: 'white',
    
    margin: '0',
    backgroundColor: 'black',
    backgroundSize: 'cover'
}

const AddForm  = {
    marginLeft: '20%',
    marginRight:'20%',
    
  };
  
 
export function MyComponentStockManager() {
    
    const [name, setName] = useState("");
    const [supplier, setSupplier] = useState("");
    const [currentstock_boxes, setCurrentstock_boxes] = useState("");
    const [vegan, setVegan] = useState("");
    const[_id, set_id] = useState("");
    const[responseData, setResponseData] = useState([]);
    
    const { register, handleSubmit, errors } = useForm();
  

    function onClick() {
        
        const requestOptions = {
            method: 'POST',
            headers: {
            'Content-Type' : 'application/json' 
        },
            body:   JSON.stringify({ name, supplier, currentstock_boxes, vegan })
        };
        fetch(`${process.env.REACT_APP_APIHOST}/api/todos`, requestOptions)
        .then(response => response.json())
        .then(data => {setResponseData(data)
        window.location.reload()});
        console.log(responseData)
    }; 



    


    function onClickDel(event) {

        event.preventDefault();
            
        
        
        fetch(`${process.env.REACT_APP_APIHOST}/api/todos/` + _id, {method: 'DELETE'})
        .then(response => response.text())
        .then(result => window.location.reload())
        .catch(error => console.log('error', error));
    };

    
 
  return (
    <div>


        <Container fluid style = {stockManPage}>
        <br />
        <h1 style={{ fontWeight: 'bold' }}>Stock Manager</h1>
        <br />
            

            <Row>
                <Col>
                    <Form style = {AddForm}>
                        <Form.Label><h3>Add new stock</h3></Form.Label>
        
                            <Form.Group controlId="name" >
                                <Form.Label for="name">Flavour:</Form.Label>
                                <Form.Control name ="name" type="text" value= {name}  onChange={e => setName(e.target.value)} ref={register({ required: true })} placeholder="eg Mint"  />
                                {errors.name && errors.name.type === "required" && <span>Icecream flavour/name is required!</span>}
                                                                                                                               
                            </Form.Group>

                            <Form.Group controlId="formBasicText2">
                                <Form.Label>Supplier:</Form.Label>
                                <Form.Control name ="supplier" type="text" value= {supplier}  onChange={e => setSupplier(e.target.value)} ref={register({ required: true })} placeholder="eg Wonka's Wafers!" />
                                {errors.supplier && errors.supplier.type === "required" && <span>Supplier name is required!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText3">
                                <Form.Label>Current Stock (no of boxes):</Form.Label>
                                <Form.Control name ="currentstock_boxes" type="number" value= {currentstock_boxes}  onChange={e => setCurrentstock_boxes(e.target.value)} ref={register({ required: true })} placeholder="0" />
                                {errors.currentstock_boxes && errors.currentstock_boxes.type === "required" && <span>Number in stock is required!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText4">
                                <Form.Label>Vegan?</Form.Label>
                                <Form.Control name ="vegan" type="text" value= {vegan}  onChange={e => setVegan(e.target.value)} ref={register({ required: true })} placeholder="eg Yes or No" />
                                {errors.vegan && errors.vegan.type === "required" && <span>If vegan(?) is required!</span>}
                                <br />           
                                <Button onClick={handleSubmit(onClick)} variant="primary" type="post" >
                                    Add Stock
                                </Button>


                            </Form.Group>

       
                    </Form>
                
                </Col>
                
                

                <Col>

                <MyComponentStockUpdate/>
                
                </Col>

                <Col>
                    <Form style = {AddForm}>
                        <Form.Label><h3>Delete Stock</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Icecream ID:</Form.Label>
                                <Form.Control type="text" value= {_id}  onChange={e => set_id(e.target.value)}placeholder="eg 5f188815..." />
                                <br />           
                                <Button onClick={onClickDel} variant="primary" type="delter" >
                                    Delete
                                </Button>
                            </Form.Group>

                            

       
                    </Form>
                
                </Col>
                
                
            </Row>
        </Container>
             
    
      

    </div>
  );
}
