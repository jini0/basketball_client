import React, { useEffect, useState } from 'react';
import './Event.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { API_URL } from '../config/contansts';

const DetailEvent = () => {
    const navigate = useNavigate();
    // //*로딩상태 - useState로 상태관리
    // const [loading, setLoading] = useState(true);

    //button - 목록으로 보내는 함수
    function onSubmit(){
        navigate('/event');
    }

    // mysql로 데이터 불러오기
    const [ event, setEvent ] = useState(null);
    const { id } = useParams();             // id값 받아오기(parameter 사용)

    useEffect(()=>{
        // axios.get(`http://localhost:8001/event/${id}`)
        axios.get(`${API_URL}/event/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            setEvent(results[0]); 
            // setLoading(false);  //렌더링이 완료(event데이터들을 다 불러오면)가 되면 setLoading은 false
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    if(!event) return <Loading/>
    // if(loading) return <Loading/>    // ->loading이 true일때만, 로딩창 뜸(데이터 불러오면 loading이 false라 안보이게)
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
                                    <th colSpan={2}>{event.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>이벤트기간 : <span>{event.date}</span></th>
                                    <th>조회수 : <span>{event.view}</span></th>
                                </tr>
                                <tr>
                                    <td colSpan={2} className="eventCont">
                                        <div>
                                            <img src={"../"+event.imgsrc1} alt="이벤트" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>

                            {/* <thead>
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
                            </tbody> */}
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