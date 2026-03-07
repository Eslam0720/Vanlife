import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
    const currentVan = useOutletContext()
    return (
        <>
            <section className="p-6 flex flex-col gap-4 ">
                <h4><span className="font-bold">Name:</span> {currentVan.name} </h4>
                <h4><span className="font-bold">Category:</span> {currentVan.type} </h4>
                <h4><span className="font-bold">Description:</span> {currentVan.description} </h4>
                <h4><span className="font-bold">Visibility:</span> Public </h4>
            </section>
        </>
    )
}