import { Link, Outlet } from 'react-router-dom'  // Import Link
import React from 'react'
function Home() {
    return (
        <div className='w-screen h-screen bg-gray-300'>
            <nav className='bg-blue-300 h-32 flex justify-evenly items-center text-2xl'> 
                <Link to={'/'}>
                    <h1>Logo</h1>
                </Link>
                <div className='flex gap-10'>
                    <Link to={'/resume'}>
                        <p>Resume</p>
                    </Link>
                    <Link to={'/project'}>
                        <p>Project</p>
                    </Link>
                    <Link to={'/about'}>
                        <p>About Us</p>
                    </Link>
                    <Link to={'/contact'}>
                        <p>Contact</p>
                    </Link>
                    <Link to={'/login'}>
                        <p>Login</p>
                    </Link>
                </div>
            </nav> 
            <Outlet/> 
        </div>
    )
}

export default Home;
