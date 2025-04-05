import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [todoData , setTodoData] = useState([]);
  let [data , setData] = useState({title:"",desc:""});
  function ShowCart(){
    setTodoData((preVal)=>[...preVal,data]);
    saveLocal((preVal)=>[...preVal,data]);
  }
  function deleteData(index){
      todoData.splice(index,1);
      setTodoData(todoData);
      console.log(todoData)
  }
  function saveLocal (){
    //todos name se key bn jayegi usme to data rkhte h vo stringify krke rkhte h
    localStorage.setItem("todos" , JSON.stringify(todoData));
    //useState hook always 1 input peeche y delay chlta h to hm 4 card add krenge to loacal storage me kevl 3 hi ayenge 
    //to solve this...
    //1.call the function when you are 

  }
  return(
      <>
        <div className="div flex flex-col">
          <input type="text" placeholder='Enter your toDo name' onChange={(e)=> setData((preVal)=>({...preVal,title:e.target.value}))} className='border border-black border-2 w-1/5 m-6 shadow-xl/30'/>
          <input type="text" placeholder='Add description' onChange={(e)=> setData((preVal)=>({...preVal,desc:e.target.value}))} className='border border-black border-2 w-1/5 mt-1 ml-6 shadow-xl/30'/>
          <button onClick={ShowCart} className='bg bg-blue-500 w-1/10 rounded-lg h-10 mt-1 ml-6 shadow-lg shadow-blue-500/50'>Add ToDo</button>
        </div>

        <div >
            { //jx code inside html content
                todoData.map((obj,index) => (
                    <div className='bg bg-sky-500/50 w-2/5 h-50 mt-1 ml-6 border-3 border-indigo-500 flex flex-col justify-between '>
                      <p>{obj.title}</p>
                      <p>{obj.desc}</p>
                      <button onClick={()=>deleteData(index)} className='bg bg-blue-500 w-3/10 rounded-lg h-2/10 mb-2 ml-2 shadow-lg shadow-blue-500/50 '>Delete</button>
                    </div>
                  )
                )
            }
        </div>
      </>
  )
}

export default App
