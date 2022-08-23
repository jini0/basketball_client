import React from 'react';
import './Ticket.css';

const TicketPrice = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>TICKET</h3>
                <p>원주DB의 경기 일정을 확인하고 티켓예매를 할 수 있는 공간입니다.</p>
            </div>   
            <div id='ticket_price'>
                <div className='inner'>
                    <div className='ticket_tab'>
                        <ul>
                            <li className='reservation'>예매하기</li>
                            <li className='ticketPrice active'>티켓가격</li>
                            {/* <li>멤버쉽</li> */}
                            <li className='guidelines'>티켓 안내사항</li>
                        </ul>
                    </div>
                    {/* 티켓가격 클릭시 */}
                    <div>
                        <section>
                            <h3>좌석배치도</h3>
                            <div>
                                <img src="images/DB_seat2.png" alt="좌석안내" />
                            </div>
                        </section>
                        <section>
                            <h3>2022-2023시즌 티켓가격</h3>
                            <div>
                                <img src="images/DB_seat3.png" alt="22-23시즌티켓안내" />
                            </div>
                        </section>
                        <section> 
                            <h3>티켓 구매 방법 / 취소·환불</h3>
                            <div>
                                <img src="images/DB_seat4.png" alt="티켓구매방법안내" />
                            </div>
                        </section>
                        <section>
                            <h3>티켓 예매 방법</h3>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>내용</th>
                                            <th>비고</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>온라인 예매</td>
                                            <td>
                                                - KBL 통합 어플리케이션
                                                - KBL 통합 티켓 홈페이지(https://promy.kbl.or.kr)
                                            </td>
                                            <td rowSpan={2}>
                                                - 경기 <span>5일전</span> 낮 12시부터 경기시작 전까지 예매 가능
                                                - 1인당 최대 <span>4매</span> 예매 가능
                                                - 예매수수료 1,000원/장
                                                - <span className='ticket_table_tit'>운영시간</span> : 온라인(24시간), 전화(10시~18시) 
                                                - <span className='ticket_table_tit'>입장시간</span> : 경기시작 1시간 30분 전부터 입장 가능
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>전화 예매</td>
                                            <td>- 1588-7890</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                        <section>
                            <h3>일반 할인</h3>
                            <div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>구분</th>
                                            <th>내용</th>
                                            <th>비고</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td rowSpan={2}>
                                                DB손해보험 임직원<br/>
                                                (자회사 포함)
                                            </td>
                                            <td>무료</td>
                                            <td>일반석</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>임직원 본인에 한하여, 현장 구매만 가능 (사원증 또는 신분증 + 명함 제시)</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>그룹 임직원(계열사)</td>
                                            <td>50%</td>
                                            <td>일반석</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>본인에 한하여, 현장 구매만 가능 (사원증 또는 신분증 + 명함 제시)</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>장애인 / 국가유공자</td>
                                            <td>50%</td>
                                            <td>일반석</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>본인에 한하여, 현장 구매만 가능 (사원증 또는 신분증 + 명함 제시)</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>문화누리카드 소지자</td>
                                            <td>40%</td>
                                            <td>전좌석</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>본인에 한하여, 현장 구매만 가능 (사원증 또는 신분증 + 명함 제시)</td>
                                        </tr>
                                        <tr>
                                            <td rowSpan={2}>주니어프로미 회원 및 가족</td>
                                            <td>50%</td>
                                            <td>S1 ~ S2 구역</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>주니어프로미농구교실 문의 (033-765-0025)</td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default TicketPrice;