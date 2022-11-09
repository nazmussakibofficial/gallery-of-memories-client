import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../contexts/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomService = () => {
    const { user } = useContext(AuthContext);
    const handleCutsomService = event => {
        event.preventDefault();
        const form = event.target;
        const title = `${form.title.value} - Custom`;
        const photo = form.photo.value;
        const details = `${form.details.value} - requested by ${user?.displayName}`;

        const custom = {
            title,
            img: photo,
            details
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(custom)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Custom Service Added Successfully!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
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
                    <form onSubmit={handleCutsomService} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input name='title' type="text" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name='photo' type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details </span>
                            </label>
                            <textarea name='details' type="text" placeholder="details" className="input input-bordered leading-normal resize-none w-full h-20" required />
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