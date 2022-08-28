import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './News.css';
import Pagination from './Pagination';

const Notice = () => {
    // mysql로 데이터 부르기
    const [ notices, setNotices ] = useState([]);
    // 페이지네이션
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const offset = (page - 1) * limit;  //offset은 db에서 모든 컬럼을 읽어와, n~m 순서를 부여한 후 offset부터 limit 수로 자르는 작업
    

    useEffect(()=>{ 
        axios.get("http://localhost:8001/notices")
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            // console.log(result.data);
            setNotices(result.data)
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    // *검색기능*
    const [ search, setSearch ] = useState("");   
    //input - onChange이벤트
    const onChangeSearch = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    //검색기능 코드 - filter, includes 이용하여 검색어 포함시 필터링을 해주어 검색 구현
    const onSearch = (e) => {
        e.preventDefault();
        if(search === null || search === '') {  //검색어가 없을 경우(null이거나 '빈값') 경고창 + 전체리스트 반환
            alert("검색어를 입력하시오.")
            axios.get("http://localhost:8001/notices")
            .then(result=>{
                const resultA = result.data;
                console.log(resultA);
                // console.log(result.data);
                setNotices(result.data)
            })
        } else {    //검색구현
            const filterData = notices.filter((row)=> row.title.includes(search))
            setNotices(filterData);
            if(!notices){
                alert('관련 항목이 없습니다.')
                axios.get("http://localhost:8001/notices")
                .then(result=>{
                    const resultA = result.data;
                    console.log(resultA);
                    // console.log(result.data);
                    setNotices(result.data)
                })
            }
        }
        setSearch('')
    }

    // *조회수 -- 각 아이디당..주려니까 id를 못찾음 ㅠㅠ
    const { id } = useParams();
    const noticeClick = () => {
        axios.put(`http://localhost:8001/notice/${id}`)
        .then(res=>{
            console.log(res);
            setNotices(res.data.view+1);
        })
        .catch(e=>{
            console.log(e);
        })
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>공지사항</h3>
                <p>KBL의 소식 및 공지 안내 페이지입니다.</p>
            </div>
            <div id='notice'>
                <div className='inner'>
                    <div className='notice_search'>
                        <div className='registerBtn'>
                            <button type='submit'><Link to="/registerNotice">공지사항 등록</Link></button>
                        </div>
                        <form onSubmit={e => onSearch(e)}>
                            <div className='form_select'>
                                <div className='text'>제목</div>
                                <select className='search_options'>
                                    <option data-key="title" value="title">제목</option>
                                    <option data-key="content" value="content">내용</option>
                                </select>
                            </div>
                            <input type="text" placeholder="검색어를 입력해주세요." value={search} onChange={onChangeSearch} />
                            <button className='searchBtn' type='submit'></button>
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
                            {/* slice() 메서드를 사용하여 첫 게시물부터 마지막 게시물까지만 루프를 돌도록! */}
                                {notices.slice(offset, offset + limit).map(notice=>(
                                    <tr key={notice.id} notice={notice}>
                                        <td>{notice.id}</td>
                                        <td onClick={noticeClick}><Link to={`/notice/${notice.id}`}>{notice.title}</Link></td>
                                        <td>{(notice.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</td>
                                        <td>{notice.view}</td>
                                        {/* {(!notices) &&
                                            <td colSpan={4} className="empty">조회할 내용이 없습니다.</td>
                                        } */}
                                    </tr>
                                ))}
                                {/* 페이지네이션 table 밖에! */}

                                {/* <tr>
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
                                </tr> */}
                            </tbody>
                        </table>
                        {/* 페이지네이션 */}
                        <div className='pagenav'>
                            <Pagination
                                total={notices.length}
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

export default Notice;