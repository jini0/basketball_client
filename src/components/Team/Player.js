import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import { Link } from 'react-router-dom';
import './Team.css';
import PlayerList from './PlayerList';
const Player = () => {
    const allLists = document.querySelector('.allLists');
    const guardList = document.querySelector('.guardList');
    const forwardList = document.querySelector('.forwardList');
    const centerList = document.querySelector('.centerList');
    const armyList = document.querySelector('.armyList');

    // mysql로 데이터 부르기
    const [ players, setPlayers ] = useState([]);
    const [ allPlayers, setAllPlayers ] = useState([]);

    useEffect(()=>{ 
        axios.get("http://localhost:8001/players")
        .then(result=>{
            const players = result.data;
            console.log(players);
            // console.log(result.data);
            setPlayers(result.data)
            setAllPlayers(result.data)
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    //포지션별 클릭 - onClick이벤트
    function all(){ 
        setPlayers(allPlayers.filter(e=>e.position1)) 
        allLists.classList.add('active');
        guardList.classList.remove('active');
        forwardList.classList.remove('active');
        centerList.classList.remove('active');
        armyList.classList.remove('active');
    }
    function guard(){ 
        setPlayers(allPlayers.filter(e=>e.position1==="GUARD")) 
        guardList.classList.add('active');
        allLists.classList.remove('active');
        forwardList.classList.remove('active');
        centerList.classList.remove('active');
        armyList.classList.remove('active');
    }
    function forward(){ 
        setPlayers(allPlayers.filter(e=>e.position1==="FORWARD")) 
        forwardList.classList.add('active');
        allLists.classList.remove('active');
        guardList.classList.remove('active');
        centerList.classList.remove('active');
        armyList.classList.remove('active');
    }
    function center(){ 
        setPlayers(allPlayers.filter(e=>e.position1==="CENTER")) 
        centerList.classList.add('active');
        allLists.classList.remove('active');
        guardList.classList.remove('active');
        forwardList.classList.remove('active');
        armyList.classList.remove('active');
    }
    function army(){ 
        setPlayers(allPlayers.filter(e=>e.position1==="ARMY")) 
        armyList.classList.add('active');
        allLists.classList.remove('active');
        guardList.classList.remove('active');
        forwardList.classList.remove('active');
        centerList.classList.remove('active');
    }

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
                            <li onClick={all} className='active allLists'>전체</li>
                            <li onClick={guard} className="guardList">가드</li>
                            <li onClick={forward} className="forwardList">포워드</li>
                            <li onClick={center} className="centerList">센터</li>
                            <li onClick={army} className="armyList">군입대 선수</li>
                        </ul>
                    </div>
                    <div>
                        <div id='guard' className='inner2 position_name'>
                            <h4>GUARD</h4>
                            <ul className='teamList'>
                                {players.filter(e=>e.position1==="GUARD").map(player=>(
                                    <PlayerList key={player.id} player={player}/>
                                ))}

                                {/* 따로 PlayerList 만들기전, */}
                                {/* {players.filter(e=>e.position1==="GUARD").map(player=>(
                                    <li key={player.id}>
                                        <Link to="/detailPlayer">
                                        <div className='teamList_img'>
                                            <img src={player.imgsrc} alt=''/>
                                        </div>
                                        <div className='teamList_text'>
                                            <span className='num'>No.{player.no}</span>
                                            <p>{player.name}</p>
                                            <span className='position'>{player.position2}</span>
                                        </div>
                                        </Link>
                                    </li>
                                ))} */}

                                {/* <li>
                                    <Link to="/detailPlayer">
                                    <div className='teamList_img'>
                                        <img src='images/player_7.png' alt='김현호선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.7</span>
                                        <p>김현호</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                    </Link>
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
                                        <img src='images/player_55.png' alt='원종훈선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.55</span>
                                        <p>원종훈</p>
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
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_17-1.png' alt='알바노선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.17</span>
                                        <p>이선 알바노</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li> */}
                            </ul>

                        </div>
                        <div id='foward' className='inner2 position_name'>
                            <h4>FORWARD</h4>
                            <ul className='teamList'>
                                {players.filter(e=>e.position1==="FORWARD").map(player=>(
                                    <PlayerList key={player.id} player={player}/>
                                ))}
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </div>
                        <div id='center' className='inner2 position_name'>
                            <h4>CENTER</h4>
                            <ul className='teamList'>
                                {players.filter(e=>e.position1==="CENTER").map(player=>(
                                    <PlayerList key={player.id} player={player}/>
                                ))}
                                {/* <li>
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
                                </li> */}
                            </ul>
                        </div>
                        <div id='army' className='inner2 position_name'>
                            <h4>ARMY</h4>
                            <ul className='teamList'>
                                {players.filter(e=>e.position1==="ARMY").map(player=>(
                                    <PlayerList key={player.id} player={player}/>
                                ))}
                                {/* <li>
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
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_12.png' alt='김훈선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.12</span>
                                        <p>김훈</p>
                                        <span className='position'>FORWARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_30.png' alt='이용우선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.30</span>
                                        <p>이용우</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li>
                                <li>
                                    <div className='teamList_img'>
                                        <img src='images/player_yoo.png' alt='유현준선수'/>
                                    </div>
                                    <div className='teamList_text'>
                                        <span className='num'>No.미정</span>
                                        <p>유현준</p>
                                        <span className='position'>GUARD</span>
                                    </div>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;