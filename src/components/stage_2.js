import React,{useContext} from 'react';
import { MyContext } from '../context';
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
        <div className='action_button' role={'button'} onClick={()=>context.resetGame()}>
            Start over
        </div>
        <div className='action_button btn_2' role={'button'} onClick={()=>context.getNewLoser()}>
            Get new loser
            </div>
        </>
        
    )
}
export default Stage2;