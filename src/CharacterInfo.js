import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import "./CharacterInfo.css"
import Logo from "./assets/logo.jpg"
import { Link } from 'react-router-dom'
import {nanoid} from 'nanoid'

function CharacterInfo() {
    const location = useLocation()
    const [quotes, setQuotes] = useState([])
    const [deaths, setDeaths] = useState([])
    useEffect(() => {
        fetch(`https://www.breakingbadapi.com/api/quotes/${location.state.id}`)
            .then(res => res.json())
            .then(data => setQuotes(data))

        fetch(`https://www.breakingbadapi.com/api/deaths`)
            .then(res => res.json())
            .then(data => setDeaths(data))
    }, [])

    let count = 0;
  return (
    <div className='characterInfo'>
        <div className='navbar'>
            <Link to='/'><img src={Logo} alt='logo' /></Link>
            <h1>{location.state.name}</h1>
        </div>
        <div className='container'>
            <img src={location.state.img} alt="" />
            <div className='info'>
                <p>
                    <strong>{location.state.name}</strong>, also known as <strong>{location.state.nickName}</strong> is a {location.state.occupation[0]}. {location.state.nickName} appeared in the season {location.state.seasons.map(season => <>{season}, </> )} of the <strong>{location.state.series}</strong> series. The character has been played by <strong>{location.state.actor}</strong>.
                </p>
                <div className='quotes'>
                    <h2>Famous Dialogue</h2>
                    {quotes.map(quote => (
                        <div key={quote.quote_id}>
                            <p>{quote.quote}</p>
                            <hr />
                        </div>
                    ))}   
                </div>
                <div className='death'>
                    <h2>People Killed by {location.state.nickName}</h2>
                    <ul>
                        {deaths.map(death => {
                            if(death.responsible === location.state.name){
                                count++;
                                return(
                                    <li key={death.death_id}>{death.death}</li>
                                )
                            }
                        })}  
                    </ul>
                    {!count && "None"}
                     {}
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CharacterInfo