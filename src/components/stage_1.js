import React, { useState, useContext, useRef } from "react";
import { Button, Form, Alert, Badge } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { MyContext } from "../context";

const Stage1 = () => {
  const textInput = useRef();
  const context = useContext(MyContext);
  const [error, setError] = useState([false, ''])

  const handleSubmit =(e)=>{
      e.preventDefault();
      const value = textInput.current.value
      const validate = validateInput(value);

      if(validate){
          setError([false, '']);
          context.addPlayer(value)
     
          textInput.current.value = ''
      }
  }

  const validateInput = (value) =>{
      if(value=== '') {
        setError([true, 'Sorry You need to add Something']);
        return false;
      }
      if(value.length <= 2){
          setError([true, 'Sorry, you need at least 3 characters']);
            return false;
      }
      return true;
  }
  console.log(context);
  return (
    <>
      <Form onSubmit={handleSubmit} className="nt-4">
        <Form.Group>
          <Form.Control type="text"
           placeholder="Add Player name" 
           name="player"
           ref={textInput}
           />
        </Form.Group>
        <br/>
            { error[0] ? <Alert variant="danger">
                {error[1]}
            </Alert>
            : null}
        <br/>
        <Button className="miami" 
        variant="primary" 
        type="submit" 
        >
          Add Player
        </Button>
        {
          context.state.players && context.state.players.length > 0 ? <>
          
          <hr/>
          <div>
            <ul className="list-group">
                { context.state.players.map((item, id)=>(
                  <li key={id} className='list-group-item d-flex 
                  just-content-between 
                  align-items-center
                   list-group-item-action'>
                    {item}
                    <Badge
                    className="danger" 
                    onClick={()=>context.removePlayer(id)}>x</Badge>
                  </li>
                ))
                }
            </ul>
            <div 
            className="action_button btn" role={'button'} onClick={()=> context.next() }>
              NEXT
            </div>
          </div>
          </>
          : null
        }
      </Form>
    </>
  );
};
export default Stage1;
