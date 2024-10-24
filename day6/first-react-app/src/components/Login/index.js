import { useState } from "react";
import { CommonButton, CommonContainer, CommonInput, TodoContainer } from "../CommonComponents";
import styled from 'styled-components'
const Box = styled.div`
    margin-top: 10px;
`

// Page: Login
function Login({ setIsLoggedIn }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // library 
    const handleSubmit = (event) => {
        event.preventDefault();
        if (checkValidUser()) {
            return setIsLoggedIn(true) // only run when username and password valid
        }
        setError('User invalid!')
        return
    }

    const checkValidUser = () => {
        return username === 'user' && password === 'pw'
    }

    const handleChangeUsername = (e) => {
        setError('')
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setError('')
        setPassword(e.target.value)
    }
    return <CommonContainer>
        <TodoContainer>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <Box>
                    <CommonInput value={username} onChange={handleChangeUsername} placeholder="username" />
                </Box>
                <Box>
                    <CommonInput type="password" value={password} onChange={handleChangePassword} placeholder="password" />
                </Box>
                <Box>
                    <CommonButton>Login</CommonButton>
                </Box>
                {error && <Box>
                    <p style={{ color: 'red' }}>{error}</p>
                </Box>}
            </form>
        </TodoContainer>
    </CommonContainer>
}

export default Login;
