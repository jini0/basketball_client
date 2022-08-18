import React from 'react';
import './Member.css';

const Login = () => {
    return (
        <div id='LoginContent'>
            <h2>DB PROMY</h2>
            <form id="inputs">
                <i className="material-icons">account_circle</i><input type="text" placeholder='ID' name='c_id'
                onChange="" value=""/>
                <i className="material-icons">vpn_key</i><input type="password" placeholder='PASSWORD' name='c_password'
                onChange="" value="" />
                <ul>
                    <li>회원가입</li>
                    <li>ID/PW 찾기</li>
                 </ul>
                 <button type='submit'>LOGIN</button>
                 {/* <button type='submit' onClick={onClickLogin}>LOGIN</button> */}
            </form>
        </div>
    );
};

export default Login;