import React from 'react';
import './News.css';

const News = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>뉴스</h3>
                <p>DB프로미의 다양한 소식을 빠르게 전해드리겠습니다.</p>
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
                                    <td>9</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=417&aid=0000837363" target="_blank" rel="noopener noreferrer">에르난데스 영입…재계약한 프리먼과 호흡</a></td>
                                    <td>2022-07-28</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=421&aid=0006217698" target="_blank" rel="noopener noreferrer">10월15일 개막…원주서 해 넘기는 '농구영신' 개최</a></td>
                                    <td>2022-07-14</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><a href="http://www.rookie.co.kr/news/articleView.html?idxno=75803" target="_blank" rel="noopener noreferrer">‘이제는 DB맨’ 최승욱 “첫 목표는 팀에 필요한 선수 되는 것”</a></td>
                                    <td>2022-07-11</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=076&aid=0003889672" target="_blank" rel="noopener noreferrer">아시아쿼터 이선 알바노 영입</a></td>
                                    <td>2022-07-06</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><a href="http://www.mydaily.co.kr/new_yk/html/read.php?newsid=202207051142436063&ext=na&utm_campaign=naver_news&utm_source=naver&utm_medium=related_news" target="_blank" rel="noopener noreferrer">DB, 9일 '러브하우스’ 봉사활동 실시</a></td>
                                    <td>2022-07-05</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><a href="https://www.onews.tv/news/articleView.html?idxno=126217" target="_blank" rel="noopener noreferrer">FA 두경민, 1년만에 원주DB 복귀</a></td>
                                    <td>2022-05-23</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=087&aid=0000890133" target="_blank" rel="noopener noreferrer">원주 DB 허웅 3년 연속 ‘인기상'</a></td>
                                    <td>2022-01-31</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=398&aid=0000057281" target="_blank" rel="noopener noreferrer">DB 이상범 감독 "응원해주신 팬들에게 굉장히 죄송하다"</a></td>
                                    <td>2022-01-31</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=351&aid=0000058516" target="_blank" rel="noopener noreferrer">'마지막 불꽃 불태운 웅종규' DB, 최종전서 LG 꺾고 유종의 미</a></td>
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

export default News;