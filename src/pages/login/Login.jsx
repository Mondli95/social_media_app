import { Link } from 'react-router-dom';
import './login.scss';
import { useContext } from 'react';
import { AuthenticationContext } from '../../context/authenticationContext';

const Login = () => {
    const { login } = useContext(AuthenticationContext);

    const handleLogin = () => {
        login();
    }

    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>Hello! Welcome</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
                        ipsam itaque voluptas voluptates totam fuga recusandae doloribus
                        velit fugit, dolorem id optio odit rerum iusto cumque provident
                    </p>
                    <span>Don't you have an account?</span>
                    <Link to={'/register'}>
                        <button>Register</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Login</h1>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button onClick={handleLogin}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
