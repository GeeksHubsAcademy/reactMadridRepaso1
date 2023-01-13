
import React from 'react';
import { Clicker } from '../../common/Clicker/Clicker';
import './Home.css';

export const Home = () => {

    return (
        <div className='homeDesign'>
            home
            <Clicker destination={"Login"} path={"/login"} />
        </div>
    );
};