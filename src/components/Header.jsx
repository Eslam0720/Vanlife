import React from "react"
import { NavLink } from 'react-router-dom';
export default function  Header(){
    return (
        <header>
        <div className='flex justify-between items-center p-4 w-screen'>
            <div>
                <NavLink className="site-logo" to="/">#VanLife</NavLink>
            </div>
            <div className='flex flex-wrap gap-6'> 
                <NavLink 
                    to="/host"
                    className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    Host
                </NavLink>

                <NavLink 
                    to='/vans'
                    className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    Vans
                </NavLink>
                <NavLink 
                    to="/about"
                    className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    About
                </NavLink> 

            </div>
        </div>
        </header>
    )
}