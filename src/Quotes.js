import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Quotes.css"
import Logo from "./assets/logo.jpg"

function Quotes() {
    const [quotes, setQuotes] = useState([])
    useEffect(() => {
        fetch("https://www.breakingbadapi.com/api/quotes")
            .then(res => res.json())
            .then(data => setQuotes(data))
    }, [])
  return (
    <div className='quotes'>
        <div className='navbar'>
            <Link to='/'><img src={Logo} alt='logo' /></Link>
            <h1>Famous Quotes</h1>
        </div>
        <div className='quotes-container'>
            {quotes.map(quote => (
                <div key={quote.quote_id}>
                    <div className='quote'>
                        <h3>"{quote.quote}"</h3>
                        <h4>- {quote.author}</h4>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Quotes