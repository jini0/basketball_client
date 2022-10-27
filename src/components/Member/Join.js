import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../config/contansts';
import PopupDom from './PopupDom';
import PopupPostCode from "./PopupPostCode";

const Join = () => {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        userId: "",
        userPass: "",
        userPwch: "",
        userName: "",
        userBirthY: "",
        userBirthM: "",
        userBirthD: "",
        userGender: "",
        userPhone: "",
        userPhone2: "",
        userPhone3: "",
        userMail: "",
        userAdd: "",
        userAdd_detail: ""
    })

    // *onChange이벤트
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }

    // < 주소 > 
    //우편번호 관리하기
    const onAddData = (data) => {
        console.log(data);
        setFormData({
            ...formData,
            userAdd: data.address,
            userAdd_detail: data.zonecode
        })
    }
    //팝업창 상태 관리
    const [ isPopupOpen, setIsPopupOpen ] = useState(false); //isPopupOpen 초기값 - false
    //팝업창 상태 true로 변경(함수 호출시 true로 변경!)
    const openPostCode = () =>{
        setIsPopupOpen(true); 
    }
    //팝업창 상태 false로 변경(팝업창 닫음)
    const closePostCode = () =>{
        setIsPopupOpen(false);
    }

     // email& 비밀번호 정규식  
    // https://velog.io/@isabel_noh/React-회원가입-로그인-이메일-및-비밀번호-정규식
    // https://ddeck.tistory.com/42
    // const emailReg = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
    // const passwordReg = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,20}$/;    //영어(소대문자), 숫자 사용하여 8-20자

    // 유효성검사 (!정규표현식으로 작성!)
    // - 아이디 체크
    const [ idCheck, setIdCheck ] = useState(false);
    const onIdCheck = async (e) => {
        let userId = document.querySelector('#userId');
        // const res = await axios.get('http://localhost:8001/idCheck');  //id 중복확인
        const res = await axios.get(`${API_URL}/idCheck`);  //id 중복확인
        const idDB = res.data;
        console.log(idDB);
        let sameNum = 0;
        let idReg = /^[A-Za-z0-9]{4,12}$/;  //영문자/숫자 조합하여 4-12자리
        idDB.forEach( id => {
            if(userId.value === id.userid){
                sameNum++;  //중복횟수++
            }
        });
        if(sameNum !== 0) {
            setFormData({
                ...formData,
                userId: ""
            })
            alert("중복된 아이디입니다.");
        } else if(userId.value === null || userId.value === '') {
            alert("아이디를 입력해주세요.");
        } else if(!idReg.test(userId.value)) {
            alert("영문자/숫자를 조합하여 4-12자로 입력하세요.");
        }
        else {
            alert("사용가능한 아이디입니다.");
            setIdCheck(true);       //아이디 중복체크 및 유효성검사 통과 - true로 변경
        }
    }
    // - 이메일 체크
    const [ mailCheck, setMailCheck ] = useState(false);
    const emailCheck = (e) => {
        const userMail = document.querySelector("#userMail");
        let emailReg = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i; 
        if(emailReg.test(userMail.value) === true) {    //이메일 형식이 올바름
            setMailCheck(true);
        } else {
            // alert("이메일 형식이 맞지 않습니다.");
            setMailCheck(false);
        }
    }
    // - 휴대전화 체크
    // function phoneNumber(e) {
    //     var { name, value } = e.target;
    //     // if (!value) {
    //     //   return "";
    //     // }
    //     value = value.replace(/[^0-9]/g, "");
    //     let result = [];
    //     let restNumber = "";

    //     // 지역번호와 나머지 번호로 나누기
    //     if (value.startsWith("02")) {
    //       // 서울 02 지역번호
    //       result.push(value.substr(0, 2));
    //       restNumber = value.substring(2);
    //     } else if (value.startsWith("1")) {
    //       // 지역 번호가 없는 경우
    //       // 1xxx-yyyy
    //       restNumber = value;
    //     } else {
    //       // 나머지 3자리 지역번호
    //       // 0xx-yyyy-zzzz
    //       result.push(value.substr(0, 3));
    //       restNumber = value.substring(3);
    //     }
     
    //     if (restNumber.length === 7) {
    //       // 7자리만 남았을 때는 xxx-yyyy
    //       result.push(restNumber.substring(0, 3));
    //       result.push(restNumber.substring(3));
    //     } else {
    //       result.push(restNumber.substring(0, 4));
    //       result.push(restNumber.substring(4));
    //     }
    //     value = result.filter((val) => val).join("-");
    //     setFormData({
    //         ...formData,
    //         [name]:value
    //     })
    //     return value;
    //   }
    // - 비밀번호 체크
    const onPwCh = () => {
        const userPw = document.querySelector("#userPw");
        const userPwch = document.querySelector("#pwch");
        userPwch.addEventListener('keyup', ()=>{
            if(userPw.value !== userPwch.value) {
                alert("비밀번호가 일치하지 않습니다.");
            } else {
                console.log(userPw);
            }
        })
    }
    // - 비밀번호 체크
    const [ passCheck, setPassCheck ] = useState(false);
    // *폼 submit이벤트  
    const onSubmit = (e) => {
        console.log(formData.userPhone);
        // if(window.confirm("가입하시겠습니까?")){
            //form에 원래 연결된 이벤트를 제거 --> 다른 페이지로 넘어가지않음!!(이게 없으면 클릭시 새로운 페이지로 넘어가짐!)
            e.preventDefault();                     

            //전화번호가 숫자인지 체크 -varchar로 해서!!(int로 하면 010입력해도 10으로 저장됨..! /0123하면 123이 저장되고!~~)
            if(isNaN(formData.userPhone) || isNaN(formData.userPhone2) || isNaN(formData.userPhone3)){
                alert("전화번호는 숫자만 입력해주세요");
                setFormData({
                    ...formData,
                    userPhone:"",
                    userPhone2:"",
                    userPhone3:""
                })
            } else if(formData.userPhone.length>=4 || formData.userPhone2.length>=5 || formData.userPhone3.length>=5 ) {
                alert("전화번호 양식에 적합하지 않습니다.");
            }    
            // 비밀번호 체크
            let passVal = document.querySelector("#userPw").value;
            console.log(passVal);

            let passwordReg =  /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;    //영어(소대문자), 숫자 사용하여 8-20자
            if(passwordReg.test(passVal) === false) {
                alert('비밀번호는 영문자/숫자를 조합하여 8-20자 입력해주세요.')
            } else {
                setPassCheck(true);
                //input에 값이 있는지 체크하고
                //입력이 다 되어있으면 post전송   -- insert member 해주면 됨!!!
                //필수입력사항 제외하고!! 다 값이 있을때
                if(formData.userId !== "" && formData.userPass !== "" && formData.userName !== ""
                && formData.userPhone !== "" && formData.userPhone2 !== "" && formData.userPhone3 !== ""
                && formData.userGender !== "" && formData.userMail !== "") {
                    if(idCheck && mailCheck){
                        addMember();
                    } else if(!idCheck) { //아이디 체크
                        alert("아이디 중복확인을 해주세요.");
                    } else if(!mailCheck) { //이메일 체크
                        alert("이메일 형식이 맞지 않습니다.");
                    } else if(!passCheck) { //비밀번호 체크
                        alert("비밀번호 형식이 맞지 않습니다.");
                    }
                }
                else {
                    alert("필수 기입란을 모두 입력해주세요.")
                    // console.log(formData.userGender);
                    // console.log(formData.userBirthY);
                    // console.log(formData.userBirthM);
                    // console.log(formData.userBirthD);
                    console.log(formData.userMail);
                    console.log(formData.userPhone);
                    console.log(formData.userPhone2);
                    console.log(formData.userPhone3);
                }
            }
        // } 
        // else {
        //     console.log("가입이 취소되었습니다.");
        // }
    }

    // *addMember()함수 만들기
    function addMember(){
        // axios.post('http://localhost:8001/join', formData)  
        axios.post(`${API_URL}/join`, formData)  
        .then(res=>{
            alert('등록되었습니다.');
            console.log(res);
            navigate('/');      
        })
        .catch(e=>{
            console.log(e)
        })
    }

    //취소 버튼 클릭시 로그인 홈으로
    const onCancel = (e) =>{
        navigate('/login');
    }

    return (
        <div id='join_content'>
            <div className='inner'>
                <div className='join_width'>
                    <img src="images/db_login_logo.png" alt="원주db프로미" />
                    <h4>DB PROMY 회원가입</h4>
                    <p><span>*</span>는 필수 입력사항입니다.</p>
                    <form className="join_form" onSubmit={onSubmit}>
                        <table>
                            <tbody>
                                <tr className='table_id'>
                                    <th>아이디<span>*</span></th>
                                    <td>
                                        <input name="userId" id='userId' placeholder='영문자/숫자를 조합하여 4-12자리 입력' type="text" value={formData.userId} onChange={onChange}/><button type='button' onClick={(e)=>{onIdCheck(e);}}>중복확인</button>
                                    </td>
                                </tr>
                                <tr className='join_input'>
                                    <th>비밀번호<span>*</span></th>
                                    <td>
                                        <input type="password" id="userPw" placeholder='영문자/숫자를 조합하여 8-20자리 입력' name='userPass' value={formData.userPass} onChange={onChange}/>
                                    </td>
                                </tr>
                                <tr className='join_input'>
                                    <th>비밀번호 재확인<span>*</span></th>
                                    <td>
                                        <input type="password" id="pwCh" placeholder='비밀번호를 재입력해주세요.' name='userPwch' value={formData.userPwch} onChange={(e)=>{onChange(e); onPwCh(e);}}/>
                                    </td>
                                </tr>
                                <tr className='join_input'>
                                    <th>이름<span>*</span></th>
                                    <td>
                                        <input type="text" name='userName' onChange={onChange} value={formData.userName}/>
                                    </td>
                                </tr>
                                <tr className='table_birth'>
                                    <th>생년월일</th>
                                    <td>
                                        <input type="text" name='userBirthY' onChange={onChange} value={formData.userBirthY}/>년 <input type="text" name='userBirthM' onChange={onChange} value={formData.userBirthM}/>월 <input type="text" name='userBirthD' onChange={onChange}  value={formData.userBirthD}/>일
                                    </td>
                                </tr>
                                <tr className='table_gender'>
                                    <th>성별<span>*</span></th>
                                    <td>
                                        남<input type="radio" name='userGender' value="남자" onChange={onChange}/>
                                        여<input type="radio" name='userGender' value="여자" onChange={onChange}/>
                                    </td>
                                </tr>
                                <tr className='table_phone'>
                                    <th>휴대전화<span>*</span></th>
                                    <td>
                                        <input type="text" name='userPhone' onChange={onChange} value={formData.userPhone}/> - <input type="text" name='userPhone2' onChange={onChange} value={formData.userPhone2}/> - <input type="text" name='userPhone3' onChange={onChange} value={formData.userPhone3}/>
                                    </td>
                                </tr>
                                <tr className='join_input'>
                                    <th>이메일<span>*</span></th>
                                    <td>
                                        <input type="email" id='userMail' placeholder='abc@xxx.xxx 형식으로 입력해주세요.' name='userMail' value={formData.userMail} onChange={(e)=>{onChange(e); emailCheck(e);}}/>
                                    </td>
                                </tr>
                                <tr className='table_add'>
                                    <th>주소</th>
                                    <td className='tableAdd'>
                                        <input name="userAdd" type="text" onChange={onChange} value={formData.userAdd}/>
                                        <input name="userAdd_detail" type="text" onChange={onChange} value={formData.userAdd_detail}/>
                                        <button type="button" onClick={openPostCode}>우편번호 검색</button>
                                        <div id="popupDom">
                                            {isPopupOpen && (
                                                <PopupDom>
                                                    <PopupPostCode onClose={closePostCode} onAddData={onAddData} />
                                                </PopupDom>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                <tr className='table_submit'>
                                    <td colSpan="2">
                                        <button type='submit'>가입하기</button>
                                        <button type='reset' onClick={onCancel}>취소</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Join;