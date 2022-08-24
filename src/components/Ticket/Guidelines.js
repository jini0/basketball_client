import React from 'react';
import './Ticket.css';
import { Link } from 'react-router-dom';

const Guidelines = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>TICKET</h3>
                <p>원주DB의 경기 일정을 확인하고 티켓예매를 할 수 있는 공간입니다.</p>
            </div>   
            <div id='ticket_guide'>
                <div className='inner'>
                    <div className='ticket_tab'>
                        <ul>
                            <li className='reservation'>예매하기</li>
                            <li className='ticketPrice'><Link to="/ticketPrice">티켓가격</Link></li>
                            {/* <li>멤버쉽</li> */}
                            <li className='guidelines active'>티켓 안내사항</li>
                        </ul>
                    </div>   
                    {/* 티켓 안내사항 클릭시 */}
                    <div>
                        <section>
                            <h3>KBL 통합 홈페이지 티켓 관련 안내</h3>
                            <div>
                                <p>KBL 및 10개 구단 입장권 예매는 KBL 통합 홈페이지를 통해서만 구매가 가능하며, 관람객 정보 확인을 위해 온라인 예매만 가능합니다. 10개 구단 공통 적용되는 티켓 관련 사항을 아래와 같이 안내하오니 참고하셔서 즐거운 경기 관람 하시기 바랍니다.</p>
                            </div>
                        </section>
                        <section>
                            <h3>결제수단 안내</h3>
                            <div>
                                <ul>
                                    <li>
                                        <span>WEB</span>신용카드, 계좌이체, 간편결제(PAYCO)
                                    </li>
                                    <li>
                                        <span>APP</span>신용카드, 무통장입금, 간편결제(PAYCO), 휴대폰 결제(PAYCO)
                                    </li>
                                    <li className='guide_desc'><br/>- 무통장 입금은 경기일 3일전부터 결제수단이 사라지니 4일전까지만 이용 가능(예: 12월 10일 경기의 경우 12월 6일 24:00까지 무통장 입금 통한 결제 가능)</li>
                                    <li className='guide_desc'>- 휴대폰결제는 간편결제(PAYCO)를 통해서만 가능(일반결제시 불가)</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <h3>부분취소 안내</h3>
                            <div>
                                <ul>
                                    <li>신용카드 단일결제 시 부분취소 가능</li>
                                    <li className='guide_desc'><br/>- 단, 포인트 및 쿠폰 사용시 부분취소 불가</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <h3>예매 관련 공통 사안</h3>
                            <div>
                                <ul>
                                    <li>
                                        <span className='guide_etc'>예매 확인 및 취소</span>KBL WEB 또는 APP 통해 가능 (모바일 웹 불가)
                                    </li>
                                    <li>
                                        <span className='guide_etc'>예매 수수료</span>1,000원(장당)
                                    </li>
                                    <li>
                                        <span className='guide_etc'>사회적 배려층</span>온라인 예매 후 현장 매표소에서 증빙 서류 제출 후 티켓 발권
                                    </li>
                                    <li>
                                        <span className='guide_etc'>문화누리카드 결제</span>좌석 선택 후 권종 선택 단계에서 문화누리카드 선택 가능
                                    </li>
                                    <li>
                                        <span className='guide_etc'>유료멤버십</span>구단별 유료멤버십 중복 가입은 불가합니다.
                                    </li>
                                    <li className='guide_desc'><br/>- 사회적 배려층 : 장애인/경로/국가유공자</li>
                                    <li className='guide_desc'>- 구단별로 문화누리카드 결제 가능 좌석은 다를 수 있음</li>
                                </ul>
                            </div>
                        </section>
                        <section>
                            <h3>고객 센터</h3>
                            <div>
                                <ul>
                                    <li>
                                        <span className='guide_etc'>티켓 예매 및 취소</span>1588-7890 (운영시간: 10:00~18:00)
                                    </li>
                                    <li>
                                        <span className='guide_etc'>기타 문의 전화</span>1588-4567 (운영시간: 10:00~18:00)

                                    </li>
                                    <li className='guide_desc'><br/>- 전화 연결이 안될 경우 membership@ticketlink.co.kr</li>
                                </ul>
                            </div>
                        </section>
                        <section className='ticketBtn'>
                            <button className='ticket_reserve_btn'>예매하기</button>
                        </section>
                    </div>
                </div>   
            </div>   
        </div>
    );
};

export default Guidelines;