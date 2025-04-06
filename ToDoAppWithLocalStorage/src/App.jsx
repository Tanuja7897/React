import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //Reason to make todoHook jb hm data ek hook se dusre hook me assign kr rhe h taki array hi maintained rhe kyoki inpit se obj a rha h and jb input me value set kr rhe h to array obj me convert ho rha h
  let [todoData , setTodoData] = useState([]);
  let [data , setData] = useState({title:"",desc:""});
  function AddCart(){
    if(!data.title || !data.desc){
        alert("Please add some todo") ;
        return;
    }
    //setTodoData((preVal)=>[...preVal,data]); //we can do this but use state hook sync nhi hoga isse ek step pecche chlega 
    setTodoData([...todoData,data]); //for sync of input and useState hook..hmne useState hook k wait nhi kiya khud se hi update kr diya
    saveLocal([...todoData,data]);//ab ye browser pe data storage h
  }
  //now browser se data fetch krna h  ...kevl 1 hi br fetch krna h
  function getDataFromBrowser(){
    let browserData = JSON.parse(localStorage.getItem("todos")) || []; //todo is key jisse hmara pura data store h  ..and oroperator ..starting me data is null to uspe map nhi chlega isiliye isiliye agr null hai to empty Array[] bhej rhe h
    setTodoData(browserData);
  }
  useEffect(()=>{
    getDataFromBrowser();
    },[]);


  function deleteData(index){
    let updatedTodos = [...todoData];//hm ek nya arraye le rhe h jisme hm todoData ko update krenge
    updatedTodos.splice(index, 1);
    setTodoData(updatedTodos);
    saveLocal(updatedTodos);
  }
  function saveLocal (todos){
    //todos name se key bn jayegi usme to data rkhte h vo stringify krke rkhte h
    localStorage.setItem("todos" , JSON.stringify(todos));
    //useState hook always 1 input peeche y delay chlta h to hm 4 card add krenge to loacal storage me kevl 3 hi ayenge 
    //to solve this...
    //1.go to AddCart function ...

  }
  return(
      <div className="bg-black min-h-screen w-screen">
        <div className="div flex flex-col items-center">
          <h1 className='text-amber-200 italic text-2xl'>Add Your ToDos </h1>
          <input type="text" placeholder='Enter your toDo name' onChange={(e)=> setData((preVal)=>({...preVal,title:e.target.value}))} className='border border-black border-2 w-1/5 m-6 shadow-xl/30 bg-teal-100'/>
          <input type="text" placeholder='Add description' onChange={(e)=> setData((preVal)=>({...preVal,desc:e.target.value}))} className='border border-black border-2 w-1/5 mt-1 ml-6 shadow-xl/30 bg-teal-100'/>
          <button onClick={AddCart} className='bg bg-blue-500 w-1/10 rounded-lg h-10 mt-1 ml-6 shadow-lg shadow-blue-500/50'>Add ToDo</button>
        </div>

        <div >
            { //jx code inside html content
            
              todoData.map((obj,index) => (
                    <div className='bg bg-sky-500/50 w-1/5 h-50 mt-1 ml-6 border-3 border-indigo-500 flex flex-col justify-between rounded-lg'>
                      <p>{obj.title}</p>
                      <p>{obj.desc}</p>
                      <button onClick={()=>deleteData(index)} className='bg bg-blue-500 w-3/10 rounded-lg h-2/10 mb-2 ml-2 shadow-lg shadow-blue-500/50 '>Delete</button>
                    </div>
                  )
                )
            }
        </div>
      </div>
  )
}

export default App
