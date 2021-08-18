import React from 'react'
import './body.css'

const Body = () => {

    const name = 'Madu Stanley Munachiso'
    const role = 'Frontend Web Developer'

    return (
        <div className='container'>
                
            <div className='text'>
                <h1>{name}</h1>
                <p>{role}</p>
            </div>
        </div>
    )
}

export default Body
