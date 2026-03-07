import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HostVans(){
    const [hostVans, setHostVans] = useState([])

    useEffect(() => {
        const fetchHostVans = async () => {
            try {
                const response = await fetch('/api/host/vans')
                const data = await response.json()

                setHostVans(data.vans)

            } catch (error) {
                console.error(error)
            }
        }

        fetchHostVans()
    }, [])

    return (
        <>
            <section className='flex flex-col'>
                <h1 className='mx-10 text-4xl'>Your listed vans</h1>
                {hostVans.map((van) => {
                    return(
                        <Link to={`/host/vans/${van.id}`}>
                            <div className='flex justify-start items-center p-5 m-5 rounded bg-white'>
                                <img className='object-contain w-48' src={van.imageUrl} />
                                <div className='p-5'>
                                    <h2>{van.name}</h2>
                                    <h2 className='opacity-50'>{van.price}</h2>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </section>
        </>
    )
}