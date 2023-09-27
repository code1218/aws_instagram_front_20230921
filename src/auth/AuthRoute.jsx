import { useEffect, useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authenticate } from '../apis/api/account';
import Signin from '../pages/Signin/Signin';

function AuthRoute({ element }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;
    const permitAllPath = ["/accounts"];
    const [ goElement, setGoElement ] = useState(element);

    useEffect(() => {
        authenticate()
        .then(response => {
            for(let path of permitAllPath) {
                if(pathname.startsWith(path)) {
                    setGoElement();
                }
            }
    
            setGoElement(element)
        })
        .catch(error => {
            let flag = false;
            for(let path of permitAllPath) {
                if(pathname.startsWith(path)) {
                    setGoElement(element);
                    flag = true;
                }
            }
            if(!flag) {
                setGoElement(<Signin />)
            }
        });
    }, [goElement])
    
}

export default AuthRoute;