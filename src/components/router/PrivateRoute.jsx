import {LOGIN} from "../../config/paths";
import {Navigate, Outlet} from "react-router-dom";
import {useAuthContext} from "../../contexts/authContext";


export default function PrivateRoute () {
    const {isAuthenticated} = useAuthContext();

    if(!isAuthenticated){
        return <Navigate to={LOGIN} />;
    }

    return (
        <div>
            <Outlet />
        </div>
    )
}