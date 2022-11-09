import React, { useContext, useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../contexts/AuthProvider';
import CommentOptions from '../Shared/CommentOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserReviews = () => {
    const { user, logOut } = useContext(AuthContext);
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
                    toast.success('Review Deleted Successfully!', {
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

    const handleUpdate = (id, event) => {
        event.preventDefault();
        const form = event.target;
        const comment = form.comment.value;
        fetch(`http://localhost:5000/comments/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ comment })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Review Updated Successfully!', {
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

    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => setComments(data))
    }, [user?.email, comments, logOut])

    return (

        <div className='min-h-screen'>
            <HelmetProvider>
                <Helmet>
                    <title>User Reviews - Gallery of Memories</title>
                </Helmet>
            </HelmetProvider>
            <ToastContainer />
            {comments.length !== 0 ?
                comments.map(comment => <CommentOptions key={comment._id} comments={comment} handleDelete={handleDelete} handleUpdate={handleUpdate}></CommentOptions>)
                :
                <h2 className='text-3xl text-center mt-6'>No reviews were added</h2>
            }
        </div>
    );
};

export default UserReviews;