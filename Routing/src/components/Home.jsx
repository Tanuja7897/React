import { Link, Outlet } from 'react-router-dom'  // Import Link
import React from 'react'
function Home() {
    return (
        <div className='w-screen h-screen bg-gray-300'>
            <nav className='bg-blue-300 h-32 flex justify-evenly items-center text-2xl'> 
                <Link to={'/'}>{/* jb koi logo pe click kre to / path dedena ...means default path dedena */}
                    <h1>Logo</h1>
                </Link>
                <div className='flex gap-10'>
                    <Link to={'/resume'}>{/* jb koi Resume pe click kre to /resume path dedena .. */}
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
            <Outlet/> {/*btana ki ab iske ki neeche variable h vo condition ke according chage ho skti h */}
        </div>
    )
}

export default Home;
