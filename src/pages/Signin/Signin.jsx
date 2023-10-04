import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { useNavigate } from 'react-router-dom';
import { signin } from '../../apis/api/account';
import { useQueryClient } from 'react-query';
import axios from 'axios';

function Signin() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const emptyAccount = {
        phoneOrEmailOrUsername: "",
        loginPassword: ""
    }

    const [ account, setAccount ] = useState(emptyAccount);
    const [ isAccountValuesEmpty, setIsAccountValuesEmpty ] = useState(true);
    const [ errorMsg, setErrorMsg ] = useState("");

    const changeAccount = (name, value) => {
        setAccount({
            ...account,
            [name]: value
        });
    }

    useEffect(() => {
        setIsAccountValuesEmpty(Object.values(account).includes(""))
    }, [account])

    const handleSigninSubmit = async () => {
        try {
            const response = await signin(account);
            localStorage.setItem("accessToken", "Bearer " + response.data);
            window.location.reload();
        } catch(error) {
            setErrorMsg(error.response.data.errorMessage);
        }
    }

    return (
        <SignInAndUpLayout>
            <Top>
                <div>
                    <Input placeholder={"전화번호, 사용자이름 또는 이메일"} name={"phoneOrEmailOrUsername"} changeAccount={changeAccount}/>
                    <Input placeholder={"비밀번호"} type={"password"} name={"loginPassword"} changeAccount={changeAccount}/>
                    <button onClick={handleSigninSubmit} disabled={isAccountValuesEmpty}>로그인</button>
                    <OrBar />
                    <div>
                        kakao로 로그인
                    </div>
                    <div>
                        {errorMsg}
                    </div>
                </div>
            </Top>
        </SignInAndUpLayout>
    );
}

export default Signin;