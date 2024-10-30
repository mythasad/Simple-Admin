import { useState } from 'react' 

const SignUp = () => {
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('') 
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if(!username || !password){
      setErrorMessage('Username & Password are required.')
      return
    }
    try {
      const response = await fetch('http://localhost:1234/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      }) 
      const data = await response.json() 
      if (response.ok) {
        setSuccessMessage('User created successfully.')
        setUsername('')
        setPassword('')
      } else {
        setErrorMessage(data.message || 'Sign-up failed.')
      }
    } catch (error) {
      console.error('Error:', error)
      setErrorMessage("An error occurred during sign-up")
      
    }
  } 

  return (
    <form onSubmit={handleSubmit}>
      
      <fieldset>
        <legend>
          Sign Up for a new Account. 
        </legend>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>} {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <button type="submit">Sign Up</button>
      </fieldset>

      
    </form>
  ) 
} 

export default SignUp 
