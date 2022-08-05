import React from 'react';
import './Team.css';
const Player = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>선수</h3>
                <p>화끈한 공격! 열정적 수비! DB선수들을 소개합니다.</p>
            </div>
            <div className='teamContent'>
                <div className='playerTab'>
                    <div>
                        <ul className='inner'>
                            <li className='active'>전체</li>
                            <li>가드</li>
                            <li>포워드</li>
                            <li>센터</li>
                            <li>군입대 선수</li>
                        </ul>
                    </div>
                    <div>
                        <div id='guard' className='inner2 position_name'>
                            <h4>GUARD</h4>
                            <ul className='teamList'>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_7.png' alt='김현호선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.7</span>
                                        <p>김현호</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_3.png' alt='두경민선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.3</span>
                                        <p>두경민</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_1.png' alt='박찬희선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.1</span>
                                        <p>박찬희</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_6.png' alt='이민석선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.6</span>
                                        <p>이민석</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_34.png' alt='이준희선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.34</span>
                                        <p>이준희</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_19.png' alt='정호영선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.19</span>
                                        <p>정호영</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div id='foward' className=' inner2 position_name'>
                            <h4>FORWARD</h4>
                            <ul className='teamList'>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_26.png' alt='강상재선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.26</span>
                                        <p>강상재</p>
                                        <span className='position'>FORWARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_35.png' alt='박상권선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.35</span>
                                        <p>박상권</p>
                                        <span className='position'>FORWARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_42.png' alt='윤성원선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.42</span>
                                        <p>윤성원</p>
                                        <span className='position'>FORWARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_13.png' alt='윤호영선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.13</span>
                                        <p>윤호영</p>
                                        <span className='position'>FORWARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_choi.png' alt='최승욱선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.미정</span>
                                        <p>최승욱</p>
                                        <span className='position'>FORWARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_20.png' alt='레너드 프리먼선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.20</span>
                                        <p>레너드 프리먼</p>
                                        <span className='position'>FORWARD</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id='center' className='inner2 position_name'>
                            <h4>CENTER</h4>
                            <ul className='teamList'>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_15.png' alt='김종규선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.15</span>
                                        <p>김종규</p>
                                        <span className='position'>CENTER</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_Hernandez.png' alt='드완 에르난데스선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.미정</span>
                                        <p>드완 에르난데스</p>
                                        <span className='position'>CENTER</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div id='army' className='inner2 position_name'>
                            <h4>ARMY</h4>
                            <ul className='teamList'>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_4.png' alt='서현석선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.4</span>
                                        <p>서현석</p>
                                        <span className='position'>FORWARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_14.png' alt='이윤수선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.14</span>
                                        <p>이윤수</p>
                                        <span className='position'>CENTER</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;