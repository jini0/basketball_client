import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { API_URL } from '../config/contansts';
import { getCookie } from '../util/cookie';
import './News.css';
import Pagination from './Pagination';

const News = () => {
    // 관리자 로그인시
    const userId = getCookie('userId');
    console.log(userId);

    //check한 애들 선택하기 
    const [ checked, setChecked ] = useState([]);
    // mysql로 데이터 부르기
    const [ newses, setNewses ] = useState([]);
    const [ searchlist, setSearchList ] = useState([]); 
    // 페이지네이션
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;  //offset은 db에서 모든 컬럼을 읽어와, n~m 순서를 부여한 후 offset부터 limit 수로 자르는 작업
    

    useEffect(()=>{ 
        axios.get("http://localhost:8001/newses")
        // axios.get(`${API_URL}/newses`)
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            // console.log(result.data);
            setNewses(result.data);
            setSearchList(result.data);
        })
        .catch(e=>{
            console.log(e);
        })
        console.log("데이터 다시 부르기")
        // eslint-disable-next-line
    },[checked])

    // *검색기능*
    const [ search, setSearch ] = useState("");   
    //input - onChange이벤트
    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    //검색기능 코드 - filter, includes 이용하여 검색어 포함시 필터링을 해주어 검색 구현
    const filterData = newses.filter((row)=> row.title.includes(search))
    const onSearch = (e) => {
        e.preventDefault();
        if(search === null || search === '') {  //검색어가 없을 경우(null이거나 '빈값') 경고창 + 전체리스트 반환
            alert("검색어를 입력하시오.")
            axios.get("http://localhost:8001/newses")
            // axios.get(`${API_URL}/newses`)
            .then(result=>{
                const resultA = result.data;
                console.log(resultA);
                // console.log(result.data);
                setSearchList(result.data);
            })
        } else {    //검색구현
            // const filterData = newses.filter((row)=> row.title.includes(search))
            // setSearchList(filterData);
                // eslint-disable-next-line
            if(filterData == ''){
                alert("해당 내용이 없습니다.")
            } else {
                setSearchList(filterData);
            }
        }
        
    }

    // *조회수 
    // const { id } = useParams();
    const newsClick = (id) => {
        console.log(id);
        axios.put(`http://localhost:8001/viewNews/${id}`)
        // axios.put(`${API_URL}/viewNews/${id}`)
        .then(res=>{
            console.log(res);
            setNewses(res.data);
        })
        .catch(e=>{
            console.log(e);
        })
    }

    //input - formData
    const onChecked = (id) => {
        console.log(checked);
        console.log(checked[0]);
        setChecked([ ...checked, id ]);
    }

    
    //게시글 삭제
    // const { id } = useParams();
    const onDelete = () => {
        const checkedLength = checked.length;
        console.log(checked.length);
        console.log(checked[0]);
        //1개 삭제
        // axios.delete(`http://localhost:8001/delNews/${checked[i]}`)
        // .then(res=>{
        //     console.log("삭제 완료!");
        //     setChecked([]);
        // })
        // .catch(err=>{
        //     console.log(err);
        // })
        //2개 이상 삭제시 -> 배열의 길이만큼 삭제시켜줘야함!
        for(let i=0; i<checkedLength; i++){
            axios.delete(`http://localhost:8001/delNews/${checked[i]}`)
            // axios.delete(`${API_URL}/delNews/${checked[i]}`)
            .then(res=>{
                console.log("삭제 완료!");
                setChecked([]);
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>뉴스</h3>
                <p>DB프로미의 다양한 소식을 빠르게 전해드리겠습니다.</p>
            </div>
            <div id='notice'>
                <div className='inner'>
                    <div className='notice_search'>
                        <div className='registerBtn'>
                            {userId === 'admin' ?
                                <>
                                <button type='submit'><Link to="/registerNews">게시물 등록</Link></button>
                                <button type='submit'><Link to={`/editNews/${checked[0]}`}>수정</Link></button>
                                <button type='submit' onClick={onDelete}>삭제</button>
                                </>
                            : '' }
                        </div>
                        <form onSubmit={onSearch}>
                            <div className='form_select'>
                                <div className='text'>제목</div>
                                <select className='search_options'>
                                    <option data-key="title" value="title">제목</option>
                                    <option data-key="content" value="content">내용</option>
                                </select>
                            </div>
                            <input type="text" placeholder="검색어를 입력해주세요." value={search} onChange={onChangeSearch}/>
                            <button className='searchBtn'></button>
                        </form>
                    </div>
                    {/* 페이지당 게시물 수 제한 */}
                    <label>
                        페이지당 표시할 게시물 수 :&nbsp;
                        <select
                        type="number"
                        value={limit}
                        onChange={({ target: { value } }) => setLimit(Number(value))}
                        >
                            <option value="10">10</option>
                            <option value="12">12</option>
                            <option value="20">20</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </label>
                    <div className='notice_table'>
                        <form>
                        <table>
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>제목</th>
                                    <th>작성일</th>
                                    <th>조회수</th>
                                    <th className='check'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {searchlist.slice(offset, offset + limit).map(news=>(
                                    <tr key={news.id} news={news}>
                                        <td>{news.id}</td>
                                        <td onClick={()=> newsClick(news.id)}><a href={news.address} target="_blank" rel="noopener noreferrer">{news.title}</a></td>
                                        <td>{(news.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</td>
                                        <td>{news.view}</td>
                                        <td><input type="checkbox" value={news.id} onChange={()=>onChecked(news.id)} /></td>
                                        {/* <td><input type="checkbox" value={news.id} name="id[]" onChange={(e)=>onChecked(e.target.checked, news.id)} checked={checked.includes(news.id) ? true : false} /></td> */}
                                        {/* <td><input type="checkbox" value={news.id} name="id[]" onChange={()=>onChecked(news.id)} /></td> */}
                                        {(searchlist == null) &&
                                            <td colSpan={4} className="empty">조회할 내용이 없습니다.</td>
                                        }
                                    </tr>
                                ))}
                                {/* <tr>
                                    <td>14</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=417&aid=0000837363" target="_blank" rel="noopener noreferrer">에르난데스 영입…재계약한 프리먼과 호흡</a></td>
                                    <td>2022-07-28</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=421&aid=0006217698" target="_blank" rel="noopener noreferrer">10월15일 개막…원주서 해 넘기는 '농구영신' 개최</a></td>
                                    <td>2022-07-14</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td><a href="http://www.rookie.co.kr/news/articleView.html?idxno=75803" target="_blank" rel="noopener noreferrer">‘이제는 DB맨’ 최승욱 “첫 목표는 팀에 필요한 선수 되는 것”</a></td>
                                    <td>2022-07-11</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=076&aid=0003889672" target="_blank" rel="noopener noreferrer">[오피셜]프로농구 원주 DB, 아시아쿼터 이선 알바노 영입</a></td>
                                    <td>2022-07-06</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=468&aid=0000862750" target="_blank" rel="noopener noreferrer">원주 DB, 3년 만에 '러브하우스' 봉사활동 실시</a></td>
                                    <td>2022-07-05</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=108&aid=0003057033" target="_blank" rel="noopener noreferrer">'KCC 가드' 유현준, DB 유니폼 입는다... 허웅 보상선수로 지명</a></td>
                                    <td>2022-05-26</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td><a href="https://www.onews.tv/news/articleView.html?idxno=126217" target="_blank" rel="noopener noreferrer">FA 두경민, 1년만에 원주DB 복귀</a></td>
                                    <td>2022-05-23</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=001&aid=0013199200" target="_blank" rel="noopener noreferrer">프로농구 DB, '베테랑 가드' 박찬희와 재계약…두경민도 영입(종합)</a></td>
                                    <td>2022-05-23</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=087&aid=0000890133" target="_blank" rel="noopener noreferrer">원주 DB 허웅 3년 연속 ‘인기상'</a></td>
                                    <td>2022-04-07</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=398&aid=0000057281" target="_blank" rel="noopener noreferrer">DB 이상범 감독 "응원해주신 팬들에게 굉장히 죄송하다"</a></td>
                                    <td>2022-04-06</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=351&aid=0000058516" target="_blank" rel="noopener noreferrer">'마지막 불꽃 불태운 웅종규' DB, 최종전서 LG 꺾고 유종의 미</a></td>
                                    <td>2022-04-06</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=065&aid=0000229739" target="_blank" rel="noopener noreferrer">[게임브리핑] PO 탈락 확정된 DB 이상범 감독 “매사에 최선 다해야 진정한 프로 선수”</a></td>
                                    <td>2022-04-06</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=398&aid=0000057257" target="_blank" rel="noopener noreferrer">DB 이상범 감독 "마지막 홈경기, 프로답게 열심히"</a></td>
                                    <td>2022-04-06</td>
                                    <td>0</td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td><a href="https://sports.news.naver.com/news?oid=398&aid=0000057024" target="_blank" rel="noopener noreferrer">DB 이상범 감독 "남은 경기, 식스맨들 더 자신감 있게 임해야"</a></td>
                                    <td>2022-03-31</td>
                                    <td>0</td>
                                </tr> */}
                            </tbody>
                        </table>
                        </form>
                        {/* 페이지네이션 */}
                        <div className='pagenav'>
                            <Pagination
                                // total={newses.length}
                                total={searchlist.length}
                                limit={limit}
                                page={page}
                                setPage={setPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;