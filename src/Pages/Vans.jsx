import React, { useState, useEffect } from "react"

function Vans() {

    const [vans, setVans] = useState([])

    useEffect(() => {
        const fetchVans = async () => {
            try {
                const response = await fetch('/api/vans')
                const data = await response.json()

                if (data.vans && data.vans.length > 0) {
                    setVans(data.vans)
                }

                console.log(data)

            } catch (error) {
                console.error(error)
            }
        }

        fetchVans()
    }, [])

    useEffect(() => {
        console.log(vans)
    }, [vans])

    return (
        <>
            <h1 className="text-center m-3 mb-5 text-bold text-3xl">Explore our van options</h1>
            <div className="grid grid-cols-2 gap-2 justify-items-center h-screen w-screen">
                {vans.map ((van) => {
                        return(
                            <div key={van.id} className="border-b p-2 rounded-xl m-2 text-center text-2xl">
                        <img className="object-contain w-160 h-100 " src={van.imageUrl} />
                        <div className="van-info flex justify-between mx-30 mt-4 mb-8">
                        <h3>{van.name}</h3>
                        <p>${van.price}<span>/day</span></p>
                        </div>
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        </div>
                        )
                    })}
            </div>
        </>
    )
}

export default Vans