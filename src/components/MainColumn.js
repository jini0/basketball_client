import React, { useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

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
            gameSchedule.style.display = "block";
            gameRanking.style.display = "none";
        })
        ranking.addEventListener('click',()=>{
            ranking.classList.add('active');
            schedule.classList.remove('active');
            gameRanking.style.display = "block";
            gameSchedule.style.display = "none";
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
                            <Link to="/product"><img src='images/DB_store1.png' alt='KBL_STORE'/></Link>
                            <a href='https://kbl.or.kr/fan/kblchallenge'><img src='images/main_column2.png' alt='KBL_CHALLENGE'/></a>
                        </div>
                    </div>
                    <div id='column_mid'>
                        <div id='mid_top'>
                            <span>NEWS</span>
                            <span><Link to="/news">more</Link></span>
                            <ul>
                                {/* https://beomsoo.me/issue/Issue-4/ */}
                                <li><a href="https://sports.news.naver.com/news?oid=417&aid=0000837363" target="_blank" rel="noopener noreferrer">
                                    <p>에르난데스 영입…재계약한 프리먼과 호흡</p>
                                    <span>2022-07-28</span></a>
                                </li>
                                <li><a href="https://sports.news.naver.com/news?oid=421&aid=0006217698" target="_blank" rel="noopener noreferrer">
                                    <p>10월15일 개막…원주서 해 넘기는 '농구영신' 개최</p>
                                    <span>2022-07-14</span></a>
                                </li>
                                <li><a href="http://www.rookie.co.kr/news/articleView.html?idxno=75803" target="_blank" rel="noopener noreferrer">
                                    <p>‘이제는 DB맨’ 최승욱 “첫 목표는 팀에 필요한 선수 되는 것”</p>
                                    <span>2022-07-11</span></a>
                                </li>
                                {/* <li><a href="https://sports.news.naver.com/news?oid=076&aid=0003889672" target="_blank" rel="noopener noreferrer">
                                    <p>아시아쿼터 이선 알바노 영입</p>
                                    <span>2022-07-06</span></a>
                                </li> */}
                            </ul>
                        </div>
                        <div id='mid_bot'>
                            <span>NOTICE</span>
                            <span><Link to="/notice">more</Link></span>
                            <ul>
                                <li>
                                    <p>2022-2023시즌 티켓 및 좌석 안내</p>
                                    <span>2022-08-22</span>
                                </li>
                                <li>
                                    <p>사과문</p>
                                    <span>2022-06-27</span>
                                </li>
                                <li>
                                    <p>원주DB, 22-23시즌 업무 대행사 선정공고(이벤트,장치장식물,온라인마케팅)</p>
                                    <span>2022-06-12</span>
                                </li>
                                {/* <li>
                                    <p>트레이너 채용 공고 안내</p>
                                    <span>2022-05-10</span>
                                </li>
                                <li>
                                    <p>프로스포츠 관람권 지원사업 7회차</p>
                                    <span>2022-03-29</span>
                                </li> */}
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
                        <div id='game_ranking'>
                            <p>2021-2022시즌</p>
                            <ul>
                                <li>
                                    <span className='rank_top'>1</span>
                                    <i className='icon_emblem emblem_sk'></i>
                                    <span>서울 SK</span>
                                    <ul>
                                        <li>40W</li>
                                        <li>14L</li>
                                        <li>0.741</li>
                                        <li>+0</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='rank_top'>2</span>
                                    <i className='icon_emblem emblem_kt'></i>
                                    <span>수원 KT</span>
                                    <ul>
                                        <li>37W</li>
                                        <li>17L</li>
                                        <li>0.685</li>
                                        <li>+3</li>
                                    </ul>
                                </li>
                                <li>
                                    <span className='rank_top'>3</span>
                                    <i className='icon_emblem emblem_kgc'></i>
                                    <span>안양 KGC</span>
                                    <ul>
                                        <li>32W</li>
                                        <li>22L</li>
                                        <li>0.593</li>
                                        <li>+8</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>4</span>
                                    <i className='icon_emblem emblem_mobis'></i>
                                    <span>울산 현대모비스</span>
                                    <ul>
                                        <li>30W</li>
                                        <li>24L</li>
                                        <li>0.556</li>
                                        <li>+10</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>5</span>
                                    <i className='icon_emblem emblem_orions'></i>
                                    <span>고양 오리온</span>
                                    <ul>
                                        <li>27W</li>
                                        <li>27L</li>
                                        <li>0.500</li>
                                        <li>+13</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>6</span>
                                    <i className='icon_emblem emblem_koreagas'></i>
                                    <span>대구 한국가스공사</span>
                                    <ul>
                                        <li>27W</li>
                                        <li>27L</li>
                                        <li>0.500</li>
                                        <li>+13</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>7</span>
                                    <i className='icon_emblem emblem_lg'></i>
                                    <span>창원 LG</span>
                                    <ul>
                                        <li>24W</li>
                                        <li>30L</li>
                                        <li>0.444</li>
                                        <li>+16</li>
                                    </ul>
                                </li>
                                <li className='db_rank'>
                                    <span>8</span>
                                    <i className='icon_emblem emblem_db'></i>
                                    <span>원주 DB</span>
                                    <ul>
                                        <li>23W</li>
                                        <li>31L</li>
                                        <li>0.426</li>
                                        <li>+17</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>9</span>
                                    <i className='icon_emblem emblem_kcc'></i>
                                    <span>전주 KCC</span>
                                    <ul>
                                        <li>21W</li>
                                        <li>33L</li>
                                        <li>0.389</li>
                                        <li>+19</li>
                                    </ul>
                                </li>
                                <li>
                                    <span>10</span>
                                    <i className='icon_emblem emblem_samsung'></i>
                                    <span>서울 삼성</span>
                                    <ul>
                                        <li>9W</li>
                                        <li>45L</li>
                                        <li>0.167</li>
                                        <li>+31</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default MainColumn;