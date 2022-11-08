import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {!loading ?
                <div className='container mx-auto py-16 px-4'>
                    <HelmetProvider>
                        <Helmet>
                            <title>Services - Gallery of Memories</title>
                        </Helmet>
                    </HelmetProvider>
                    <h1 className='text-4xl font-bold text-primary text-center mb-6 p-4'>Our Services</h1>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                        {
                            services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                        }
                    </div>
                </div>
                :
                <div className='flex justify-center my-6'>
                    <button className="btn loading">loading</button>
                </div>
            }
        </div>
    );
};

export default Services;