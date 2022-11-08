import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import Comments from '../Shared/Comments';

const UserReviews = () => {
    const { user } = useContext(AuthContext);
    const [comments, setComments] = useState([])
    console.log(comments);

    useEffect(() => {
        fetch(`http://localhost:5000/comments?email=${user.email}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [user?.email])

    return (

        <div>
            {

                comments.map(comment => <Comments key={comment._id} comments={comment}></Comments>)
            }
        </div>
    );
};

export default UserReviews;