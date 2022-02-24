import {useState} from 'react';
function Counter(){
    let [countNum, setCount]= useState(0);
    
  
    let increase =()=>{
    setCount((countNum+=1));
   

    }
    let decrease =()=>{
        setCount((countNum-=1));
    }
    let reset=()=>{
        setCount(0);
    }
    

   
   
    return(
        <div>
            <h1 className='title'>Counter</h1>
            <h1 className='count'>{countNum}</h1>
            <button className="increaseBtn" onClick={increase}>Increment</button>
            <button className="resetBtn" onClick={reset}>reset</button>
            <button className="decreaseBtn"onClick={decrease}>Decrement</button>
            
        </div>
    )
}

export default Counter;