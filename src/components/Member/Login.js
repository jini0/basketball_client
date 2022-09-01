import React from 'react';
import { Link } from 'react-router-dom';
import './Member.css';

const Login = () => {
    return (
        <div id='loginContent'>
            {/* <div className='login_background'></div> */}
            <div className='inner'>
                <div className='login_width'>
                    <img src="images/db_login_logo.png" alt="원주db프로미" />
                    <h4>DB프로미에 오신것을 환영합니다.</h4>
                    <p>DB 프로미 내 모든 서비스를 이용할 수 있습니다.</p>
                    <form className="login_inputs">
                        <div className='inputs'>
                            <input type="text" placeholder='아이디를 입력해주세요.' name='c_id'/>
                            <input type="password" placeholder='비밀번호를 입력해주세요.' name='c_password' />
                        </div>
                        <div className='clear'>
                            <p>비밀번호 찾기</p>
                        </div>
                        <ul>
                            <li><button type='submit'>LOGIN</button></li>
                            <li><Link to="/join"><button type='submit'>JOIN</button></Link></li>
                        </ul>
                        {/* <button type='submit' onClick={onClickLogin}>LOGIN</button> */}
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;