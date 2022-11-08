import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, details, price, rating } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 100) + '...'}</p>
                <p className='text-2xl text-primary font-bold'>$ {price}</p>
                <div className='card-actions justify-start'>
                    <div className="badge badge-outline">Ratings: {rating}</div>
                </div>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;