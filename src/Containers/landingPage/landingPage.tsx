import React from "react";

export default function LandingPage() {
    return (
        <div>
            <div className="font-semibold text-5xl dark:text-white m-auto absolute left-20 top-1/2"><h1 className="mr-2">Welcome to Inventory Manager</h1></div>
            <div className="w-full h-full absolute top-0 left-0 -z-10 ">
                <img src="assets/pexels-alexander-isreb-1797428.jpg" alt="A person walking through a storage room" className="object-cover w-full h-full opacity-50" />
            </div>
        </div>
    );
}