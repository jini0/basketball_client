import React from 'react';
import './Event.css';
import { useNavigate } from 'react-router-dom';

const DetailEvent = () => {
    const navigate = useNavigate();

    //button - 목록으로 보내는 함수
    function onSubmit(){
        navigate('/event');
    }
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>이벤트</h3>
                <p>DB 프로미프로농구단에서 진행하는 다양한 이벤트에 참여하실 수 있습니다.</p>
            </div>  
            <div id='detail_event'>
                <div className='inner'>
                    {/* 내용보기 */}
                    <div className='detail_event_content'>
                        <table summary='이벤트내용보기'>
                            <thead>
                                <tr>
                                    <th colSpan={2}>원주DB 홈 경기 직관이벤트</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>이벤트기간 : <span></span></th>
                                    <th>조회수 : <span></span></th>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="eventCont">
                                        <div>
                                            <img src="images/event_detail.png" alt="이벤트" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* 댓글달기 */}
                    {/* 버튼 */}
                    <div className='detail_eventBtn'>
                        <button className='event_btn' type='button' onClick={onSubmit}>목록으로</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailEvent;