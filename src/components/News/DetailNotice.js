import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { API_URL } from '../config/contansts';
import { getCookie } from '../util/cookie';
import './News.css';

const DetailNotice = () => {
    const navigate = useNavigate();
    // 관리자 로그인시
    const userId = getCookie('userId');
    console.log(userId);

    //button - 목록으로 보내는 함수
    function onSubmit(){
        navigate('/notice');
    }

    // mysql로 데이터 불러오기
    const [ notice, setNotice ] = useState(null);
    const { id } = useParams();             // id값 받아오기(parameter 사용)

    useEffect(()=>{
        axios.get(`http://localhost:8001/notice/${id}`)
        // axios.get(`${API_URL}/notice/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            // setNotice(results); 
            setNotice(results[0]); 
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])
    if(!notice) return <div>로딩중입니다...</div>

    //게시글 삭제
    const onDelete = () => {
        axios.delete(`http://localhost:8001/delNotice/${id}`)
        // axios.delete(`${API_URL}/delNotice/${id}`)
        .then(res=>{
            console.log("삭제 완료!");
            navigate(-1);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>공지사항</h3>
                <p>KBL의 소식 및 공지 안내 페이지입니다.</p>
            </div> 
            <div id='detail_notice'>
                <div className='inner'>
                {userId === 'admin' ?
                    <div className='noticeBtn'>
                        <button id='editBtn' type='submit'><Link to={`/editNotice/${notice.id}`}>수정하기</Link></button>
                        <button id='deleteBtn' onClick={onDelete}>삭제하기</button>
                    </div>
                : ''}
                    <article>
                        <div className='detail_notice_title'>
                            <h2>{notice.title}</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <ul>
                                            <li><span>작성일</span>{(notice.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</li>
                                            <li><span>조회</span>{notice.view}</li>
                                        </ul>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='notice_content'>
                                        <div>
                                            <img src={"../images/"+notice.imgsrc} alt="상세공지" />
                                            { (notice.address !== "") && (notice.address !== null) && (notice.imgsrc2 !== "") && (notice.imgsrc2 !== null) ? 
                                                <a href={notice.address} target="_blank" rel="noopener noreferrer"><img src={"../images/"+notice.imgsrc2} alt="상세공지" /></a> 
                                                : (notice.imgsrc2 !== "") && (notice.imgsrc2 !== null) ? <img src={"../images/"+notice.imgsrc2} alt="상세공지" /> : null
                                            }
                                            {/* { (notice.address !== null) && (notice.imgsrc2 !== null) && 
                                                <a href={notice.address} target="_blank" rel="noopener noreferrer"><img src={"../images/"+notice.imgsrc2} alt="상세공지" /></a>
                                            } */}
                                            { ((notice.imgsrc2 !== "") && (notice.imgsrc2 !== null) && (notice.imgsrc3 !== "") && (notice.imgsrc3 !== null)) &&
                                                <img src={"../images/"+notice.imgsrc3} alt="상세공지" />                                       
                                            }
                                            { ((notice.imgsrc2 !== "") && (notice.imgsrc2 !== null) && (notice.imgsrc3 !== "") && (notice.imgsrc3 !== null) && (notice.imgsrc4 !== "") && (notice.imgsrc4 !== null)) && 
                                                <img src={"../images/"+notice.imgsrc4} alt="상세공지" />
                                            }
                                            { ((notice.imgsrc2 !== "") && (notice.imgsrc2 !== null) && (notice.imgsrc3 !== "") && (notice.imgsrc3 !== null) && (notice.imgsrc4 !== "") && (notice.imgsrc4 !== null) && (notice.imgsrc5 !== "") && (notice.imgsrc5 !== null)) && 
                                                <img src={"../images/"+notice.imgsrc5} alt="상세공지" />
                                            }
                                            <p>{notice.noticedesc}</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button className='detail_notice_btn' type='button' onClick={onSubmit}>목록으로</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </article>

                    {/* <article>
                        <div className='detail_notice_title'>
                            <h2>원주DB, 22-23시즌 업무 대행사 선정공고(이벤트,장치장식물,온라인마케팅)</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <ul>
                                            <li><span>작성일</span>2022-06-02</li>
                                            <li><span>조회</span></li>
                                        </ul>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='notice_content'>
                                        <div>
                                            <img src="images/notice10.png" alt="상세공지" />
                                            <img src="images/photo_1-1.png" alt="상세공지" />
                                            <img src="images/photo_1-2.png" alt="상세공지" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button className='detail_notice_btn' type='button' onClick={onSubmit}>목록으로</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </article> */}
                </div>
            </div> 
        </div>
    );
};

export default DetailNotice;