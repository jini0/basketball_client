import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_URL } from '../config/contansts';

const EditNotice = () => {
    const navigate = useNavigate();
    //formdata
    const [ formData, setFormData ] = useState({
        c_title: "",
        c_date: "",
        c_address1: "",
        c_address2: "",
        c_img1: "",
        c_img2: "",
        c_img3: "",
        c_img4: "",
        c_img5: "",
        c_desc: "",
        c_view: ""
    })

    // mysql로 데이터 불러오기
    const [ notice, setNotice ] = useState(null);
    const { id } = useParams();             // id값 받아오기(parameter 사용)

    useEffect(()=>{
        // axios.get(`http://localhost:8001/notice/${id}`)
        axios.get(`${API_URL}/notice/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            setNotice(results[0]); 
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])
    
    // 값 변경시
    useEffect(()=>{
        setFormData({
            c_title: notice? notice.title : "",
            c_date: notice? notice.date : "",
            c_address1: notice? notice.address : "",
            c_address2: notice? notice.address2 : "",
            c_img1: notice? notice.imgsrc : "",
            c_img2: notice? notice.imgsrc2 :"",
            c_img3: notice? notice.imgsrc3 :"",
            c_img4: notice? notice.imgsrc4 :"",
            c_img5: notice? notice.imgsrc5 :"",
            c_desc: notice? notice.noticedesc :"",
            c_view: notice? notice.view :""
        })
    },[notice])

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
        //address1 / address2 // imgsrc2 / imgsrc3 / imgsrc4 / imgsrc5 / desc 는 null가능!
        if(formData.c_title !== "" && formData.c_date !== "" && formData.c_img1 !== ""){
            updateNotice();
        } else {
            alert("항목을 입력하세요");
        }
        //수정함수 PUT전송
        function updateNotice(){
            // axios.put(`http://localhost:8001/editNotice/${id}`,formData)
            axios.put(`${API_URL}/editNotice/${id}`,formData)
            .then(res=>{
                console.log(res);
                navigate(`/notice/${id}`);
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
    
    if(!notice) return <div>로딩중입니다...</div>
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>공지사항 수정</h3>
                <p>게시글을 수정하세요.</p>
            </div>
            <div id='uploadBox'>
                <div className='inner'>
                    <p>#링크1/2, 사진 2/3/4/5, 내용은 생략가능합니다.</p>
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
                                <label htmlFor="address1">링크</label>
                                <input type="url" name='c_address1' placeholder="생략가능"  value={formData.c_address1} onChange={onChange} />
                            </li>
                            <li>
                                <label htmlFor="address2">링크2</label>
                                <input type="url" name='c_address2' placeholder="생략가능" value={formData.c_address2} onChange={onChange} />
                            </li>
                            <li>
                                <label htmlFor="img1">이미지1</label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg1" value={formData.c_img1} />
                                    <input type="file" name="c_img1" className="imgView" onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img1}dddd</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="img2">이미지2</label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg2" value={formData.c_img2} />
                                    <input type="file" name="c_img2" className="imgView" onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img2}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="img3">이미지3</label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg3" value={formData.c_img3} />
                                    <input type="file" name="c_img3" className="imgView" onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img3}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="img4">이미지4</label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg4" value={formData.c_img4} />
                                    <input type="file" name="c_img4" className="imgView" onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img4}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="img5">이미지5</label>
                                <div className='imgDiv'>
                                    <input type="hidden" name="oldimg5" value={formData.c_img5} />
                                    <input type="file" name="c_img5" className="imgView" onChange={onChangeImg}/>
                                    <label className='imgFile'>파일선택</label>
                                    <label className='imgLabel'>{formData.c_img5}</label>
                                </div>
                            </li>
                            <li>
                                <label htmlFor="view">조회수</label>
                                <input type="text" name='c_view' value={formData.c_view} onChange={onChange} readOnly />
                            </li>
                            <li>
                                <label htmlFor="desc">내용</label>
                                <textarea cols={50} rows={10} name="c_desc" type="text" onChange={onChange} 
                                value={formData.c_desc} 
                                >
                                </textarea>
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

export default EditNotice;