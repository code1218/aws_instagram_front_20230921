import React, { useEffect, useState } from 'react';
import SignInAndUpLayout from '../../components/Layouts/SignInAndUpLayout/SignInAndUpLayout';
import Top from '../../components/Layouts/SignInAndUpLayout/Top/Top';
import Input from '../../components/Layouts/SignInAndUpLayout/Input/Input';
import OrBar from '../../components/Layouts/SignInAndUpLayout/OrBar/OrBar';
import { signup } from '../../apis/api/account';
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const navigate = useNavigate();

    const emptyAccount = {
        phoneAndEmail: "",
        name: "",
        username: "",
        password: ""
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

    const handleSignupSubmit = async () => {
        try{
            const response = await signup(account);
            navigate("/accounts/login");

        } catch(error) {
            const responseErrorMsg = error.response.data;
            const keys = Object.keys(responseErrorMsg);

            if(keys.includes("username")) {
                setErrorMsg(responseErrorMsg.username);
            }else if(keys.includes("phoneAndEmail")) {
                setErrorMsg(responseErrorMsg.phoneAndEmail);
            }else if(keys.includes("name")) {
                setErrorMsg(responseErrorMsg.name);
            }else if(keys.includes("password")) {
                setErrorMsg(responseErrorMsg.password);
            }
        }
    }

    return (
        <SignInAndUpLayout>
            <Top>
                <div>
                    <div>
                        친구들의 사진과 동영상을 보려면 가입하세요.
                    </div>
                    <button>
                        Kakao로 로그인
                    </button>
                    <OrBar />
                    <Input placeholder={"휴대폰 번호 또는 이메일 주소"} name={"phoneAndEmail"} changeAccount={changeAccount} />
                    <Input placeholder={"성명"} name={"name"} changeAccount={changeAccount} />
                    <Input placeholder={"사용자 이름"} name={"username"} changeAccount={changeAccount} />
                    <Input type={"password"} placeholder={"비밀번호"} name={"password"} changeAccount={changeAccount} />
                    <button onClick={handleSignupSubmit} disabled={isAccountValuesEmpty}>
                        가입
                    </button>
                    <div>
                        {errorMsg}
                    </div>
                </div>
            </Top>

        </SignInAndUpLayout>
    );
}

export default Signup;