import React, {useEffect} from 'react';
import { useAuthContext } from '../../contexts/authContext';


const Logout = () => {
    const { logout } = useAuthContext();
    useEffect(() => {
        logout()
    })
    return (
        <div>
            LOGOUT
        </div>
    );
}

export default Logout;
