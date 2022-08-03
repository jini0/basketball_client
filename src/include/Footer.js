import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div id='footer'>
            <section className='footer_top'>
                <div className='inner'>
                    <div><Link to="/"><img src="images/DB_logo2.png" alt="하단로고" /></Link></div>
                    <div className='footer_text'>
                        <p>주소: 서울시 강남구 테헤란로 432 DB금융센터 (11층, 대치동, DB금융센터) ｜ 대표전화: 02-3011-3176 ｜ 팩스번호: 0505-181-0092</p>
                        <p>홈경기장 - 서울사무실: (02)3011-3177 ｜ 원주사무실: (033)764-3015</p>
                    </div>
                </div>
            </section>
            <section className='footer_bot'>
                <div className='inner'>
                    <ul>
                        <li>이용약관</li>
                        <li>개인정보취급방침</li>
                        <li>게시판운영정책</li>
                        <li>이메일주소무단수집거부</li>
                        <li>개인정보 수집 및 이용</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Footer;