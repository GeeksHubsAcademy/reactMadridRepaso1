
import React from 'react';
import { Clicker } from '../../common/Clicker/Clicker';
import './Login.css';

export const Login = () => {

    return (
        <div className='loginDesign'>
            login
            <Clicker destination={"Register"} path={"/register"} />
        </div>
    );
};