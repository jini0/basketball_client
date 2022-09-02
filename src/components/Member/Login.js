import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setCookie } from '../util/cookie';
import { setLogin } from '../modules/logincheck';
import './Member.css';
// import { API_URL } from '../config/contansts';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // 로그인 데이터 상태관리
    const [ loginData, setLoginData ] = useState({  
        userId: "",
        userPass: "",
    })
    const onChange = (e) => {
        const { name, value } = e.target;
        setLoginData ({
            ...loginData,
            [name]: value
        })
    }
    const onLogin = async () => {
        let userId = document.querySelector('#userId');
        const response = await axios.get(`http://localhost:8001/getId/${userId.value}`);
        // const response = await axios.get(`${API_URL}/getId/${userId.value}`);
        const getId = response.data;
        console.log(getId);
        if(getId.length <= 0) {
            alert("등록된 아이디가 없습니다.");
        } 
    }
    const onSubmit = (e) => {
        e.preventDefault();
        // input에 입력했는지 체크
        if(loginData.userId === '' || loginData.userPass === '') {
            alert('아이디와 비밀번호를 입력해주세요');
        } else {
            axios.post('http://localhost:8001/login', loginData)
            // axios.post(`${API_URL}/login`, loginData)
            //로그인 되었을 때,
            .then(result => {  
                let { userid, name } = result.data; //구조분해할당
                console.log(result);

                // userid에 값이 있을 때
                if(userid !== null && userid !== '' && userid !== undefined) {
                    alert('로그인되었습니다.');
                    // expires 쿠키의 지속시간
                    // new Date() : 현재시간 객체를 생성  -> Date객체!✨  / 시간에서 쓸 수 있는 객체들 setMinutes / getMinutes
                    let expires = new Date();
                    // 60분 더한 값으로 변경(로그인 후 60분간 지속되게)
                    expires.setMinutes(expires.getMinutes()+60)
                    setCookie('userId', `${userid}`, {path: '/', expires});
                    setCookie('userName', `${name}`, {path: '/', expires});
                    dispatch(setLogin());
                    // dispatch(goToHome(navigate));
                    navigate('/');
                } else {
                    alert('아이디와 비밀번호를 확인해주세요');
                }
            })
            .catch(e => {
                console.log(e);
                alert('아이디와 비밀번호를 확인해주세요');
            })
        }
    }
    return (
        <div id='loginContent'>
            {/* <div className='login_background'></div> */}
            <div className='inner'>
                <div className='login_width'>
                    <img src="images/db_login_logo.png" alt="원주db프로미" />
                    <h4>DB프로미에 오신것을 환영합니다.</h4>
                    <p>DB 프로미 내 모든 서비스를 이용할 수 있습니다.</p>
                    <form className="login_inputs" onSubmit={onSubmit}>
                        <div className='inputs'>
                            <input type="text" placeholder='아이디를 입력해주세요.' id="userId"
                            name="userId" value={loginData.userId } onChange={onChange}/>
                            <input type="password" placeholder='비밀번호를 입력해주세요.' id='pass' name="userPass" value={loginData.userPass} onChange={onChange} />
                        </div>
                        <div className='clear'>
                            <p>비밀번호 찾기</p>
                        </div>
                        <ul>
                            <li><button type='submit'>LOGIN</button></li>
                            <li><Link to="/join"><button type='submit' onClick = {onLogin}>JOIN</button></Link></li>
                        </ul>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;