import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from 'react-hook-form';

const CustomService = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const handleCutsomService = data => {
        const titleService = data.title;
        const img = data.photo[0]
        const formData = new FormData();
        formData.append('image', img);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const custom = {
                        title: `${data.title} - Custom`,
                        img: imgData.data.url,
                        details: `${data.details} - requested by ${user?.displayName}`,
                    }
                    fetch('https://gallery-of-memories-server.vercel.app/services', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(custom)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast.success(`${titleService} is added successfully`);
                            }
                        })
                }
            })

    }

    return (
        <div className="hero min-h-screen bg-[url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
            <HelmetProvider>
                <Helmet>
                    <title>Custom - Gallery of Memories</title>
                </Helmet>
            </HelmetProvider>
            <ToastContainer />
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left text-primary bg-base-100 p-4 rounded-lg">
                    <h1 className="text-5xl font-bold">Add your own service!</h1>
                    <p className="py-6">You can specify the details of your custom service here(price not included, that will be decided through a meeting)</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(handleCutsomService)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input {...register("title")} type="text" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input {...register("photo")} type="file" className="file-input file-input-bordered file-input-primary w-full max-w-xs" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details </span>
                            </label>
                            <textarea {...register("details")} type="text" placeholder="details" className="input input-bordered leading-normal resize-none w-full h-20" required />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Submit Your Request</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomService;