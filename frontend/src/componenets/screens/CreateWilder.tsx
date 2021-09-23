import { useState } from "react";
import { useHistory } from "react-router";
import { WilderInterface } from "../../types/interfaces"

const defaultWilder: WilderInterface = { name: '', city: '' }

const CreateWilder = (): JSX.Element => {

    const [wilder, setWilder]: [WilderInterface, Function] = useState<WilderInterface>(defaultWilder);
    const [error, setError]: [string, Function] = useState<string>('');
    const [pending, setPending]: [boolean, Function] = useState<boolean>(false);
    const history = useHistory()

    const handleSubmit = (e: React.FocusEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setPending(true)
        fetch('http://localhost:5000/api/wilders/', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(wilder)
        })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not create wilder')
                }
                return res.json();
            })
            .then(data => {
                setError('');
                setPending(false)
                setWilder(defaultWilder);
                history.push('/')
            })
            .catch(err => {
                setPending(false)
                setError(err.message || 'Error occured, please try again')
            })

    }

    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Wilder name:</label>
                <input
                    type="text"
                    required
                    value={wilder.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>
                    ): void => setWilder({ ...wilder, name: e.target.value })}
                />
                <label>City :</label>
                <input
                    type="text"
                    required
                    value={wilder.city}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>
                    ): void => setWilder({ ...wilder, city: e.target.value })}
                />




                <button>Add Wilder</button>
                <div>
                    {error !== '' && <span className="feedback">{error}</span>}
                    {pending && <span className="feedback">'In progress...'</span>}
                </div>

            </form>
        </div>
    );

}

export default CreateWilder;