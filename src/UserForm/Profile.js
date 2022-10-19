import React, { useContext } from 'react';
import { AuthContext } from './UserContext';

const Profile = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
    }
    return (
        <div>
            {
                user?.uid && <button onClick={handleLogOut}>LogOUt</button>
            }
        </div>
    );
};

export default Profile;