import React, { useContext } from 'react';
import { AuthContext } from '../../UserForm/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>
                {
                    user?.email && <p className='text-3xl text-center'>{user?.email}</p>
                }
            </h1>
        </div>
    );
};

export default Header;