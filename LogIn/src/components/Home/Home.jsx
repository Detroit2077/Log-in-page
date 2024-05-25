import React from "react"
import { useLocation } from "react-router-dom"


export default function Home() {

    const location = useLocation()

    return (
        <>
            <div className="bg-gray-400 text-white font-sans font-bold rounded-2xl">
                {location.state.id} Say Hello to the world of discipline
            </div>
        </>
    )
}