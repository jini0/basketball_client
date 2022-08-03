import React, { useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MainColumn = () => {
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
        </div>
    );
};
export default MainColumn;