import { useState, useEffect } from 'react'
import { useParams, Link, Outlet, NavLink } from 'react-router-dom'

export default function HostVanLayout(){
    const params = useParams()
    const [hostVanDetails, setHostVanDetails ] = useState(null)

    useEffect(() => {
        const fetchVan = async () => {
            const response = await fetch(`/api/host/vans/${params.id}`)
            const data = await response.json()
            setHostVanDetails(data.vans[0])
        }
        fetchVan()
    }, [params.id])

    if (!hostVanDetails) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <Link
                to=".."
                relative='path'
                className="m-5 text-xl"
            >&larr; <span>Back to all vans</span></Link>
            <section className='flex flex-col m-5  '>
                <div className='flex gap-4 p-4 items-center'>
                    <img className='object-contain w-80' src={hostVanDetails.imageUrl} />
                    <div>
                        <div className='bg-orange-500 rounded text-center w-20 mb-4'>{hostVanDetails.type.charAt(0).toUpperCase() + hostVanDetails.type.slice(1)}</div>
                        <h1 className='text-3xl'>{hostVanDetails.name}</h1>
                        <h2 className='text-xl'>${hostVanDetails.price}<span className='opacity-60'>/day</span></h2>
                    </div>
                </div>
            </section>
            <div className="nav-bar">
                <NavLink 
                    to='.'
                    end
                    className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    Details
                </NavLink>

                <NavLink 
                    to='pricing'
                    className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    Pricing
                </NavLink>

                <NavLink 
                to='photos'
                className={({isActive}) => isActive ? 'font-bold underline' : null} 
                >
                    Photos
                </NavLink>

            </div>
            <Outlet context={hostVanDetails} />
        </>
    )
}