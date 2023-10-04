import axios from 'axios';
import { useQuery } from 'react-query';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import Loading from '../components/Loading/Loading';

function AuthRoute({ element }) {
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];

    const authenticateState = useQuery(["authenticate"], authenticate, {
        retry: 0
    });

    if(authenticateState.isLoading) {
        console.log("로딩 중...");
        return <Loading />;
    }

    if(authenticateState.isError) {
        for(let path of permitAllPath) {
            if(pathname.startsWith(path)) {
                return element;
            }
        }
        return <Navigate to={"/accounts/login"}/>;
    }

    for(let path of permitAllPath) {
        if(pathname.startsWith(path)) {
            return <Navigate to={"/"}/>;
        }
    }

    return element;
}

export default AuthRoute;