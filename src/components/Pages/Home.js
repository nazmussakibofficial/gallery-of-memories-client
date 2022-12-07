import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';
import img1 from '../../img/img1.jpg'
import img2 from '../../img/img2.jpg'
import img3 from '../../img/img3.jpg'


const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>Home - Gallery of Memories</title>
                </Helmet>
            </HelmetProvider>
            <div className='flex justify-center'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} className="w-full" alt='' />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-16 px-4'>
                <h1 className='text-4xl font-bold text-primary text-center mb-6 p-4'>Why Should You Use Our Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="card bg-neutral">
                        <div className="card-body">
                            <h2 className="card-title">Expert Photographers</h2>
                            <p>Our photograpgers are fully trained for all services.</p>
                        </div>
                    </div>
                    <div className="card bg-neutral">
                        <div className="card-body">
                            <h2 className="card-title">Advanced Equipments and tools</h2>
                            <p>We have high end professional cameras and tools in our inventory.</p>
                        </div>
                    </div>
                    <div className="card bg-neutral">
                        <div className="card-body">
                            <h2 className="card-title">Available for night photoshoots also</h2>
                            <p>We have equipments ready for night photoshoots.</p>
                        </div>
                    </div>
                    <div className="card bg-neutral">
                        <div className="card-body">
                            <h2 className="card-title">Different services to choose from</h2>
                            <p>We have a wide range of services and you can also request for custom services.</p>
                        </div>
                    </div>
                </div>
                <h1 className='text-4xl font-bold text-primary text-center my-6 p-4'>Meet Our Best</h1>
                <div className='flex flex-col md:flex-row'>
                    <div className="card lg:card-side bg-base-100">
                        <figure><img src="https://images.unsplash.com/photo-1661347333292-b783583d4210?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Alexander</h2>
                            <p>Wedding Photographer</p>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100">
                        <figure><img src="https://images.unsplash.com/photo-1495745966610-2a67f2297e5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Daniel</h2>
                            <p>Event Photographer</p>
                        </div>
                    </div>
                    <div className="card lg:card-side bg-base-100">
                        <figure><img src="https://images.unsplash.com/photo-1521856729154-7118f7181af9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Hailey</h2>
                            <p>Night Photoshoot Expert</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-16 px-4'>
                <h1 className='text-4xl font-bold text-primary text-center mb-6 p-4'>Our Services</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='flex justify-center mt-6'>
                    <Link to='/services'><button className='btn btn-wide btn-primary'>See All</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Home;