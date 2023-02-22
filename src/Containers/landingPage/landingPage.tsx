import React from "react";
import { useParams } from "react-router-dom";

interface LandingParams {
    name?: string;
}

export default function LandingPage() {
    let params: LandingParams = useParams();
    console.log("HELLO!")
    console.log("your name is" + params.name)
    return (
        <div>
            <div className="font-semibold text-5xl dark:text-white m-auto absolute left-20 top-1/2"><h1 className="mr-2">Welcome, {params.name ? params.name : "user"}</h1></div>
            <div className="w-full h-full absolute top-0 left-0 -z-10 ">
                <img src="/assets/pexels-alexander-isreb-1797428.jpg" alt="A person walking through a storage room" className="object-cover w-full h-full opacity-50" />
            </div>
        </div>
    );
}