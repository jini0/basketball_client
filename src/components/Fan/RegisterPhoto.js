import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';

const RegisterPhoto = () => {
    const today = new Date(); 
    const year = today.getFullYear();
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    const day = ('0' + today.getDate()).slice(-2);
    const dateString = year +  month  + day;    //작성일 varchar(8)로 하고 작성일에 정규표현식으로 - 붙여서!

    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        c_title: "",
        c_date: dateString,
        c_sort: "",
        c_img: "",
        c_img1: "", 
        c_img2: "", 
        c_img3: "", 
        c_img4: "",
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
        console.log("사진등록");
        console.log(formData);

        //값이 있을때
        if(formData.c_title !== "" && formData.c_date !== "" && formData.c_sort !== "" 
        && formData.c_img !== "" && formData.c_img1 !== "" && formData.c_img2 !== ""
        && formData.c_img3 !== "" && formData.c_img4 !== "" && formData.c_view !== ""){
            registerPhoto();
        } else {
            alert("항목을 입력하세요");
        }
        //등록함수
        function registerPhoto(){
            // axios.post('http://localhost:8001/registerPhoto', (formData))
            axios.post(`${API_URL}/registerPhoto`, (formData))
            .then(res=>{
                console.log(res);
                navigate('/photo');   // '/photo'(이전)으로 이동
            })
            .catch(e=>{
                console.log(e);
                alert('사진을 등록하는 도중 오류가 발생하였습니다.')
            })
        }
    }
    const check = ()=>{
        console.log(formData);
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>사진 등록</h3>
                <p>사진을 등록하세요.</p>
            </div>
            <div id='uploadBox'>
                <div className='inner photoUpload'>
                    <form onSubmit={onSubmit} className='photoUpload_form'>
                        <p><span>*</span>는 필수 입력사항입니다.</p>
                        <ul className='photoUpload_ul'>
                            <li>
                                <label htmlFor="title">제목<span>*</span></label>
                                <input type="text" name='c_title' value={formData.c_title} onChange={onChange} required/>
                            </li>
                            <li>
                                <label htmlFor="date">작성일<span>*</span></label>
                                <input type="text" name='c_date' value={formData.c_date} onChange={onChange} readOnly required/>
                            </li>
                            <li>
                                <label htmlFor="sort">카테고리<span>*</span></label>
                                <select name='c_sort' onChange={onChange}>
                                    <option name='c_sort' value="경기">경기</option>
                                    <option name='c_sort' value="응원">응원</option>
                                </select>
                            </li>
                            <li>
                                <label htmlFor="img">메인포토<span>*</span></label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg" value={formData.c_img} />
                                    <input type="file" name="c_img" className="imgView" required onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="img1">상세 포토1<span>*</span></label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg1" value={formData.c_img1} />
                                    <input type="file" name="c_img1" className="imgView" required onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img1}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="img2">상세 포토2<span>*</span></label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg2" value={formData.c_img2} />
                                    <input type="file" name="c_img2" className="imgView" required onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img2}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="img3">상세 포토3<span>*</span></label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg3" value={formData.c_img3} />
                                    <input type="file" name="c_img3" className="imgView" required onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img3}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="img4">상세 포토4<span>*</span></label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg4" value={formData.c_img4} />
                                    <input type="file" name="c_img4" className="imgView" required onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img4}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="view">조회수<span>*</span></label>
                                <input type="text" name='c_view' value={formData.c_view} required onChange={onChange} readOnly />
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

export default RegisterPhoto;