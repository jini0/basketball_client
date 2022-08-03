import React, { useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MainPage = () => {
    useEffect(()=>{
        // 변수
        const schedule = document.querySelector('.schedule');
        const ranking = document.querySelector('.ranking');
        const gameSchedule = document.querySelector('#game_schedule');
        const gameRanking = document.querySelector('#game_ranking');

        // addEventListener 이벤트 추가
        schedule.addEventListener('click',()=>{
            schedule.classList.add('active');
            ranking.classList.remove('active');
            gameSchedule.style.opacity = 1;
            gameRanking.style.opacity = 0;
        })
        ranking.addEventListener('click',()=>{
            ranking.classList.add('active');
            schedule.classList.remove('active');
            gameRanking.style.opacity = 1;
            gameSchedule.style.opacity = 0;
        })
    // eslint-disable-next-line
    },[]);

    return (
        <div id="mainPage">
            <div id='mainSlide'>
                <div id='mainImg'>
                    <img src="images/mainSlide_1.png" alt="메인슬라이드1_1" className='hidden_slide'/>
                    {/* <img src="images/DB_main_slide_3.png" alt="메인슬라이드1_1" className='hidden_slide'/> */}
                    <img src="images/mainSlide_1.png" alt="메인슬라이드1" className='slide' />
                </div>
                <div id='mainText'>
                    <div className='seasonText'>
                        {/* <img src='images/mainFlag.png' alt='메인'/> */}
                        <h3>2021-2022 SEASON</h3>
                    </div>
                    <h1>팬 여러분 감사합니다.</h1>
                    <p>
                        2021-2022 시즌은 코로나 상황 속에서도 팬 여러분의 관심과 응원 덕분에<br />
                        새로운 도약의 가능성을 보여준 시즌이었으며,<br/>
                        차기 시즌 더 높은 목표에 도달하도록 최선을 다해 준비하겠습니다.<br/>
                        다시 한 번 팬 여러분께 진심으로 감사드립니다.
                    </p>
                </div>
            </div>
            <section id='main_columns'>
                <div className='inner'>
                    <div id='column_left'>
                        <div className='left_text'>
                            <h2>DB PROMY</h2>
                            <p>2022-2023시즌에 <br/>더 좋은 모습으로 찾아뵙겠습니다.</p>
                            <div className='left_img'>
                                <img src='images/mascot-db_1.png' alt='마스코트1'/>
                                {/* <img src='images/mascot-db_2.png' alt='마스코트2'/> */}
                            </div>
                        </div>
                        <div>
                            {/* <img src='images/main_column1.png' alt='KBL_STORE'/> */}
                            <img src='images/DB_store1.png' alt='KBL_CHALLENGE'/>
                            <img src='images/main_column2.png' alt='KBL_CHALLENGE'/>
                        </div>
                    </div>
                    <div id='column_mid'>
                        <div id='mid_top'>
                            <span>NEWS</span>
                            <span>more</span>
                            <ul>
                                <li>
                                    <p>에르난데스 영입…재계약한 프리먼과 호흡</p>
                                    <span>2022-07-28</span>
                                </li>
                                <li>
                                    <p>10월15일 개막…원주서 해 넘기는 '농구영신' 개최</p>
                                    <span>2022-07-14</span>
                                </li>
                                <li>
                                    <p>아시아쿼터 이선 알바노 영입</p>
                                    <span>2022-07-06</span>
                                </li>
                            </ul>
                        </div>
                        <div id='mid_bot'>
                            <span>NOTICE</span>
                            <span>more</span>
                            <ul>
                            <li>
                                    <p>원주DB, 22-23시즌 업무 대행사 선정공고(이벤트,장치장식물,온라인마케팅)</p>
                                    <span>2022-06-12</span>
                                </li>
                                <li>
                                    <p>트레이너 채용 공고 안내</p>
                                    <span>2022-05-10</span>
                                </li>
                                <li>
                                    <p>프로스포츠 관람권 지원사업 7회차</p>
                                    <span>2022-03-29</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id='column_right'>
                        <ul>
                            <li className='schedule active'>경기일정</li>
                            <li className='ranking'>팀 순위</li>
                        </ul>
                        {/* 경기일정 클릭시 */}
                        <div id='game_schedule'>
                            <div id='schedule_detail'>
                                <div id='date'>
                                    22.10.09 ~ 22.10.15
                                </div>
                                <div id='arrow'>
                                    <ul>
                                        <li><IoIosArrowBack/></li>
                                        <li><IoIosArrowForward/></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='sehedule_con'>
                                <ul>
                                    <li>
                                        <div className='game_desc'>
                                            <span>22.10.15 토</span>
                                            <span>00:00 고양실내</span>
                                        </div>
                                        <div className='game_team'>
                                            <i className='icon_emblem'><p>고양 오리온</p></i>
                                            <div className='vs'>vs</div>
                                            <i className='icon_emblem'><p>원주 DB</p></i>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* 팀순위 클릭시 */}
                        <div id='game_ranking'></div>
                    </div>
                </div>
            </section>
            <section id='main_movie_clips'>
                <div className='inner'>
                    <h2>DB PROMY YOUTUBE</h2>
                    <div>
                    {/* 항목들 슬라이드로 할거임! */}
                        <ul>
                            <li>
                                <div className='main_index'>
                                    <img src='images/youtube_1.png' alt='유튜브화면1' />
                                    <div className='main_index_text'>
                                        <h4>소중한 땀방울이 모인 DB프로미의 러브하우스🏡</h4>
                                        <span>2022-07-13</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='main_index'>
                                    <img src='images/youtube_2.png' alt='유튜브화면2' />
                                    <div className='main_index_text'>
                                        <h4>모든 것을 파헤쳐 보자! Welcome Back 두경민의 100문 100답💯</h4>
                                        <span>2022-06-24</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='main_index'>
                                    <img src='images/youtube_3.png' alt='유튜브화면3' />
                                    <div className='main_index_text'>
                                        <h4>휴가 끝! 새로운 시작!☀ 선수단 소집 그리고 체력 테스트 현장🔥</h4>
                                        <span>2022-06-10</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id='main_hot_photo'>
                <h2>HOT PHOTO</h2>
                <div>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </section>
            <section id='main_banner_bottom'>

            </section>
        </div>
    );
};

export default MainPage;