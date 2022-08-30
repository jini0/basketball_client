import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterNews = () => {
    const today = new Date(); 
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = year +  month  + day;    //작성일 varchar(8)로 하고 작성일에 정규표현식으로 - 붙여서!

    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        c_title: "",
        c_date: dateString,
        c_address: "",
        c_view: 0
    })

    //input - onChange이벤트
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }

    //폼 onSubmit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("게시글등록");
        console.log(formData);

        // 제목 / 작성일 / url주소 / 조회수가 값이 있을때!
        if(formData.c_title !== "" && formData.c_date !== "" && formData.c_address !== "" && formData.c_view !== ""){
            registerNews();
        } else {
            alert("항목을 입력하세요");
        }
        //등록함수
        function registerNews(){
            axios.post('http://localhost:8001/registerNews', (formData))
            .then(res=>{
                console.log(res);
                navigate(-1);   // '/news'(이전)으로 이동
            })
            .catch(e=>{
                console.log(e);
                alert('뉴스를 등록하는 도중 오류가 발생하였습니다.')
            })
        }
    }
    const check = ()=>{
        console.log(formData);
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>뉴스 등록</h3>
                <p>게시글을 등록하세요.</p>
            </div>
            <div id='uploadBox'>
                <div className='inner newsUpload'>
                    <form onSubmit={onSubmit} className='newsUpload_form'>
                        <ul className='newsUpload_ul'>
                            <li>
                                <label htmlFor="title">제목</label>
                                <input type="text" name='c_title' value={formData.c_title} onChange={onChange}/>
                            </li>
                            <li>
                                <label htmlFor="date">작성일</label>
                                <input type="text" name='c_date' value={formData.c_date} onChange={onChange} readOnly/>
                            </li>
                            <li>
                                <label htmlFor="address">링크</label>
                                <input type="url" name='c_address' value={formData.c_address} onChange={onChange} placeholder="url주소를 입력해주세요."/>
                            </li>
                            <li>
                                <label htmlFor="view">조회수</label>
                                <input type="text" name='c_view' value={formData.c_view} onChange={onChange} readOnly />
                            </li>
                            <li id='uploadBtn'>
                                <button type='submit' onClick={check}>등록</button>
                                <button type='reset'>취소</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterNews;