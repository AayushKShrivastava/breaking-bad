import React, {useEffect, useState} from 'react'
import Carousel from "react-elastic-carousel"
import "./Characters.css"
import Character from "./Character"

function Characters() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/characters")
           .then(res => res.json())
           .then(data => setCharacters(data))
    },[])
    const breakpoints = [
        { width: 1, itemsToShow: 1},
        { width: 550, itemsToShow: 3},
        { width: 768, itemsToShow: 4},
        { width: 1200, itemsToShow: 6},
    ]
  return (
    <div className='characters' name='characters'>
        <h2>Characters</h2>
        <Carousel className='carousel' breakPoints={breakpoints} enableMouseSwipe={true}>
            {
                characters.map(character => (
                    <Character 
                        key={character.char_id}
                        seasons={character.appearance}
                        series={character.category}
                        id={character.char_id}
                        birthday={character.birthday}
                        occupation={character.occupation}
                        nickName={character.nickname}
                        actor={character.portrayed}
                        name = {character.name}
                        img = {character.img}
                    />
                ))
            }
        </Carousel>
    </div>
  )
}

export default Characters