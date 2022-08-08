import React from 'react';

const Coach = () => {
    return (
        <div className='teamTab'>
           <div className='teamHeader'>
                <h3>코칭 스태프</h3>
                <p>DB프로미의 브레인 코칭스태프들을 소개합니다.</p>
            </div> 
            <div className='coach inner'>
                <div id='director'>
                    <div className='coachProfile'>
                        <div>
                            <div>
                                <p>이상범 감독</p>
                                <p>Head Coach</p>
                                <p>Lee Sang-beom</p>
                            </div>
                            <h4>기본정보</h4>
                            <ul>
                                <li><span>생년월일</span> : 1969.03.08</li>
                                <li><span>신장 / 체중</span> : 188cm / 88kg</li>
                                <li><span>출신교</span> : 연세대</li>
                            </ul>
                        </div>
                        <div>
                            <h4>주요경력</h4>
                            <ul>
                                <li><span>2000 ~ 2009</span> 안양 KT&G카이츠 코치</li>
                                <li><span>2009 ~ 2014</span> 안양 KGC인삼공사 감독</li>
                                <li><span>2013</span> 제27회 FIBA 아시아 남자농구선수권대회 국가대표팀 코치</li>
                                <li><span>2014</span> 세계 남자 농구월드컵 국가대표팀 코치</li>
                                <li><span>2014</span> 제17회 인천 아시안게임 남자농구 국가대표팀 코치</li>
                                <li><span>2017 ~</span> 원주DB프로미 감독</li>
                            </ul>
                        </div>
                    </div>
                    <div className='coachImg'>
                        <img src='images/dbno1.png' alt='이상범감독님'/>
                    </div>
                </div>
                <div id='coaches'>
                    <ul className='coach_list'>
                        <li>
                            <div className='coachProfile'>
                                <div className='coachImg'>
                                    <img src='images/sungcoach.png' alt='김성철코치'/>
                                </div>
                                <div className='coachProfile'>
                                    <div>
                                        <div>
                                            <p>김성철 수석코치</p>
                                            <p>Assistant Coach</p>
                                            <p>Kim Sung-chul</p>
                                        </div>
                                        <h4>기본정보</h4>
                                        <ul>
                                            <li><span>생년월일</span> : 1976.05.14</li>
                                            <li><span>신장 / 체중</span> : 195cm / 90kg</li>
                                            <li><span>출신교</span> : 경희대</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>주요경력</h4>
                                        <ul>
                                            <li><span>2005 ~ 2006</span> 안양 KT&G 카이츠 선수</li>
                                            <li><span>2006 ~ 2009</span> 인천 전자랜드 엘레펀츠 선수</li>
                                            <li><span>2009 ~ 2013</span> 안양 KGC 인삼공사 선수</li>
                                            <li><span>2013</span> 안양 KGC 인삼공사 코치</li>
                                            <li><span>2014</span> 경희대학교 농구부 코치</li>
                                            <li><span>2014</span> 미국연수:NBA D리그 노던 애리조나 선수 코치</li>
                                            <li><span>2017 ~</span> 원주 DB프로미 코치</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='coachProfile'>
                                <div className='coachImg'>
                                    <img src='images/joocoach.png' alt='김주성코치'/>
                                </div>
                                <div className='coachProfile'>
                                    <div>
                                        <div>
                                            <p>김주성 코치</p>
                                            <p>Assistant Coach</p>
                                            <p>Kim Ju-sung</p>
                                        </div>
                                        <h4>기본정보</h4>
                                        <ul>
                                            <li><span>생년월일</span> : 1979.11.09</li>
                                            <li><span>신장 / 체중</span> : 205cm / 79kg</li>
                                            <li><span>출신교</span> : 중앙대</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>주요경력</h4>
                                        <ul>
                                            <li><span>2002</span> TG 삼보 엑써스 선수</li>
                                            <li><span>2005 ~ 2017</span> 원주 동부 프로미 선수</li>
                                            <li><span>2017 ~ 2018</span> 원주 DB프로미 선수</li>
                                            <li><span>2019 ~</span> 원주 DB프로미 코치</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='coachProfile'>
                                <div className='coachImg'>
                                    <img src='images/leecoach.png' alt='이광재코치'/>
                                </div>
                                <div className='coachProfile'>
                                    <div>
                                        <div>
                                            <p>이광재 코치</p>
                                            <p>Assistant Coach</p>
                                            <p>Lee Kwang-jae</p>
                                        </div>
                                        <h4>기본정보</h4>
                                        <ul>
                                            <li><span>생년월일</span> : 1984.04.21</li>
                                            <li><span>신장 / 체중</span> : 187cm / 82kg</li>
                                            <li><span>출신교</span> : 연세대</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4>주요경력</h4>
                                        <ul>
                                            <li><span>2007 ~ 2014</span> 원주 동부프로미 선수</li>
                                            <li><span>2014 ~ 2018</span> 부산 KT소닉붐 선수</li>
                                            <li><span>2018 ~ 2019</span> 원주 DB프로미 선수</li>
                                            <li><span>2019</span> 연세대학교 농구부 코치</li>
                                            <li><span>2019 ~ 2020</span> 상무농구단 코치</li>
                                            <li><span>2021</span> 안양고등학교 농구부 코치</li>
                                            <li><span>2021 ~</span> 원주 DB프로미 코치</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Coach;