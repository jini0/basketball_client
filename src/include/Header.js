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
                        <li><Link to="/login">Login</Link></li>
                        <li>Join</li>
                        {/* <li><FontAwesomeIcon icon="fa-brands fa-facebook" /></li> */}
                        <li className='snsIcon'><a href='https://www.instagram.com/dbpromy_official/' target="_blank" rel="noopener noreferrer"><BsInstagram /></a></li>
                        <li className='snsIcon'><a href="https://www.youtube.com/channel/UCugMqpcZRShKcIzDVjS8uxg" target="_blank" rel="noopener noreferrer"><BsYoutube /></a></li>
                        <li className='snsIcon'><a href='https://www.facebook.com/dbpromybasketball' target="_blank" rel="noopener noreferrer"><BsFacebook /></a></li>
                        <li className='snsIcon'><a href='https://m.post.naver.com/my.nhn?memberNo=34663910' target="_blank" rel="noopener noreferrer"><SiNaver /></a></li>
                    </ul>
                </div>
            </div>
            <nav id='gnb'>
                <div className='inner'>
                    <ul>
                        <li class="menuList">
                            <h3><Link to="/intro">PROMY</Link></h3>
                            <ul class="hideMenu">
                                <li><Link to="/intro">소개·인사말</Link></li>
                                {/* <li>프론트·조직</li> */}
                                <li><Link to="/emblem">엠블럼·CI</Link></li>
                                <li><Link to="/sponser">스폰서</Link></li>
                                <li><Link to="/stadium">구장안내</Link></li>
                            </ul>
                        </li>
                        <li class="menuList">
                            <h3><Link to="/notice">NEWS</Link></h3>
                            <ul class="hideMenu">
                                <li><Link to="/notice">공지사항</Link></li>
                                <li><Link to="/news">뉴스</Link></li>
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
                            <h3><Link to="/youtube">FAN</Link></h3>
                            <ul class="hideMenu">
                                <li><Link to="/youtube">DB Youtube</Link></li>
                                <li><Link to="/photo">DB photo</Link></li>
                                <li><a href='https://kbl.or.kr/fan/kblpoll' target="_blank" rel="noopener noreferrer">KBL Polls</a></li>
                                <li><a href='https://kbl.or.kr/fan/kblchallenge' target="_blank" rel="noopener noreferrer">KBL Challenge</a></li>
                                <li><a href='https://kbl.or.kr/fan/kbldraw' target="_blank" rel="noopener noreferrer">KBL Draw</a></li>
                            </ul>
                        </li>
                        <li class="menuList">
                            {/* <h3><Link to="/event?etc1=I">EVENT</Link></h3>
                            <ul class="hideMenu">
                                <li><Link to="/event?etc1=I">이벤트</Link></li>
                            </ul> */}
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
                            <h3><Link to="/product">STORE</Link></h3>
                            <ul class="hideMenu">
                                <li><Link to="/product">DB Store</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;