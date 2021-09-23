import React, { useState, useEffect } from 'react'
import axios from "axios";
import { WilderInterface } from '../types/interfaces'
import WilderProfile from './screens/WilderProfile';





const Main = (): JSX.Element => {
    const [wilders, setWilders]: [WilderInterface[], Function] = useState<WilderInterface[]>([]);
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    const fetchWilders = async (): Promise<void> => {
        try {
            const result = await axios("http://localhost:5000/api/wilders");
            setError(null)
            setWilders(result.data.result);
            setIsPending(false)
        } catch (error) {
            setIsPending(false)
            console.log(error)
        }
    };

    useEffect((): void => {
        fetchWilders();
    }, []);

    return (
        <div className="main">
            <div className="container-title"><h1>Our super students</h1></div>
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

                {wilders &&
                    <div className="card-row">
                        {
                            wilders.map((wilder: WilderInterface): JSX.Element => (
                                <WilderProfile {...wilder} key={wilder._id}></WilderProfile>
                            ))
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export default Main
