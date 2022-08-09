import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { SiNaver } from 'react-icons/si';
import { Link } from 'react-router-dom';

const Header = () => {
    // //header 메뉴(nav/gnb) 스크롤시 부드럽게 
    // useEffect(()=>{
    //     const signNav = document.querySelector('#sign_nav');
    //     window.addEventListener('scroll',()=>{
    //         console.log(window.scrollY);
    //         if(window.scrollY < 1){
    //             signNav.classList.remove('on');
    //         }else if(window.scrollY < 100){
    //             signNav.style.top = `${100-window.scrollY}px`;
    //             signNav.classList.add('on');
    //         }else {
    //             signNav.style.top = `0`;
    //         }
    //     })
    // // eslint-disable-next-line
    // },[])
    return (
        <div id="header">
            <div id='sign_nav'>
                <div className='inner'>
                    <ul>
                        <li>Login</li>
                        <li>Join</li>
                        {/* <li><FontAwesomeIcon icon="fa-brands fa-facebook" /></li> */}
                        <li className='snsIcon'><a href='https://www.instagram.com/dbpromy_official/'><BsInstagram /></a></li>
                        <li className='snsIcon'><a href="https://www.youtube.com/channel/UCugMqpcZRShKcIzDVjS8uxg"><BsYoutube /></a></li>
                        <li className='snsIcon'><a href='https://www.facebook.com/dbpromybasketball'><BsFacebook /></a></li>
                        <li className='snsIcon'><a href='https://m.post.naver.com/my.nhn?memberNo=34663910'><SiNaver /></a></li>
                    </ul>
                </div>
            </div>
            <nav id='gnb'>
                <div className='inner'>
                    <ul>
                        <li class="menuList">
                            <h3>PROMY</h3>
                            <ul class="hideMenu">
                                <li>소개·인사말</li>
                                <li>프론트·조직</li>
                                <li>엠블럼·CI</li>
                                <li>스폰서</li>
                                <li>구장안내 </li>
                            </ul>
                        </li>
                        <li class="menuList">
                            <h3>NEWS</h3>
                            <ul class="hideMenu">
                                <li>공지사항</li>
                                <li>뉴스</li>
                            </ul>
                        </li>
                        <li class="menuList">
                            <h3><Link to="/player">TEAM</Link></h3>
                            <ul class="hideMenu">
                                <li><Link to="/player">선수</Link></li>
                                <li><Link to="/coach">코칭스태프</Link></li>
                                <li><Link to="/staff">지원스태프</Link></li>
                                <li><Link to="/cheerleading">응원단</Link></li>
                            </ul>
                        </li>
                        <li class="menuList">
                            <h3>GAME·STATS</h3>
                            <ul class="hideMenu">
                                <li>일정 및 결과</li>
                                <li>팀 순위</li>
                                <li>선수 순위</li>
                            </ul>
                        </li>
                        <li><Link to="/"><img src="images/DB_logo1.png" alt="원주DB로고" /></Link></li>
                        <li class="menuList">
                            <h3>FAN</h3>
                            <ul class="hideMenu">
                                <li>DB Youtube</li>
                                <li>DB photo</li>
                                <li>KBL Polls</li>
                                <li>KBL Challenge</li>
                                <li>KBL Draw</li>
                            </ul>
                        </li>
                        <li class="menuList">
                            <h3><Link to="/event">EVENT</Link></h3>
                            <ul class="hideMenu">
                                <li><Link to="/event">이벤트</Link></li>
                            </ul>
                        </li>
                        <li class="menuList">
                            <h3>TICKET</h3>
                            <ul class="hideMenu">
                                <li>예매하기</li>
                                <li>티켓가격</li>
                                <li>티켓 안내사항</li>
                            </ul>
                        </li>
                        <li class="menuList">
                            <h3>STORE</h3>
                            <ul class="hideMenu">
                                <li>DB Store</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;