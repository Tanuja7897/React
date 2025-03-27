import { useState } from 'react'
function App() {
  let [data , setData] = useState(0);
  function Increase(){
    setData(++data);
  }
  function Decrease(){
    setData(--data);
  }
  return(
    <div>
      <button onClick={Increase}>Increase</button>
      <h1>{data}</h1>
      <button onClick={Decrease}>Decrease</button>
      
    </div>
  );
}

export default App
