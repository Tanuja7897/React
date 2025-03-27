import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgVideo from "../assets/bgVideo.mp4";

function LogIn() {
    const [data, setData] = useState({ email: "", password: "" });
    const navigate = useNavigate();
    // Mock database credentials
    const defaultData = {
        email: "tanuja@gmail.com",
        password: "1234"
    };

    const handleSubmit = (e) => {
        e.preventDefault();  
        let { email, password } = data;  

        if (email === defaultData.email && password === defaultData.password) {
            navigate("/"); 
        } else {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen max-w-screen overflow-hidden relative">
            
            <video
                src={bgVideo}
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Form Container */}
            <div className="relative z-10 flex justify-center items-center h-screen">
                <div className="
                    shadow-[-4px_4px_10px,-4px_-4px_10px] shadow-black rounded-sm 
                    flex justify-items-start items-center flex-col 
                    h-[70%] w-[60%] gap-[12%] 
                    md:h-[80%] md:w-[30%]
                ">
                    <div className="text-amber-50 mt-[15%]">
                        <h1 className="text-4xl">Login</h1>
                    </div>

                    <div className="button flex flex-col items-center h-[40%] w-[70%] gap-[15%] md:h-[40%] md:w-[60%]">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full h-[40%] rounded-xl border-2 border-amber-50 text-amber-50"
                            onChange={(e) => setData((prev) => ({ ...prev, email: e.target.value }))}
                        />
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full h-[40%] rounded-xl border-2 border-amber-50 shadow-[4px_4px_10px] shadow-amber-50 text-amber-50"
                            onChange={(e) => setData((prev) => ({ ...prev, password: e.target.value }))}
                        />

                        
                        <button
                            className="w-[60%] h-[20%] rounded-xl border-2 border-amber-50 shadow-[4px_4px_10px] shadow-amber-50 text-amber-50 mt-[2%]"
                            onClick={(e) => handleSubmit(e)}  
                        >
                            Log In
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogIn;
