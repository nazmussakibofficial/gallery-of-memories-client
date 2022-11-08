import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './form.css'
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { signIn, sigInWithGoogle } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                form.reset();
            })
            .catch(e => console.error(e))

    }

    const handleGoogleSignin = () => {
        sigInWithGoogle()
            .then(result => { const user = result.user })
            .catch(e => console.error(e))

    }

    return (
        <div className="hero form-body min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-2 text-primary bg-base-100 p-4 rounded-lg">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className="label px-3 text-sm">
                        <Link to="/register" className="link link-hover">Or register here, if you don't have an account</Link>
                    </div>
                    <h1 className='text-lg text-center'>--------Or--------</h1>
                    <div className="form-control mb-4">
                        <button onClick={handleGoogleSignin} className="btn btn-ghost"><FaGoogle className='mr-2'></FaGoogle> Login with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;