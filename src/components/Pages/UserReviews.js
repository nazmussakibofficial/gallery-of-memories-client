import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import CommentOptions from '../Shared/CommentOptions';

const UserReviews = () => {
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([])
    const handleDelete = id => {
        fetch(`http://localhost:5000/comments/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = comments.filter(comment => comment._id !== id)
                    setComments(remaining)
                }
            })
    }

    const handleUpdate = (id, event) => {
        event.preventDefault();
        const form = event.target;
        const details = form.details.value;
        console.log(id)
        fetch(`http://localhost:5000/comments/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ details })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }

    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user.email}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [user?.email, comments])

    return (

        <div className='min-h-screen'>
            {comments.length !== 0 ?
                comments.map(comment => <CommentOptions key={comment._id} comments={comment} handleDelete={handleDelete} handleUpdate={handleUpdate}></CommentOptions>)
                :
                <h2 className='text-3xl text-center mt-6'>No reviews were added</h2>
            }
        </div>
    );
};

export default UserReviews;