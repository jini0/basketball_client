import React from 'react';
import './Team.css';

const PlayerDetail = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>선수</h3>
                <p>화끈한 공격! 열정적 수비! DB선수들을 소개합니다.</p>
            </div>
            <div className='playerDetailWrap inner'>
                <div className='detailBox'>
                    <div className='detailInfoWrap'>
                        <div className='detailInfo1'>
                            <p>NO.7</p>
                            <p>김현호</p>
                            <p>GUARD</p>
                        </div>
                        <div className='detailInfo2'>
                            <p><strong>생년월일</strong> : <span>1988.03.19</span></p>
                            <p><strong>신장 / 체중</strong> : <span>184cm</span></p>
                            <p><strong>출신교</strong> : <span>연세대</span></p>
                        </div>
                    </div>
                    <div className='detailInfo3'>
                        <img src='images/player_7.png' alt='김현호선수'/>
                    </div>
                </div>
                <ul className='detailInfo4'>
                    <li>2021 ~ 2022시즌</li>
                    <li>
                        <div>
                            <p>평균 득점</p>
                            <p><strong>4.3</strong>점</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>평균 리바운드</p>
                            <p><strong>1.1</strong>개</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>평균 어시스트</p>
                            <p><strong>1.0</strong>개</p>
                        </div>
                    </li>
                </ul>
                <div className='playerScore'>
                    <h3>올시즌 정규경기 시즌기록</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>구분</th>
                                <th>경기수</th>
                                <th>시간</th>
                                <th>득점</th>
                                <th>필드골(%)</th>
                                <th>3점슛(%)</th>
                                <th>자유투(%)</th>
                                <th>공격리바운드</th>
                                <th>수비리바운드</th>
                                <th>어시스트</th>
                                <th>스틸</th>
                                <th>블록</th>
                                <th>턴오버</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>평균기록</td>
                                <td>11</td>
                                <td>12'44"</td>
                                <td>4.3</td>
                                <td>26.3%</td>
                                <td>45.8%</td>
                                <td>100.0%</td>
                                <td>0.3</td>
                                <td>0.8</td>
                                <td>1.0</td>
                                <td>0.4</td>
                                <td>0.0</td>
                                <td>0.7</td>
                            </tr>
                            <tr>
                                <td>최고기록</td>
                                <td></td>
                                <td>16'11"</td>
                                <td>14</td>
                                <td>66.7%</td>
                                <td>100.0%</td>
                                <td>100.0%</td>
                                <td>1</td>
                                <td>3</td>
                                <td>4</td>
                                <td>1</td>
                                <td>0.0</td>
                                <td>0.0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PlayerDetail;