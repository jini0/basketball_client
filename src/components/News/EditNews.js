import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditNews = () => {
    const navigate = useNavigate();
    //formdata
    const [ formData, setFormData ] = useState({
        c_title: "",
        c_date: "",
        c_address: "",
        c_view: ""
    })

    // mysql로 데이터 불러오기
    const [ news, setNews ] = useState(null);
    const { id } = useParams();             // id값 받아오기(parameter 사용)

    useEffect(()=>{
        axios.get(`http://localhost:8001/news/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            setNews(results[0]); 
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])
    
    // 값 변경시
    useEffect(()=>{
        setFormData({
            c_title: news? news.title : "",
            c_date: news? news.date : "",
            c_address: news? news.address : "",
            c_view: news? news.view :""
        })
    },[news])

    //onChange 이벤트
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    //폼 submit이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("게시글 수정");
        console.log(formData);

        // 작성일 숫자인지 체크
        if(isNaN(+formData.c_date)){
            alert("작성일은 YYMMDD형식으로 입력해주세요.");
            setFormData({
                ...formData,
                c_date:+''
            })
        }
        // 제목 / 작성일 / url주소 / 조회수가 값이 있을때!
        if(formData.c_title !== "" && formData.c_date !== "" && formData.c_address !== "" && formData.c_view !== ""){
            updateNews();
        } else {
            alert("항목을 입력하세요");
        }
        //수정함수 PUT전송
        function updateNews(){
            axios.put(`http://localhost:8001/editNews/${id}`,formData)
            .then(res=>{
                console.log(res);
                navigate(-1);   // "/news" 로 돌아감
            })
            .catch(e=>{
                console.log('게시글 수정에 실패하였습니다.');
                console.log(e);
            })
        }
    }
    //수정button - onClick이벤트
    const onCheck = ()=>{
        console.log(formData);
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>뉴스 수정</h3>
                <p>게시글을 수정하세요.</p>
            </div>
            <div id='uploadBox'>
                <div className='inner'>
                    <form onSubmit={onSubmit}>
                        <ul>
                            <li>
                                <label htmlFor="title">제목</label>
                                <input type="text" name='c_title' value={formData.c_title} onChange={onChange} />
                            </li>
                            <li>
                                <label htmlFor="date">작성일</label>
                                <input type="text" name='c_date' value={formData.c_date} onChange={onChange} placeholder="YYMMDD로 입력해주세요."/>
                            </li>
                            <li>
                                <label htmlFor="address">링크</label>
                                <input type="url" name='c_address' placeholder="url주소를 입력해주세요." value={formData.c_address} onChange={onChange} />
                            </li>                           
                            <li>
                                <label htmlFor="view">조회수</label>
                                <input type="text" name='c_view' value={formData.c_view} onChange={onChange} readOnly />
                            </li>
                            <li id='uploadBtn'>
                                <button type='submit' onClick={onCheck}>수정</button>
                                <button type='reset'>취소</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditNews;