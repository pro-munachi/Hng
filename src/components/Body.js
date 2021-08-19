import React from 'react'
import './body.css'

const Body = () => {

    const name = 'Madu Stanley Munachiso'
    const role = 'Frontend Web Developer'

    return (
        <div className='container'>
                <img className='container-image' src='/Images/muna.jpg' alt='muna'/>
            <div className='text'>
                <h1>{name}</h1>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default Body
