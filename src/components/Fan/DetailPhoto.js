import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const DetailPhoto = () => {
    const navigate = useNavigate();
    // mysql로 데이터 불러오기
    const [ photo, setPhoto ] = useState(null);
    const { id } = useParams();             // id값 받아오기(parameter 사용)

    useEffect(()=>{
        axios.get(`http://localhost:8001/photo/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            setPhoto(results[0]); 
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])
    if(!photo) return <div>로딩중입니다...</div>

    //button - 목록으로 보내는 함수
    function onSubmit(){
        navigate('/photo');
    }

    //게시글 삭제
    const onDelete = () => {
        axios.delete(`http://localhost:8001/delPhoto/${id}`)
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
                <h3>DB Photo</h3>
                <p>DB프로미! 경기장의 열기를 함께하세요!</p>
            </div> 
            <div id='detail_photo'>
                <div className='inner'>
                    <div className='photoBtn'>
                        <button id='editBtn' type='submit'><Link to={`/editPhoto/${photo.id}`}>수정하기</Link></button>
                        <button id='deleteBtn' onClick={onDelete}>삭제하기</button>
                    </div>
                    <article>
                        <div className='detail_photo_title'>
                            <h2>{photo.title}</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <ul>
                                            <li><span>작성일</span>{photo.date}</li>
                                            <li><span>조회</span>{photo.view}</li>
                                        </ul>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='photo_content'>
                                        <div>
                                            <img src={"../"+photo.imgsrc1} alt="상세포토1" />
                                            <img src={"../"+photo.imgsrc2} alt="상세포토2" />
                                            <img src={"../"+photo.imgsrc3} alt="상세포토3" />
                                            <img src={"../"+photo.imgsrc4} alt="상세포토4" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button className='detail_photo_btn' type='button' onClick={onSubmit}>목록으로</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </article>
                </div>
            </div> 
        </div>
    );
};

export default DetailPhoto;