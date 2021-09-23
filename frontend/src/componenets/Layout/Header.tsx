import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <nav className="navbar">
            <Link to="/">
                <h1>Wild School</h1>
            </Link>

            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: 'white',
                    backgroundColor: '#F76C6C',
                    borderRadius: '8px'
                }}>New Wilder</Link>
            </div>
        </nav>
    )
}

export default Header