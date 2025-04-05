import { Routes, Route} from 'react-router-dom'  
import Home from "./components/Home"
import Body from "./components/Body"
import Project from "./components/Project"
import About from "./components/About"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Login from "./components/Login"

import './App.css'

function App() {
  return (
    //nested routing for making navbar or home page sticky throughtout the website
    <Routes>  
       <Route path='/' element={<Home />}>{/* jb path / mile meanse default ip mile to home page render krva dena */}
            <Route path='/' element={<Body/>} />
            <Route path='/resume' element={<Resume/>} />{/* jb path /resume  mile meanse ...default ip ke age resume mile to Resume page render krva dena */}
            <Route path='/' element={<Body/>} />
            <Route path='/project' element={<Project/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/login' element={<Login/>}/>
      </Route>
      <Route path='*' element={<h1>Page Not Found</h1>}/>
    </Routes>
  )
}

export default App

