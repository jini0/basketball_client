import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    // ✔ 이미지 액박 -> 절대경로로 수정 https://think0wise.tistory.com/21
    // ---> 밑에 img 태그의 src속성에 넣을 것들!!!
    const imgUrlFooter = process.env.PUBLIC_URL+`/images/DB_logo2.png`;  //하단 홈로고 "images/DB_logo2.png"
    const imgInsta = process.env.PUBLIC_URL+`/images/ico_insta.png`; //하단 인스타 "images/ico_insta.png"
    const imgYt = process.env.PUBLIC_URL+`/images/ico_yt.png`;    //하단 유튜브 "images/ico_yt.png"
    const imgFb = process.env.PUBLIC_URL+`/images/ico_fb.png`;    //하단 페이스북 "images/ico_fb.png"
    const imgBlog = process.env.PUBLIC_URL+`/images/ico_naver.png`;  //하단 블로그 "images/ico_naver.png"

    return (
        <div id='footer'>
            <section className='footer_top'>
                <div className='inner'>
                    {/* footer 하단 홈 로고 새로고침 + 페이지이동시, 액박 -> 절대경로로 수정 */}
                    {/* <div><Link to="/"><img src="images/DB_logo2.png" alt="하단로고" /></Link></div> */}
                    <div><Link to="/"><img src={imgUrlFooter} alt="하단로고" /></Link></div>
                    <div className='footer_text'>
                        <p>주소: 서울시 강남구 테헤란로 432 DB금융센터 (11층, 대치동, DB금융센터) ｜ 대표전화: 02-3011-3176 ｜ 팩스번호: 0505-181-0092</p>
                        <p>홈경기장 - 서울사무실: (02)3011-3177 ｜ 원주사무실: (033)764-3015</p>
                    </div>
                    <div className='footer_sns'>
                        <ul>
                            {/* footer SNS 로고들 새로고침 + 페이지이동시, 액박 -> 절대경로로 수정 */}
                            <li>
                                <a href='https://www.instagram.com/dbpromy_official/' target="_blank" rel="noopener noreferrer"><img src={imgInsta} alt="인스타그램"/></a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCugMqpcZRShKcIzDVjS8uxg" target="_blank" rel="noopener noreferrer"><img src={imgYt} alt="유튜브" /></a>
                            </li>
                            <li>
                                <a href='https://www.facebook.com/dbpromybasketball' target="_blank" rel="noopener noreferrer"><img src={imgFb} alt="페이스북" /></a>
                            </li>
                            <li>
                                <a href='https://m.post.naver.com/my.nhn?memberNo=34663910' target="_blank" rel="noopener noreferrer"><img src={imgBlog} alt="네이버블로그" /></a>
                            </li>
                        </ul>
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