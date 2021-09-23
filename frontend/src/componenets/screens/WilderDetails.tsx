import React, { useState, useEffect } from 'react'
import axios from "axios";
import { useParams } from 'react-router'
import { useHistory } from 'react-router';
import { WilderInterface } from "../../types/interfaces"
import ninja from '../../assets/ninja.png'

const WilderDetails = (): JSX.Element => {
    const { id } = useParams<{ id?: string }>()
    const history = useHistory()
    const [wilder, setWilder]: [WilderInterface | null, Function] = useState<WilderInterface | null>(null);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    //fetch one wilder
    const fetchOneWilder = async (): Promise<void> => {
        try {
            const result = await axios("http://localhost:5000/api/wilders/" + id);
            setError(null)
            setWilder(result.data);
            setIsPending(false)
        } catch (error) {
            setIsPending(false)
            console.log(error)
        }
    };

    useEffect((): void => {
        fetchOneWilder();
    }, []);

    // delete wilder
    const handleDelete = () => {
        fetch('http://localhost:5000/api/wilders/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }
    return (
        <div className="wilder-details">
            <div className="container">
                {error &&
                    <span className="feedback">
                        {error}
                    </span>
                }
                {isPending &&
                    <span className="feedback">
                        Loading...
                    </span>
                }
                {wilder && (
                    <div className="card">
                        <img src={ninja} className="profile-pic" alt="Jane Doe Profile" />
                        <h3>{wilder.name}</h3>
                        <p>{wilder.city}</p>
                        <button onClick={handleDelete}>delete</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default WilderDetails
