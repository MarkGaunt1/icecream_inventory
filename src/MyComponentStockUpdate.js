import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddForm  = {
    marginLeft: '20%',
    marginRight:'20%',
    
  };


export function MyComponentStockUpdate() {


const [nameedit, setNameedit] = useState("");
const [supplieredit, setSupplieredit] = useState("");
const [currentstock_boxesedit, setCurrentstock_boxesedit] = useState("");
const [veganedit, setVeganedit] = useState("");
const[_idEdit, set_idEdit] = useState("");
const { register, handleSubmit, errors } = useForm();

function onClickFindEdit() {

    fetch(`${process.env.REACT_APP_APIHOST}/api/todos/` +_idEdit)
      .then(response => response.json())
      .then((result) => {setNameedit(result[0].name) 
        setSupplieredit(result[0].supplier) 
        setCurrentstock_boxesedit(result[0].currentstock_boxes)
        setVeganedit(result[0].vegan)
    } )
      .catch(error => console.log('error', error));


};

function onClickEdit(event) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({name:nameedit, supplier:supplieredit, currentstock_boxes:currentstock_boxesedit, vegan:veganedit});
    
    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    console.log(raw);

    fetch(`${process.env.REACT_APP_APIHOST}/api/todos/` +_idEdit, requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
        window.location.reload()})
      .catch(error => console.log('error', error));
    
};

return (
    <div>


              

                <Form style = {AddForm}>
                        <Form.Label><h3>Find & Edit Stock</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Icecream ID:</Form.Label>
                                <Form.Control type="text" value= {_idEdit}  onChange={e => set_idEdit(e.target.value)}placeholder="eg 5f188815..." />
                                <br />           
                                <Button onClick={onClickFindEdit} variant="primary" type="button" >
                                    Find
                                </Button>
                            </Form.Group>

                            

       
                    </Form>
                    <br />

                    <Form style = {AddForm}>
                        <Form.Label><h3>Update Stock</h3></Form.Label>
        
                            <Form.Group controlId="formBasicText1">
                                <Form.Label>Flavour:</Form.Label>
                                <Form.Control name ="nameedit" type="text" value= {nameedit}  onChange={e => setNameedit(e.target.value)} ref={register({ required: true })} placeholder="eg Mint" />
                                {errors.nameedit && errors.nameedit.type === "required" && <span>Flavour/name edit not completed!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText2">
                                <Form.Label>Supplier:</Form.Label>
                                <Form.Control name ="supplieredit" type="text" value= {supplieredit}  onChange={e => setSupplieredit(e.target.value)} ref={register({ required: true })} placeholder="eg Wonka's Wafers!" />
                                {errors.supplieredit && errors.supplieredit.type === "required" && <span>Supplier edit not completed!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText3">
                                <Form.Label>Current Stock (no of boxes):</Form.Label>
                                <Form.Control name= "currentstock_boxesedit" type="number" value= {currentstock_boxesedit}  onChange={e => setCurrentstock_boxesedit(e.target.value)} ref={register({ required: true })} placeholder="0" />
                                {errors.currentstock_boxesedit && errors.currentstock_boxesedit.type === "required" && <span>Stock number edit not completed!</span>}

                            </Form.Group>

                            <Form.Group controlId="formBasicText4">
                                <Form.Label>Vegan?</Form.Label>
                                <Form.Control name= "veganedit" type="text" value= {veganedit}  onChange={e => setVeganedit(e.target.value)} ref={register({ required: true })} placeholder="eg Yes or No" />
                                {errors.veganedit && errors.veganedit.type === "required" && <span>If vegan(?) edit not completed!</span>}
                                <br />           
                                <Button onClick={handleSubmit(onClickEdit)}  variant="primary" type="update" >
                                    Update
                                </Button>
                                


                            </Form.Group>

       
                    </Form>
                
                
                
                
                 
             
    
      

    </div>
  );
}
