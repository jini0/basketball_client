import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Team.css';
import Loading from '../Loading/Loading';
import { API_URL } from '../config/contansts';

const PlayerDetail = () => {
    // mysql로 데이터 불러오기
    const [ player, setPlayer ] = useState(null);
    const { id } = useParams();             // id값 받아오기(parameter 사용)

    useEffect(()=>{
        // axios.get(`http://localhost:8001/player/${id}`)
        axios.get(`${API_URL}/player/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            // setPlayer(results); 
            setPlayer(results[0]); 
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])
    if(!player) return <div>로딩중입니다...</div>

    // *생년월일 : 8자리 하이픈(-) 붙이기1 
    // function dateFormat(){
    //     // 정규표현식
    //     // - 숫자 8자리 형식으로 된 날자 형식을 년-월-일 형식으로 하이픈(-) 넣어서 보여주는 방법을 정규화로 된 부분입니다.
    // // s = s.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3');
    // }

    // *생년월일 : 8자리 하이픈(-) 붙이기2 
    // function YMDFormatter(num){
    //     if(!num) return "";
    //     var formatNum = '';
        
    //     // 공백제거     
    //     num=num.replace(/\s/gi, "");
        
    //     try{
    //         if(num.length == 8) {
    //             formatNum = num.replace(/(\d{4})(\d{2})(\d{2})/, '$1-$2-$3');
    //         }
    //     } catch(e) {
    //         formatNum = num;console.log(e);
    //     }
    //     return formatNum;
    // }

    if(!player) return <Loading/>
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
                            <p>NO.{player.no}</p>
                            <p>{player.name}</p>
                            <p>{player.position2}</p>
                        </div>
                        <div className='detailInfo2'>
                            <p><strong>생년월일</strong> : <span>{
                            (player.birth).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
                            }</span></p>
                            <p><strong>신장 / 체중</strong> : <span>{player.profile}</span></p>
                            <p><strong>출신교</strong> : <span>{player.school}</span></p>
                        </div>
                    </div>
                    <div className='detailInfo3'>
                        <img src={"../"+player.imgsrc} alt=''/>
                    </div>
                </div>
                <ul className='detailInfo4'>
                    <li>2021 ~ 2022시즌</li>
                    <li>
                        <div>
                            <p>평균 득점</p>
                            <p><strong>{player.aver_score}</strong>점</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>평균 리바운드</p>
                            <p><strong>{parseFloat(Number(player.aver_off)+Number(player.aver_def)).toFixed(1)}</strong>개</p>
                            {/* <p><strong>{Number(player.aver_off)+Number(player.aver_def)}</strong>개</p> */}
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>평균 어시스트</p>
                            <p><strong>{player.aver_ast}</strong>개</p>
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
                                <td>{player.aver_g}</td>
                                <td>{player.aver_min}</td>
                                <td>{player.aver_score}</td>
                                <td>{player.aver_fg}%</td>
                                <td>{player.aver_3p}%</td>
                                <td>{player.aver_ft}%</td>
                                <td>{player.aver_off}</td>
                                <td>{player.aver_def}</td>
                                <td>{player.aver_ast}</td>
                                <td>{player.aver_stl}</td>
                                <td>{player.aver_blk}</td>
                                <td>{player.aver_to}</td>
                            </tr>
                            <tr>
                                <td>최고기록</td>
                                <td>{player.best_g}</td>
                                <td>{player.best_min}</td>
                                <td>{player.best_score}</td>
                                <td>{player.best_fg}%</td>
                                <td>{player.best_3p}%</td>
                                <td>{player.best_ft}%</td>
                                <td>{player.best_off}</td>
                                <td>{player.best_def}</td>
                                <td>{player.best_ast}</td>
                                <td>{player.best_stl}</td>
                                <td>{player.best_blk}</td>
                                <td>{player.best_to}</td>
                            </tr>
                        </tbody>
                    </table>
                    {(player.cf1 !== null || player.cf2 !== null) && 
                        <div className='player_cf'>
                            <p>📌{player.cf1}</p>
                            {(player.cf2 !== null) && <p>📌{player.cf2}</p>}
                            {/* <p>📌{player.cf2}</p> */}
                        </div>  
                    }
                </div>
                {/* <div className='detailBox'>
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
                </div> */}
            </div>
        </div>
    );
};

export default PlayerDetail;