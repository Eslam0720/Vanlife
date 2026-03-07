import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function HostLayout(){
    return(

        <>
            <div className="flex flex-wrap justify-start items-center gap-4 p-5 mb-4 w-screen [&>a:hover]:underline [&>a:hover]:text-[#161616]">
                <Link to='/host'>Dashboard</Link>
                <Link to='/host/income'>Income</Link>
                <Link to='/host/reviews'>Reviews</Link>
            </div>
            <Outlet></Outlet>
        </>
    )
}