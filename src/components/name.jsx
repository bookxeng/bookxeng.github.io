import React from "react";

const Name = () =>{
    return(
        <div name="name" className=" w-full h-screen bg-black">
            <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full space-y-4 text-gray-50">
                <p className="font-semibold">
                    Hi my name is
                </p>
                <h1 className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#005aa7] to-[#fffde4] text-5xl leading-loose">
                    Pongnapat Limmongkolhirun
                </h1>
                <p className="font-semibold text-gray-50">
                    Student at KMITL Dual degree
                </p>
            </div>
        </div>
    )
}

export default Name;