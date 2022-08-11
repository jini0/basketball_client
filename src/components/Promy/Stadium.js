import React from 'react';
import './Promy.css';
// 네이버 지도 api
import { RenderAfterNavermapsLoaded } from 'react-naver-maps'; // 패키지 불러오기
import NaverMapAPI from './NaverMapAPI';

const Stadium = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>원주 종합 체육관</h3>
                <p>원주DB프로미 홈경기장 위치 정보를 안내해 드립니다.</p>
            </div> 
            <div id='stadium'>
                <div className='inner'>
                    <div className='stadium_1'>
                        <div className='stadium_title'>
                            <h3>Wonju Gymnasium<span>원주 종합 체육관</span></h3>
                        </div>
                        <div className='stadium_box'>
                            <div className='stadium_desc'>
                                <div>
                                    <div className='wonju_stadium'>
                                        <h4>국내 최고의 실내경기장<br/>원주 종합 체육관</h4>
                                        <div>
                                            <ul>
                                                <li><span>위치</span> 강원도 원주시 서원대로 279</li>
                                                <li><span>면적</span> 23,000㎡</li>
                                                <li><span>좌석수</span> 4,600석</li>
                                                <li><span>주차시설</span> 350대 수용</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className='wonju_stadium_desc'>
                                        <p>
                                            원주DB프로미농구단의 새 홈 경기장 원주 종합체육관은 2013년 완공되었습니다. 
                                            기존 홈 경기장이었던 치악체육관 바로 옆에 위치하고 있으며 약 4,100석 규모와 350대의 차량을 동시에 수용할 수 있는 국내 최고의 실내경기장 입니다.<br/><br/>

                                            원주종합체육관의 관람석은 최적의 경기 관람을 위해 설계되어 쾌적하고 안전합니다. 코트에 가장 가깝게 접근한 1층 관람석은 생생한 선수들의 플레이를 볼 수 있도록 관전시야를 제공합니다. 
                                            국내 최대 규모의 다면형 멀티비전과 보조 전광판은 다양한 경기정보와 화려한 볼거리를 리플레이 화면으로 제공하고 있으며, 
                                            최고 수준의 음향시설은 어느 좌석에서나 선명하고 동일한 음향을 즐길 수 있게 하며, 실내조명 또한 멋진 오프닝 공연에 최적화된 이벤트를 연출 합니다.<br/><br/>

                                            쾌적한 실내온도, 깨끗한 부대시설을 자랑하는 원주DB프로미 홈 경기장을 찾아주신 팬들에게 항상 농구의 즐거움과 색다른 팬 경험을 선물할 것 입니다.
                                        </p>
                                    </div>
                                </div>
                                <div className='wonju_stadium_img'>
                                    <img src="images/wonju_stadium.png" alt="원주종합체육관"/>
                                    <img src="images/wonju_stadium1.png" alt="원주종합체육관"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='stadium_2'>
                        <div className='stadium_title'>
                            <h3>찾아오시는 길</h3>
                        </div>
                        <div className="stadium_box">
                            {/* 네이버지도 api */}
                            <RenderAfterNavermapsLoaded
                                ncpClientId={'meufgifp5k'} // 자신의 네이버 계정에서 발급받은 Client ID
                                error={<p>Maps Load Error</p>}
                                loading={<p>Maps Loading...</p>}
                            >
                                <NaverMapAPI />
                            </RenderAfterNavermapsLoaded>
                            <p>강원도 원주시 서원대로 279</p>
                            <div>
                                <h4>전화</h4>
                                <ul>    
                                    <li><span>서울사무실</span> (02)3011-3177</li>
                                    <li><span>원주사무실</span> (033)764-3015</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='stadium_3'>
                        <div className='stadium_title'>
                            <h3>도착 후 교통편</h3>
                        </div>
                        <div className="stadium_box">
                            <table>
                                <tbody>
                                    <tr className='t_title'>
                                        <td colSpan={2}>이용구분</td>
                                        <td>이용경로</td>
                                        <td>소요시간</td>
                                    </tr>
                                    <tr>
                                        <td rowSpan={2}>철도</td>
                                        <td className='ktx'>원주역</td>
                                        <td>31번/34(-1)번 버스 승차, 도영쇼핑 하차.<br/>
                                            18(-1)번 버스 승차, 종합운동장 하차.<br/>
                                            90번 버스 승차, 원예하나로마트 정류장 하차.
                                        </td>
                                        <td>25~35분</td>
                                    </tr>
                                    <tr>
                                        <td className='ktx ktx_man'>만종역</td>
                                        <td>100번 승차, 종합운동장 하차</td>
                                        <td>40분</td>
                                    </tr>
                                    <tr>
                                        <td>고속·시외버스</td>
                                        <td>원주고속버스터미널<br/>
                                            원주시외버스터미널
                                        </td>
                                        <td>거리상으로 가장 가까워서 걸어갈 수 있습니다.</td>
                                        <td>15~20분</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='cf_bus'>
                                <p>아래는 원주 59번 버스 경동대학교 출발시간입니다. 만종역에서 종합체육관 방문할 사람 참고하시길 바랍니다.</p>
                                <p>59번 버스 경동대 출발시간 : 대보아파트 정류장에서는 이 시간에서 4~50분을 더하면 도착하니 참고할 것! 
                                    참고로 경동대학교에서 대보아파트 정류장까지 46분 걸리니 시간 잘 맞춰서 버스를 타기 바랍니다.</p>
                                <blockquote>
                                    <div>
                                        <p>07:50, 09:00, 10:20, 11:30, 12:50, 14:00, 15:20, 16:30, 17:50, 19:00, 20:20, 21:30(막차)</p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className='stadium_4'>
                        <div className='stadium_title'>
                            <h3>좌석배치도</h3>
                        </div>
                        <div className="stadium_box">
                            <img src="images/stadium_seat_db.png" alt="원주종합체육관 좌석배치도"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stadium;