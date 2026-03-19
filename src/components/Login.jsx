import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [err, setErr] = useState('')
    const navigate = useNavigate()


    function loginHandler(e) {
        e.preventDefault()
        if (email === 'sajad@gmail.com' && pass === '123') {
            navigate('/dashboard')
        } else {
            setErr(<p>wrong credentials</p>)
        }
    }

    return (
        <form action="">
            Email: <input value={email} name='email' onChange={(e) => setEmail(e.target.value)} type="email" />
            <br />
            Password: <input onChange={(e) => setPass(e.target.value)} value={pass} name='password' type="password" />
            <br />
            <button onClick={loginHandler}>Login</button>
            {err}
            {email} {pass}
            <p>Don't have an account? <a href="" onClick={() => navigate('/register')}>register</a></p>
        </form>
    )
}

export default Login