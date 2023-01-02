import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../contexts/AuthProvider';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { createUser, updateUser, sigInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const from = location.state?.from?.pathname || '/';

    const handleSignUp = data => {
        const image = data.photo[0]
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const photo = imgData.data.url
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            handleUpdateUser(data.name, photo);
                            const currentUser = {
                                email: user.email
                            }
                            fetch('https://gallery-of-memories-server.vercel.app/jwt', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(currentUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    localStorage.setItem('token', data.token);
                                    navigate(from, { replace: true });
                                })
                            toast.success('Sign up Successful!', {
                                position: "top-center",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            });

                        })
                        .catch(error => { console.log(error) });
                }

            })

    }

    const handleUpdateUser = (name, photo) => {
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUser(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    const handleGoogleSignin = () => {
        sigInWithGoogle()
            .then(result => {
                const user = result.user;
                const currentUser = {
                    email: user.email
                }

                fetch('https://gallery-of-memories-server.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(e => console.error(e))
    }

    return (
        <div className="hero min-h-screen bg-[url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
            <HelmetProvider>
                <Helmet>
                    <title>Register - Gallery of Memories</title>
                </Helmet>
            </HelmetProvider>
            <ToastContainer />
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left mb-2 text-primary bg-base-100 p-4 rounded-lg">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleSignUp)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input {...register("photo")} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email")} type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password")} type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className="label text-sm flex justify-center">
                        <Link to="/login" className="link link-hover">Or log in, if you already have an account</Link>
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

export default Register;