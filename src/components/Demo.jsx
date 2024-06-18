import React, { useEffect, useState } from "react";

const Counter = ()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{

    },[])

    return (<div>
        
        <p>Count : {count}</p>
        <button onClick={()=>{
            count!=5 ? setCount(count+1):null;
        }}>click</button>
    </div>)
}

export default Counter;