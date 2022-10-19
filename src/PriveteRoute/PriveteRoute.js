import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../UserForm/UserContext";



const PriveteRoute = ({ children }) => {
    const { user, lodding } = useContext(AuthContext)
    const location = useLocation()

    if (lodding) {
        return <div className="flex items-center justify-center mt-[200px] space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-violet-400"></div>
        </div>
    }

    if (user && user.uid) {
        return children
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
}

export default PriveteRoute;