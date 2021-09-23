import React from 'react'
import { Link } from 'react-router-dom';
import ninja from '../../assets/ninja.png'
import { WilderInterface } from "../../types/interfaces"

const WilderProfile = (props: WilderInterface): JSX.Element => {

    return (
        <div className="wilder-profile">
            <Link to={`/wilders/${props._id}`}>
                <div className="card">
                    <img src={ninja} className="profile-pic" alt="Jane Doe Profile" />
                    <h3>{props.name}</h3>
                </div>
            </Link>
        </div>
    )
}

export default WilderProfile