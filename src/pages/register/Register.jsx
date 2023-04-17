import { Link } from 'react-router-dom';
import './register.scss';

const Register = () => {
    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>Mondli social</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
                        ipsam itaque voluptas voluptates totam fuga recusandae doloribus
                        velit fugit, dolorem id optio odit rerum iusto cumque provident
                    </p>
                    <span>Do you have an account?</span>
                    <Link to={'/login'}>
                        <button>Login</button>
                    </Link>
                </div>
                <div className="right">
                    <h1>Register</h1>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="email" placeholder='Email' />
                        <input type="password" placeholder='Password' />
                        <input type="name" placeholder='Name' />
                        <button>Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
