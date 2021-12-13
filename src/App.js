import React, {useState} from "react";
import "./style.css";



export default function App() {

  const state= useState();
  const [count, setCount] = useState(2);

  const IncNum = () => {
    setCount(count+1);
  
}
  return (
    <>
    <div>
    <h1> {count} </h1>
    <button onClick={ IncNum }>Click Me</button>
    </div>
    </>
  );
}
