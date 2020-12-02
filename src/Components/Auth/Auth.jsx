import React, {useState} from 'react';
import './Auth.css';
import TokenContext from '../../Contexts/TokenContext'
import {Button} from "reactstrap"
import { Redirect, useLocation, useHistory } from 'react-router-dom';

const Auth = (props) => {
    console.log(props);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [login, setLogin] = useState(true);

    let tokenContext = React.useContext(TokenContext)
    let location = useLocation()
    let history = useHistory();

    console.log("auth context", tokenContext)

    const handleSubmit = (event) => {
        event.preventDefault();


        const url = login ? 'http://localhost:4001/user/login' : 'http://localhost:4001/user/register';

        const bodyObj = login ? {
            email: email,
            password: password
        } : {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
        }

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(bodyObj)
        })
        .then(res => res.json())
        .then(data => {
            tokenContext.setToken(data.token);
            localStorage.setItem('sessionToken', data.token);

            history.push('/search')
        })
    }

    const handleLogout = () => {
        console.log('location', location)
        if (location.pathname === '/logout') {
            tokenContext.setToken('');
            localStorage.setItem('sessionToken', '');
        }
    }

    const title = () => {
        return login ? 'Login' : 'Signup';
    }

    const loginToggle = (event) => {
        event.preventDefault();
        setLogin(!login);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
    }

    const signupFields = () => {
        return !login ? (
            <div>
                <p>If you already have an account click the Login/Signup button to go the Login page!</p>
                <label htmlFor="firstName">First Name</label>
                <br/>
                <input 
                type="text"
                id="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                />
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <br/>
                <input 
                type="text"
                id="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                />
            </div>
        ) : null
    }

    return (
        <div className="wrap">
            <div className="clearFix"></div>
        <div>
            {
                handleLogout()
            }
            <form onSubmit={handleSubmit}>
                <h1>{title()}</h1>
                {signupFields()}
                <label htmlFor="email">Email:</label>
                <br/>
                <input type="text" id="email"
                value={email} placeholder="email@email.com" onChange={(event) => {
                    console.log(event)
                    setEmail(event.target.value);
                }} />
                <br/>
                <label htmlFor="password">Password:</label>
                <br/>
                <input
                type="password"
                id="password"
                value={password}
                placeholder="password"
                onChange={(event) => {
                    // console.log(event.target.value)
                    setPassword(event.target.value)
                }}
                />

                <br/>

                <br/>
                <button type="submit">Submit User Data</button>
                <br/>
                <br/>
                <br />
                <Button className="authButton" onClick={loginToggle}>Login/Signup</Button>
                {/* <button onClick={loginToggle}>Login/Signup</button> */}
                <br />
                 {/* <Button className="authButton" type="submit">Submit User Data</Button>
                <button type="submit">Submit User Data</button>
                <br />
                <br />
                <button onClick={loginToggle}>Login/Signup</button>
                <br />
                <br />
                <button type="submit">Submit User Data</button> */}
            </form>
            <div className="clearFix"></div>

        </div>
        </div>
    );
};

export default Auth;




