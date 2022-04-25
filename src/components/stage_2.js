import React,{useContext} from 'react';
import { MyContext } from '../context';
import { Button, Form, Alert, Badge } from "react-bootstrap";
const Stage2 =()=>{

    const context =useContext(MyContext)
    return(
        <>
        <div className='result_wrapper'>
            <h3>
                The Loser is:
            </h3>
            <div>{context.state.result}</div>
        </div>
        <Button className='action_button' onClick={()=>context.resetGame()}>
            Start over
        </Button>
        <Button className='action_button btn_2' onClick={()=>context.getNewLoser()}>
            Get new loser
            </Button>
        </>
        
    )
}
export default Stage2;