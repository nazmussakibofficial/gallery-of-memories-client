import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Blog = () => {
    return (
        <div className="container flex justify-center bg-cover bg-[url('https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
            <HelmetProvider>
                <Helmet>
                    <title>Blog - Gallery of Memories</title>
                </Helmet>
            </HelmetProvider>
            <div className='w-3/4 min-h-screen py-16'>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                    <div className="collapse-title text-xl font-medium">
                        Difference between SQL and NoSQL
                    </div>
                    <div className="collapse-content">
                        <p>The main difference between SQL and NoSQL is that SQL is structured query language and on the other hand NoSQL is no declatarative query language but they are both used as DBMS,
                            SQL is used for storing table based relational databases and NoSQL is used for storing document based non-relational databases.

                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                    <div className="collapse-title text-xl font-medium">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>JWT stands for JSON Web Token. It is used mainly to secure transmissions between two parties and it is mainly used for authorization purposes. After getting request from client,
                            JWT creates and sends a token to the client which is stored on client side and after that if client is authorized to get the data then server will send those data</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mb-6">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content">
                        <p>The main difference between javascript and NodeJS is that javascript is browser's runtime environment and NodeJS is server-side runtime environment so javascript is mainly
                            used for front-end development and NodeJS is used for back-end development.
                        </p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <p>NodeJS handles mutiple requests using Non-Blocking I/O event loop.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;