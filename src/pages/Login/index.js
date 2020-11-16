import React, { useState } from 'react';
import { loginUser, useAuthDispatch, useAuthState } from '../../context/';
import styles from './login.module.css';

function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAuthDispatch();
    const { loading, errorMessage } = useAuthState();

    const handleLogin = async e => {
        e.preventDefault();

        try {
            let response = await loginUser(dispatch, { email, password });
            if (!response.user) return;
            props.history.push('/dashboard');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>Login Page</h1>
                {errorMessage ? (
                    <p className={styles.error}>{errorMessage}</p>
                ) : null}
                <form action=''>
                    <div className={styles.loginForm}>
                        <div className={styles.loginFormItem}>
                            <label htmlFor='email'>Username</label>
                            <input
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                type='text'
                                id='email'
                            />
                        </div>
                        <div className={styles.loginFormItem}>
                            <label htmlFor='password'>Password</label>
                            <input
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type='password'
                                id='password'
                            />
                        </div>
                    </div>
                    <button disabled={loading} onClick={handleLogin}>
                        {' '}
                        login{' '}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
