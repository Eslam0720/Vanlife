
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function VanDetail() {
    const params = useParams()
    const [van, setVan] = useState(null)

    useEffect(() => {
            const fetchVanDetails = async () => {
                const response = await fetch(`/api/vans/${params.id}`)
                const data = await response.json()
                if (data.vans) {
                    setVan(data.vans)
                }

            
            }
            fetchVanDetails();
        }, [params.id])
    


    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    <img className="object-contain w-600 h-300" src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}