import React from 'react';
import { Link } from 'react-router-dom';
import './News.css';

const Notice = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>공지사항</h3>
                <p>KBL의 소식 및 공지 안내 페이지입니다.</p>
            </div>
            <div id='notice'>
                <div className='inner'>
                    <div className='notice_search'>
                        <div className='form_select'>
                            <div className='text'>제목</div>
                            <select className='search_options'>
                                <option data-key="title" value="title">제목</option>
                                <option data-key="content" value="content">내용</option>
                            </select>
                        </div>
                        <input type="text" placeholder="검색어를 입력해주세요." />
                        <button className='searchBtn'></button>
                    </div>
                    <div className='notice_table'>
                        <table>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성일</th>
                                    <th>조회수</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>13</td>
                                    <td>2022-2023시즌 시즌권 판매 안내</td>
                                    <td>2022-08-24</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>2022-2023시즌 티켓 및 좌석 안내</td>
                                    <td>2022-08-22</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>사과문</td>
                                    <td>2022-06-27</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td><Link to="/detailNotice">원주DB, 22-23시즌 업무 대행사 선정공고(이벤트,장치장식물,온라인마케팅)</Link></td>
                                    <td>2022-06-02</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>트레이너 채용 공고 안내</td>
                                    <td>2022-05-10</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>프로스포츠 관람권 지원사업 7회차</td>
                                    <td>2022-03-29</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>프로스포츠 관람권 지원사업 6회차</td>
                                    <td>2022-02-28</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>윈디 서바이벌 게임 3라운드 정답자 발표</td>
                                    <td>2022-02-14</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>윈디 서바이벌 게임 2라운드 정답자 발표</td>
                                    <td>2022-02-04</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>프로스포츠 관람권 지원사업 5회차</td>
                                    <td>2022-02-01</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>윈디 서바이벌 게임 1라운드 정답자 발표</td>
                                    <td>2022-01-31</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>윈디 서바이벌 게임 1라운드 참여 안내</td>
                                    <td>2022-01-31</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>BODYFRIEND X DB PROMY 윈디 서바이벌 게임 참가 안내</td>
                                    <td>2022-01-25</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>   
        </div>
    );
};

export default Notice;