import React, { useEffect } from 'react';
import './Event.css';
import { Link } from 'react-router-dom';

const Event = () => {
    // 이벤트 클릭시 각 이벤트리스트 뜨게!
    useEffect(()=>{
        const eventIng = document.querySelector('.event_i');
        const eventEnd = document.querySelector('.event_e');
        const eventIngList = document.querySelector('.event_ing');
        const eventEndList = document.querySelector('.event_end');
        eventIng.addEventListener('click',()=>{
            eventIng.classList.add('active');
            eventEnd.classList.remove('active');
            eventIngList.style.display = "block";
            eventEndList.style.display = "none";
        })
        eventEnd.addEventListener('click',()=>{
            eventEnd.classList.add('active');
            eventIng.classList.remove('active');
            eventEndList.style.display = "block";
            eventIngList.style.display = "none";
        })
    },[])
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>이벤트</h3>
                <p>DB 프로미프로농구단에서 진행하는 다양한 이벤트에 참여하실 수 있습니다.</p>
            </div> 
            <div className='events'>
                <div className='inner'>
                    <ul className='event_tab'>
                        {/* <li className='active event_i'><a href="?etc1=I">진행 중인 이벤트</a></li>
                        <li className='event_e'><a href="?etc1=E">지난 이벤트</a></li> */}
                        <li className='active event_i'>진행 중인 이벤트</li>
                        <li className='event_e'>지난 이벤트</li>
                    </ul>
                    {/* 이벤트리스트 - 진행 중인 이벤트 ?etc1=I*/}
                    <ul className='active event_ing'>
                        <li>
                            <div>
                                <p className='event_img'>
                                    <img src="images/event.png" alt="이벤트사진" />
                                </p>
                            </div>
                            <div>
                                <p className='event_title'>진행중인 이벤트가 없습니다.</p>
                                <p className='event_date'></p>
                                <p className='btn_view'></p>
                            </div>
                        </li>
                    </ul>
                    {/* 이벤트리스트 - 지난 이벤트 ?etc1=E*/}
                    <ul className='event_end'>
                        <li>
                            <div>
                                <p className='event_img'>
                                    <img src="images/event2.png" alt="이벤트사진" />
                                </p>
                            </div>
                            <div>
                                <p className='event_title'>원주DB 홈 경기 직관이벤트</p>
                                 <p className='event_date'></p>
                                <p className='btn_view'>
                                    {/* <Link to="/event/${event.no}">자세히보기</Link> */}
                                    <Link to="/detailEvent">자세히보기</Link>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className='event_img'>
                                    <img src="images/event3.png" alt="이벤트사진" />
                                </p>
                            </div>
                            <div>
                                <p className='event_title'>직관이벤트! 라운드 '승부사'를 찾아라!</p>
                                <p className='event_date'></p>
                                <p className='btn_view'>
                                    {/* <Link to="/event/${event.no}">자세히보기</Link> */}
                                    <Link to="/detailEvent">자세히보기</Link>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <p className='event_img'>
                                    <img src="images/event4_1.png" alt="이벤트사진" />
                                </p>
                            </div>
                            <div>
                                <p className='event_title'>2021-2022시즌 라이브 팬미팅</p>
                                <p className='event_date'></p>
                                <p className='btn_view'>
                                    {/* <Link to="/event/${event.no}">자세히보기</Link> */}
                                    <Link to="/detailEvent">자세히보기</Link>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Event;