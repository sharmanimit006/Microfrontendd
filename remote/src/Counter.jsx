import React,{useState} from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
  return (
    <>
    <div class="bg-blue-900 p-5">
      
             {/**<div>count={count()}</div>**/}
             <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1 )}>add me</button>
            
            </div>
    <h1>
        my name is nimit
    </h1>
    <button>Click me</button>
    </>
  )
}
