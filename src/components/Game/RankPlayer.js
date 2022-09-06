import React, { useState } from 'react';
import './Game.css';

const RankPlayer = () => {
    // select - 경기tab --> 정규경기/D리그 클릭
    const [ selected, setSelected ] = useState("");
    // select - 년도tab --> 2022-2023/2021-2022/2020-2021 클릭
    const [ selected2, setSelected2 ] = useState("21");
    const [ style, setStyle ] = useState({display: "block"});

    const onMouseEnter = () => {
        setStyle({display: 'none'})
    }
    const onMouseLeave = () => {
        setStyle({display: 'block'})
    }

    // onChange 이벤트
    const handleSelect = (e) => {
        setSelected(e.target.value);    
    }
    // onChange 이벤트2
    const handleSelect2 = (e) => {
        setSelected2(e.target.value);
        console.log(e.target.value)
        // eslint-disable-next-line
        if(e.target.value== "22"){       //2022-2023시즌은 아직 시작 전이라서 -> table 내용 없음
        // (selected == "22") 로 주면 인식을 못해서 e.target.value로 줬음!
            onMouseEnter();
            alert('시즌 시작 전입니다.');
        // eslint-disable-next-line
        } else if(e.target.value == "21") {      //2021-2022시즌 table 데이터 
            onMouseLeave();
        }
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>선수 순위</h3>
                <p>KBL구단의 시즌 선수 순위를 확인할 수 있습니다.</p>
            </div>   
            <div id='rankPlayer'>
                <div className='inner'>
                    {/* 선수순위 카테고리영역 */}
                    <div className='rank_category'>
                        <div className='rank_selector'>
                            <div className='rank_selected'>
                                <label>경기</label>
                                <div className='rank_text'>정규경기</div>
                                {/* React에서는 option에 selected를 쓰는 대신 select에서 value로 사용!  */}
                                <select className='rank_options' onChange={handleSelect} value={selected}>
                                    <option className='opt' value="1">정규경기</option>
                                    <option className='opt' value="2">D리그</option>
                                </select>
                            </div>
                            <div className='rank_selected'>
                                <label>년도</label>
                                <div className='rank_text'>2022-2023</div>
                                <select className='rank_options' onChange={handleSelect2} value={selected2}>
                                    <option className='opt' value="22">2022-2023</option>
                                    <option className='opt' value="21">2021-2022</option>
                                    {/* <option className='opt' value="10">2020-2021</option> */}
                                </select>
                            </div>
                        </div>
                    </div>
                    {/* 선수순위 분야별 상세 */}
                    <div className='body' style={style}>
                        <section className='info'>
                            <ul className='rank_player_list'>
                                {/* - 득점(국내) */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>득점 (국내)<span className='text'>순위 더 보기</span></h3>
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_scoring(domestic).png"  alt="이대성" />
                                                    <div>
                                                        <i className='icon_emblem_orion'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>이대성</strong>
                                                            <strong className='team'>고양 오리온</strong>
                                                            <strong className='score'>기록 : 17.0</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='on'>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>허웅</strong>
                                                        <span className='team'>원주 DB</span>
                                                        <strong className='score'>16.7</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>최준용</strong>
                                                        <span className='team'>서울 SK</span>
                                                        <strong className='score'>16.0</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>전성현</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>15.4</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>허훈</strong>
                                                        <span className='team'>수원 KT</span>
                                                        <strong className='score'>14.9</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 득점(전체) */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>득점 (전체)</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_scoring(all).png"  alt="자밀 워니" />
                                                    <div>
                                                        <i className='icon_emblem_sk'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>자밀 워니</strong>
                                                            <strong className='team'>서울 SK</strong>
                                                            <strong className='score'>기록 : 22.1</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>앤드류 니콜슨</strong>
                                                        <span className='team'>대구 한국가스공사</span>
                                                        <strong className='score'>20.9</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>오마리 스펠맨</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>20.2</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>라건아</strong>
                                                        <span className='team'>전주 KCC</span>
                                                        <strong className='score'>18.8</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>캐디 라렌</strong>
                                                        <span className='team'>수원 KT</span>
                                                        <strong className='score'>17.0</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 리바운드(국내) */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>리바운드 (국내)</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_rebound.png"  alt="양홍석" />
                                                    <div>
                                                        <i className='icon_emblem_kt'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>양홍석</strong>
                                                            <strong className='team'>수원 KT</strong>
                                                            <strong className='score'>기록 : 6.2</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='on'>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>강상재</strong>
                                                        <span className='team'>원주 DB</span>
                                                        <strong className='score'>6.2</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>최준용</strong>
                                                        <span className='team'>서울 SK</span>
                                                        <strong className='score'>5.8</strong>
                                                    </span>
                                                </li>
                                                <li className='on'>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>김종규</strong>
                                                        <span className='team'>원주 DB</span>
                                                        <strong className='score'>5.7</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>오세근</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>5.6</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 리바운드(전체) */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>리바운드 (전체)</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_rebound(all).png"  alt="아셈 마레이" />
                                                    <div>
                                                        <i className='icon_emblem_lg'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>아셈 마레이</strong>
                                                            <strong className='team'>창원 LG</strong>
                                                            <strong className='score'>기록 : 13.5</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>자밀 워니</strong>
                                                        <span className='team'>서울 SK</span>
                                                        <strong className='score'>12.5</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>라건아</strong>
                                                        <span className='team'>전주 KCC</span>
                                                        <strong className='score'>10.9</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>머피 할로웨이</strong>
                                                        <span className='team'>고양 오리온</span>
                                                        <strong className='score'>10.8</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>캐디 라렌</strong>
                                                        <span className='team'>수원 KT</span>
                                                        <strong className='score'>10.5</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 어시스트 */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>어시스트</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_asist.png"  alt="김시래" />
                                                    <div>
                                                        <i className='icon_emblem_samsung'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>김시래</strong>
                                                            <strong className='team'>서울 삼성</strong>
                                                            <strong className='score'>기록 : 5.9</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>김낙현</strong>
                                                        <span className='team'>대구 한국가스공사</span>
                                                        <strong className='score'>5.7</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>변준형</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>5.7</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>김선형</strong>
                                                        <span className='team'>서울 SK</span>
                                                        <strong className='score'>5.3</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>허훈</strong>
                                                        <span className='team'>수원 KT</span>
                                                        <strong className='score'>5.2</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 블록 */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>블록</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_block.png"  alt="캐디 라렌" />
                                                    <div>
                                                        <i className='icon_emblem_kt'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>캐디 라렌</strong>
                                                            <strong className='team'>수원 KT</strong>
                                                            <strong className='score'>기록 : 1.8</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>오마리 스펠맨</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>1.6</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>라숀 토마스</strong>
                                                        <span className='team'>울산 현대모비스</span>
                                                        <strong className='score'>1.1</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>최준용</strong>
                                                        <span className='team'>서울 SK</span>
                                                        <strong className='score'>1.1</strong>
                                                    </span>
                                                </li>
                                                <li className='on'>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>김종규</strong>
                                                        <span className='team'>원주 DB</span>
                                                        <strong className='score'>1.1</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 스틸 */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>스틸</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_still.png"  alt="머피 할로웨이" />
                                                    <div>
                                                        <i className='icon_emblem_orion'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>머피 할로웨이</strong>
                                                            <strong className='team'>고양 오리온</strong>
                                                            <strong className='score'>기록 : 2.2</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>아셈 마레이</strong>
                                                        <span className='team'>창원 LG</span>
                                                        <strong className='score'>1.8</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>문성곤</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>1.8</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>라숀 토마스</strong>
                                                        <span className='team'>울산 현대모비스</span>
                                                        <strong className='score'>1.6</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>이재도</strong>
                                                        <span className='team'>창원 LG</span>
                                                        <strong className='score'>1.5</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 야투 */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>야투</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_field-throw.png"  alt="자밀 워니" />
                                                    <div>
                                                        <i className='icon_emblem_sk'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>자밀 워니</strong>
                                                            <strong className='team'>서울 SK</strong>
                                                            <strong className='score'>기록 : 9.5</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>앤드류 니콜슨</strong>
                                                        <span className='team'>대구 한국가스공사</span>
                                                        <strong className='score'>8.3</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>라건아</strong>
                                                        <span className='team'>전주 KCC</span>
                                                        <strong className='score'>7.9</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>오마리 스펠맨</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>7.6</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>아이제아 힉스</strong>
                                                        <span className='team'>서울 삼성</span>
                                                        <strong className='score'>7.3</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 3점슛 */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>3점슛</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_three-point-shot.png"  alt="전성현" />
                                                    <div>
                                                        <i className='icon_emblem_kgc'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>전성현</strong>
                                                            <strong className='team'>안양 KGC</strong>
                                                            <strong className='score'>기록 : 3.3</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>오마리 스펠맨</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>2.6</strong>
                                                    </span>
                                                </li>
                                                <li className='on'>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>허웅</strong>
                                                        <span className='team'>원주 DB</span>
                                                        <strong className='score'>2.1</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>김낙현</strong>
                                                        <span className='team'>대구 한국가스공사</span>
                                                        <strong className='score'>2.1</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>허훈</strong>
                                                        <span className='team'>수원 KT</span>
                                                        <strong className='score'>2.1</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 자유투 성공률 */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>자유투 성공률</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_free-throw-rate.png"  alt="이관희" />
                                                    <div>
                                                        <i className='icon_emblem_lg'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>이관희</strong>
                                                            <strong className='team'>창원 LG</strong>
                                                            <strong className='score'>기록 : 85.9</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='on'>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>허웅</strong>
                                                        <span className='team'>원주 DB</span>
                                                        <strong className='score'>85.9</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>김시래</strong>
                                                        <span className='team'>서울 삼성</span>
                                                        <strong className='score'>84.2</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>전성현</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>83.9</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>이대성</strong>
                                                        <span className='team'>고양 오리온</span>
                                                        <strong className='score'>83.1</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 야투 성공률 */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>야투 성공률</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_field-throw-rate.png"  alt="마이크 마이어스" />
                                                    <div>
                                                        <i className='icon_emblem_kt'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>마이크 마이어스</strong>
                                                            <strong className='team'>수원 KT</strong>
                                                            <strong className='score'>기록 : 62.4</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>라건아</strong>
                                                        <span className='team'>전주 KCC</span>
                                                        <strong className='score'>59.7</strong>
                                                    </span>
                                                </li>
                                                <li className='on'>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>레나드 프리먼</strong>
                                                        <span className='team'>원주 DB</span>
                                                        <strong className='score'>58.4</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>머피 할로웨이</strong>
                                                        <span className='team'>고양 오리온</span>
                                                        <strong className='score'>57.4</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>아이제아 힉스</strong>
                                                        <span className='team'>서울 삼성</span>
                                                        <strong className='score'>57.2</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/* - 3점슛 성공률 */}
                                <li>
                                    <div className='item'>
                                        <div className='rank_header'>
                                            <h3>3점슛 성공률</h3>
                                            {/* <span className='text'>순위 더 보기</span> */}
                                        </div>
                                        {/* 2021-2022시즌 */}
                                        <div className='body'>
                                            <ul className='ranking_list'>
                                                <li className='first'>
                                                    <img src="images/rank_player_three-point-shot-rate.png"  alt="양홍석" />
                                                    <div>
                                                        <i className='icon_emblem_kt'></i>
                                                        <div className='info'>
                                                            <span className='num'>1st</span>
                                                            <strong className='name'>양홍석</strong>
                                                            <strong className='team'>수원 KT</strong>
                                                            <strong className='score'>기록 : 39.5</strong>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span className='num'>2</span>
                                                    <span className='info'>
                                                        <strong className='name'>전성현</strong>
                                                        <span className='team'>안양 KGC</span>
                                                        <strong className='score'>39.3</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>3</span>
                                                    <span className='info'>
                                                        <strong className='name'>안영준</strong>
                                                        <span className='team'>서울 SK</span>
                                                        <strong className='score'>39.1</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>4</span>
                                                    <span className='info'>
                                                        <strong className='name'>허일영</strong>
                                                        <span className='team'>서울 SK</span>
                                                        <strong className='score'>38.5</strong>
                                                    </span>
                                                </li>
                                                <li>
                                                    <span className='num'>5</span>
                                                    <span className='info'>
                                                        <strong className='name'>허훈</strong>
                                                        <span className='team'>수원 KT</span>
                                                        <strong className='score'>38.4</strong>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RankPlayer;