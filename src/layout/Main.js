import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Shared/Header';
import Footer from '../components/Shared/Footer';

const Main = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <Header></Header>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default Main;