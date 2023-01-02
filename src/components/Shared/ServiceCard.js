import React from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, img, details, price, rating, _id } = service;
    return (
        <div className="card bg-neutral shadow-xl">
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} className="w-full h-72" alt="" />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details.slice(0, 100) + '...'}</p>
                {price && <p className='text-2xl text-primary font-bold'>$ {price}</p>}
                {rating &&
                    <div className='card-actions justify-start'>
                        <div className="badge badge-outline">Ratings: {rating}</div>
                    </div>
                }
                <div className="card-actions justify-end">
                    <Link to={`/services/${_id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;