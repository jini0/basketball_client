import React from 'react';
import './Team.css';

const Cheer = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>응원단</h3>
                <p>DB프로미 선수들과 함께 승리를 부르는 응원단을 소개합니다.</p>
            </div> 
            <div className='cheer'>
                <div className='cheerleading inner'>
                    <div className='cheer_Captain'>
                        <div>
                            <img src="images/cheerleading_captain.png"  alt="응원단장" />
                        </div>
                        <div className='cheer_text'>
                            <p><span>박민수</span> 응원단장</p>
                            <p><span>생년월일</span> : 1993년 5월 22일</p>
                        </div>
                    </div>
                    <div className='cheer_announcer'>
                        <div className='cheer_text'>
                            <p><span>유창근</span> 아나운서</p>
                            <p><span>생년월일</span> : 1980년 6월 12일</p>
                        </div>
                        <div>
                            <img src="images/cheerleading_announcer.png"  alt="아나운서" />
                        </div>
                    </div>
                </div>
                <div className='cheerleaders  inner'>
                    <h3>DB PROMY CHEER LEADER</h3>
                    <p>DB 치어리더를 소개합니다.<br/>
                    항상 열정과 혼신을 다해 선수들을 응원합니다!</p>
                    <div>
                        <ul>
                            <li>
                                <img src="images/cheerleading_1.png" alt="치어리더1"/>
                                <p className='hideName'>김도희</p>
                            </li>
                            <li>
                                <img src="images/cheerleading_2.png" alt="치어리더2"/>
                                <p className='hideName'>유세리</p>
                            </li>
                            <li>
                                <img src="images/cheerleading_3.png" alt="치어리더3"/>
                                <p className='hideName'>차영현</p>
                            </li>
                            <li>
                                <img src="images/cheerleading_4.png" alt="치어리더4"/>
                                <p className='hideName'>원민주</p>
                            </li>
                            <li>
                                <img src="images/cheerleading_5.png" alt="치어리더5"/>
                                <p className='hideName'>정다혜</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <img src="images/cheerleading_6.png" alt="치어리더6"/>
                                <p className='hideName'>최석화</p>
                            </li>
                            <li>
                                <img src="images/cheerleading_7.png" alt="치어리더7"/>
                                <p className='hideName'>이호은</p>
                            </li>
                            <li>
                                <img src="images/cheerleading_8.png" alt="치어리더8"/>
                                <p className='hideName'>이리안</p>
                            </li>
                            <li>
                                <img src="images/cheerleading_9.png" alt="치어리더9"/>
                                <p className='hideName'>심송연</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cheer;