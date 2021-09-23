import React from 'react'
import { Link } from 'react-router-dom';
import surprised from '../../assets/surprised.png'

const NotFound = () => {
    return (
        <div className="container not-found">
            <img src={surprised} alt="oops" />
            <h2>Sorry</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage...</Link>
        </div>


    )
}

export default NotFound
