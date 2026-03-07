import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function HostLayout(){
    return(

        <>
            <div className="nav-bar">
                <NavLink 
                    to='.'
                    end
                    className={({isActive}) => isActive ? 'font-bold underline' : null}
                >
                    Dashboard
                </NavLink>

                <NavLink 
                    to='income'
                    className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    Income
                </NavLink>

                <NavLink 
                    to='vans'
                    className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    Vans
                </NavLink>

                <NavLink 
                to='reviews'
                className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    Reviews
                </NavLink>

            </div>
            <Outlet></Outlet>
        </>
    )
}