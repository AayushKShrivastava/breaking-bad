import React, { useEffect, useState } from 'react'
import './Deaths.css'
import { Link } from 'react-router-dom'
import Logo from "./assets/logo.jpg"


function Deaths() {
    const [deaths, setDeaths] =  useState([])
    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/deaths`)
            .then(res => res.json())
            .then(data => setDeaths(data))
    }, [])
    console.log(deaths)
  return (
    <div className='deaths'>
        <div className='navbar'>
            <Link to='/'><img src={Logo} alt='logo' /></Link>
            <h1>Deaths</h1>
        </div>
        <div className='deaths-container'>
            {deaths.map(death => (
                <div key={death.death_id}>
                    <div className='death-content'>
                        {death.number_of_deaths > 1 && death.number_of_deaths} <strong>{death.death}</strong> {death.number_of_deaths > 1 ? "were":"was"} killed by <strong>{death.responsible}</strong> in episode {death.episode}.
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Deaths