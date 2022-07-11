import { useState } from 'react';
import "./Newsletter.scss";
import { Button } from "../Button/Button";

const subscribeToNewsletter = (email) => {
    const url = 'https://adchitects-cms.herokuapp.com/newsletter';
    const username = 'adchitects';
    const password = 'jsrulezzz';
    const headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
    headers.append('Content-Type', 'application/json')
    return fetch(url, { method: 'POST', headers, body: JSON.stringify({ email }) }).then(response => {
        if (response.status === 200) {
            return response.json().then(data => ({ message: data.message, status: 'success'}))
        }
        if (response.status === 400) {
            return response.json().then(data => ({ message: data.message, status: 'fail'}))
        }
        throw new Error('Response not ok')
    })
}

export function Newsletter () {
    const [email, setEmail] = useState('');
    const [ status, setStatus ] = useState(null);
    const [error, setError] = useState(null);
    const handleSubmit = (event ) => {
        event.preventDefault();
        subscribeToNewsletter(email).then(setStatus).catch(setError);
    }
    return (
        <div className="newsletter">
            <h2 className="newsletter__header">
                Sign up for Newsletter
            </h2>
            <form className="newsletter__form" onSubmit={handleSubmit}>
                <input placeholder="Place your email" type="text" value={email} onChange={event => setEmail(event.target.value)} />
                <Button label="Submit" />
            </form>
            {status !== null ? status.status === 'success' ? <p className="newsletter__subscribe-success">{status.message}</p> : <p className="newsletter__subscribe-error">{status.message}</p> : null}
            {error !== null ? <p className="newsletter__subscribe-error">Error</p> : null}
        </div>
    )
}