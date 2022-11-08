import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, details, price, rating, _id } = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 100) + '...'}</p>
                <p className='text-2xl text-primary font-bold'>$ {price}</p>
                <div className='card-actions justify-start'>
                    <div className="badge badge-outline">Ratings: {rating}</div>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;