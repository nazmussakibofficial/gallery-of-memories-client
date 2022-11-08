import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceCard from '../Shared/ServiceCard';

const Services = () => {
    const services = useLoaderData();
    return (
        <div className='container mx-auto py-16 px-4'>
            <h1 className='text-4xl font-bold text-primary text-center mb-6 p-4'>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;