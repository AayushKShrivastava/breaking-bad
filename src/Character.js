import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Character.css"

function Character({id, img, name, birthday, occupation, nickName, actor, series, seasons}) {
    const navigate = useNavigate()
    //console.log(id)
  return (
    <div 
        className='character' 
        onClick={() => navigate('/character-info', {
            state:{
                id: id,
                name: name, 
                series:  series,
                seasons: seasons,
                birthday: birthday, 
                img: img, 
                occupation: occupation, 
                nickName: nickName, 
                actor: actor
            }
        })}
    >
        <img src={img} alt={name}/>
        <h2>{name}</h2>
    </div>
  )
}

export default Character