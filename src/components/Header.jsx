import React from "react"
import { Link } from 'react-router-dom';
export default function  Header(){
    return (
        <header>
        <div className='flex justify-between items-center p-4 w-screen'>
            <div>
                <Link className="site-logo" to="/">#VanLife</Link>
            </div>
            <div className='flex flex-wrap gap-6'> 
                <Link to="/host">Host</Link>
                <Link to='/vans'>Vans</Link>
                <Link to="/about">About</Link> 
            </div>
        </div>
        </header>
    )
}