import Allcard from "./component/Allcard"
import { useState } from "react"
import {data} from "./utils/data"

function App() {
  const [val , setval] = useState("");
  
  const[filterdata ,setfilterdata ] = useState(data);
  
  function filterHandler(){
    //remove exact vali error
    //allow to find with partial seacrh jruri nhi h pura name likha pde ...include function
    let result = data.filter((item)=>item.title.toLowerCase().includes(val.toLowerCase()))
    setfilterdata(result)
  }
  return(<div>
    <h1 className="text-2xl  text-red-500 text-center pt-3">Raste k Maal Saste Me</h1>
    <div>
      <input className="bg-amber-950" type="text" placeholder="Search" value={val} onChange={(e)=>setval(e.target.value)}/>
      <button onClick={filterHandler} >Search</button>
      <Allcard data={filterdata}/>
    </div>
  </div>)
}

export default App