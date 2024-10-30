import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import './form.scss'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!username || !password){
            setErrorMessage('Username & Password are required.')
            return
        }
        try {
            const response = await fetch('http://localhost:1234/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                }
            )
            const data = await response.json()
            if (response.ok) {
                localStorage.setItem('token', data.token)
                navigate('/dashboard')
            }
            else {
                setErrorMessage("Wrong Username or Password")
            }   
        } catch (error) {
            console.log('Error', error)
            setErrorMessage('An error occurred during login.')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>
                    User Login
                </legend>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
                <button type="submit">Login</button>
                
            </fieldset>
        </form>
    )
}

export default Login