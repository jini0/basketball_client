import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditPhoto = () => {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        c_title: "",
        c_date: "",
        c_sort: "",
        c_img: "",
        c_img1: "", 
        c_img2: "", 
        c_img3: "", 
        c_img4: "",
        c_view: ""  //readOnly 값변경X
    })

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
    
    // 값 변경시
    useEffect(()=>{
        setFormData({
            c_title: photo? photo.title : "",
            c_date: photo? photo.date : "",
            c_sort: photo? photo.sort : "",
            c_img: photo? photo.imgsrc : "",
            c_img1: photo? photo.imgsrc1 : "",
            c_img2: photo? photo.imgsrc2 :"",
            c_img3: photo? photo.imgsrc3 :"",
            c_img4: photo? photo.imgsrc4 :"",
            c_view: photo? photo.view :""
        })
    },[photo])

    //onChange 이벤트
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    //이미지 onChange 이벤트
    const onChangeImg = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] :value.replace("C:\\fakepath\\","../images/")
        })
    }

    //폼 submit이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("사진 수정");
        // console.log(formData);

        // 작성일 숫자인지 체크
        if(isNaN(+formData.c_date)){
            alert("작성일은 YYMMDD형식으로 입력해주세요.");
            setFormData({
                ...formData,
                c_date:+''
            })
        }
        //값이 있을때
        if(formData.c_title !== "" && formData.c_date !== "" && formData.c_sort !== "" 
        && formData.c_img !== "" && formData.c_img1 !== "" && formData.c_img2 !== ""
        && formData.c_img3 !== "" && formData.c_img4 !== "" && formData.c_view !== ""){
            updatePhoto();
        } else {
            alert("항목을 입력하세요");
        }
        //수정함수 PUT전송
        function updatePhoto(){
            axios.put(`http://localhost:8001/editPhoto/${id}`,formData)
            .then(res=>{
                console.log(res);
                navigate(`/photo/${id}`);
            })
            .catch(e=>{
                console.log('사진 수정에 실패하였습니다.');
                console.log(e);
            })
        }
    }
    //수정button - onClick이벤트
    const onPhotoCheck = ()=>{
        console.log(formData);
    }
    //취소button - onClick이벤트
    const onResetCheck = ()=>{
        navigate(`/photo/${id}`);
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>사진 수정</h3>
                <p>사진을 수정하세요.</p>
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
                                <input type="text" name='c_date' value={formData.c_date} onChange={onChange} required  placeholder="YYMMDD로 입력해주세요."/>
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
                                <button type='submit' onClick={onPhotoCheck}>등록</button>
                                <button type='reset' onClick={onResetCheck}>취소</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPhoto;