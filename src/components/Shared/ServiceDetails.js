import React, { useContext, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import Comments from './Comments';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext)
    const [comments, setComments] = useState([]);
    const service = useLoaderData();
    const { title, img, details, price, _id } = service

    useEffect(() => {
        fetch(`http://localhost:5000/comments/${_id}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [_id, comments])

    const handleComment = event => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        const name = user?.displayName;
        const photo = user?.photoURL;
        const email = user?.email;

        const commentObj = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            photo,
            comment
        }
        fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentObj)
        })
    }

    return (
        <div className='container mx-auto py-16 px-4'>
            <HelmetProvider>
                <Helmet>
                    <title>Service Details - Gallery of Memories</title>
                </Helmet>
            </HelmetProvider>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        {price && <p className='text-2xl text-primary font-bold'>$ {price}</p>}
                    </div>
                </div>
            </div>
            {
                comments.map(comment => <Comments key={comment._id} comments={comment}></Comments>)
            }

            {
                user?.uid ?
                    <div className="flex mx-auto items-center justify-center shadow-lg mt-6 mb-4 w-full">
                        <form onSubmit={handleComment} className="w-full bg-white rounded-lg px-4 pt-2">
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <h2 className="px-4 pt-3 pb-2 text-gray-800 text-lg">Add a new comment</h2>
                                <div className="w-full md:w-full px-3 mb-2 mt-2">
                                    <textarea className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white text-gray-700" name="comment" placeholder='Type Your Comment' required></textarea>
                                </div>
                                <div className="w-full md:w-full flex items-start px-3">
                                    <div className="-mr-1">
                                        <input type='submit' className="bg-white text-gray-700 font-medium py-1 px-4 border border-gray-400 rounded-lg tracking-wide mr-1 hover:bg-gray-100" value='Post Comment' />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    :

                    <h2 className='text-3xl text-center mt-6'>Please <Link to="/login" className="link link-hover">Login</Link> to add a review</h2>
            }

        </div>
    );
};

export default ServiceDetails;