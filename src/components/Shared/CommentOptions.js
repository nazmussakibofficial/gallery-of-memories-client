import React from 'react';

const CommentOptions = ({ comments, handleDelete, handleUpdate }) => {
    const { photo, customer, comment, _id } = comments


    return (
        <div className="flex justify-center relative top-1/3 mt-6">
            <div className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg w-full">
                <div className="relative flex gap-4">
                    <img src={photo} className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy" />
                    <div className="flex flex-col w-full">
                        <div className="flex flex-row justify-between">
                            <p className="relative text-xl whitespace-nowrap truncate overflow-hidden">{customer}</p>
                            <a className="text-gray-500 text-xl" href="#"><i className="fa-solid fa-trash"></i></a>
                        </div>
                        {/* <p className="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p> */}
                    </div>
                </div>
                <p className="-mt-4 text-gray-500">{comment}</p>
                <div className='flex justify-end'>
                    <label htmlFor="my-modal-2" className="btn btn-primary mr-2">Edit</label>
                    <label htmlFor="my-modal" className="btn btn-primary">Delete</label>
                </div>
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure you want to delete?</h3>
                        <div className="modal-action">
                            <label onClick={() => handleDelete(_id)} htmlFor="my-modal" className="btn">Yes</label>
                            <label htmlFor="my-modal" className="btn">No</label>
                        </div>
                    </div>
                </div>
                <input type="checkbox" id="my-modal-2" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg mb-6">Update your comment</h3>
                        <form onSubmit={() => { handleUpdate(_id) }}>
                            <div className='form-control'>
                                <textarea name='details' className="textarea textarea-bordered resize-none w-full h-20" placeholder=""></textarea>
                            </div>
                            <div className='modal-action'>
                                <button type='submit' htmlFor="my-modal-2" className="btn">Save Changes</button>
                                <label htmlFor="my-modal-2" className="btn">Discard</label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CommentOptions;