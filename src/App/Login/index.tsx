import React, { useState } from 'react'

const Login: React.FC<{ path: string }> = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <footer className="info">
      <h1>Login</h1>
      <form>
        <input
          placeholder="Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault()
            console.log(`username: ${username}; password: ${password}`)
          }}
        >
          Login
        </button>
      </form>
    </footer>
  )
}

export default Login
