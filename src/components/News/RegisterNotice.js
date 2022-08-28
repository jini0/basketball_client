import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterNotice = () => {
    const today = new Date(); 
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    // const dateString = year + '-' + month  + '-' + day;
    const dateString = year +  month  + day;    //작성일 varchar(8)로 하고 작성일에 정규표현식으로 - 붙여서!

    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        c_title: "",
        c_date: dateString,
        c_address1: "",
        c_address2: "",
        c_img1: "",
        c_img2: "",
        c_img3: "",
        c_img4: "",
        c_img5: "",
        c_desc: ""
    })

    //input - onChange이벤트
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    //input - 이미지 - onChange이벤트
    const onChangeImg = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] :value.replace("C:\\fakepath\\","images/")
        })
    }
    //폼 onSubmit 이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("게시글등록");
        console.log(formData);

        //address1 / address2 // imgsrc2 / imgsrc3 / imgsrc4 / imgsrc5 / desc 는 null가능!
        if(formData.c_title !== "" && formData.c_date !== "" && formData.c_img1 !== ""){
            registerNotice();
        } else {
            alert("항목을 입력하세요");
        }
        //등록함수
        function registerNotice(){
            axios.post('http://localhost:8000/registerNotice', (formData))
            .then(res=>{
                console.log(res);
                navigate(-1);   // '/notice'(이전)으로 이동
            })
            .catch(e=>{
                console.log(e);
                alert('공지사항을 등록하는 도중 오류가 발생하였습니다.')
            })
        }
    }
    const check = ()=>{
        console.log(formData);
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>공지사항 등록</h3>
                <p>게시글을 등록하세요.</p>
            </div>
            <div id='uploadBox'>
                <div className='inner'>
                    <p>#링크1/2와 사진 2/3/4/5는 생략가능합니다.</p>
                    <form onSubmit={onSubmit}>
                        <ul>
                            <li>
                                <label htmlFor="title">제목</label>
                                <input type="text" name='c_title' value={formData.c_title} onChange={onChange}/>
                            </li>
                            <li>
                                <label htmlFor="date">작성일</label>
                                <input type="text" name='c_date' min={0} value={formData.c_date} onChange={onChange} readOnly/>
                            </li>
                            <li>
                                <label htmlFor="address1">링크</label>
                                <input type="text" name='c_address1' min={0} value={formData.c_address1} onChange={onChange} placeholder="생략가능"/>
                            </li>
                            <li>
                                <label htmlFor="address2">링크2</label>
                                <input type="text" name='c_address2' min={0} value={formData.c_address2} onChange={onChange} placeholder="생략가능" />
                            </li>
                            <li>
                                <label htmlFor="img1">이미지1</label>
                                <input type="file" name="c_img1" onChange={onChangeImg} className="imgView" />
                            </li>
                            <li>
                                <label htmlFor="img2">이미지2</label>
                                <input type="file" name="c_img2" onChange={onChangeImg} className="imgView"/>
                            </li>
                            <li>
                                <label htmlFor="img3">이미지3</label>
                                <input type="file" name="c_img3" onChange={onChangeImg} className="imgView"/>
                            </li>
                            <li>
                                <label htmlFor="img4">이미지4</label>
                                <input type="file" name="c_img4" onChange={onChangeImg} className="imgView"/>
                            </li>
                            <li>
                                <label htmlFor="img5">이미지5</label>
                                <input type="file" name="c_img5" onChange={onChangeImg} className="imgView"/>
                            </li>
                            <li>
                                <label htmlFor="desc">내용</label>
                                <textarea name="noticeDesc" type="text" 
                                value={formData.c_desc} onChange={onChange}>
                                </textarea>
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

export default RegisterNotice;