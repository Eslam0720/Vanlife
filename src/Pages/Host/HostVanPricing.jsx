import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const currentVan = useOutletContext()
    return (
        <h2 className="text-3xl">${currentVan.price}<span className="opacity-70">/day</span></h2>
    )
}