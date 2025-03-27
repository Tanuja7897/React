import { useState } from "react";

function App() {
  const [data , setData] = useState({email:"", password:""});
  
  function formsubmit(e){
    
      e.preventDefault();
      console.log({ email:data.email,password:data.password})
  }
  function handleForm(event){
    const {name,value} = event.target
      setData((prevData) =>({
        ...prevData,
        [name]:value,
      }));
  }

  return(
    <div className="bg-black min-h-screen max-w-sceen">
      <form>
        <div className="head text-white italic text-4xl font-medium flex justify-center pt-12">
          <h1>Instagram</h1>
        </div>
        <div className="info flex flex-col justify-center items-center mt-10 ">
          <input
            name = "email" 
            type="email" 
            value={data.email} 
            placeholder='email' 
            onChange={handleForm} className="bg-gray h-9 w-56 focus:outline-none border-button-border border-1 rounded-md"
            />
          <button>Log in</button>
         
          <input 
            name="password"
            type="password"
            value ={data.password} 
            onChange={handleForm} 
            placeholder='Enter password' className="bg-gray h-9 w-56 focus:outline-none border-button-border border-1 rounded-md"
            />
          <button onClick={formsubmit} className="bg-login h-8 w-56 focus:outline-none rounded-md mt-7">Log in</button>

        </div>
      </form>
    </div>
  )
}

export default App
