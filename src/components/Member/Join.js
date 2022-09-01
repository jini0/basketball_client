import React, { useState } from 'react';
import PopupDom from './PopupDom';
import PopupPostCode from "./PopupPostCode";

const Join = () => {
    // const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        c_userid: "",
        c_password: "",
        c_pwch: "",
        c_name: "",
        c_birthY: "",
        c_birthM: "",
        c_birthD: "",
        c_gender: "",
        c_phone: "",
        c_phone2: "",
        c_phone3: "",
        c_mail: "",
        c_add: "",
        c_add_detail: ""
    })
    // < 주소 > 
    //우편번호 관리하기
    const onAddData = (data) => {
        console.log(data);
        setFormData({
            ...formData,
            c_add: data.address
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

    // *onChange이벤트
    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    return (
        <div id='join_content'>
            <div className='inner'>
                <div className='join_width'>
                    <img src="images/db_login_logo.png" alt="원주db프로미" />
                    <h4>DB PROMY 회원가입</h4>
                    <p><span>*</span>는 필수 입력사항입니다.</p>
                    <form className="join_form">
                        <table>
                            <tbody>
                                <tr className='table_id'>
                                    <th>아이디<span>*</span></th>
                                    <td>
                                        <input name="c_userid" type="text" value={formData.c_userid} onChange={onChange}/><button>중복확인</button>
                                    </td>
                                </tr>
                                <tr className='join_input'>
                                    <th>비밀번호<span>*</span></th>
                                    <td>
                                        <input type="password" placeholder='영문자/숫자를 조합하여 8-20자리 입력' name='c_password' value={formData.c_password} onChange={onChange}/>
                                    </td>
                                </tr>
                                <tr className='join_input'>
                                    <th>비밀번호 재확인<span>*</span></th>
                                    <td>
                                        <input type="password" placeholder='비밀번호를 재입력해주세요.' name='c_pwch' value={formData.c_pwch} onChange={onChange}/>
                                    </td>
                                </tr>
                                <tr className='join_input'>
                                    <th>이름<span>*</span></th>
                                    <td>
                                        <input type="text" name='c_name' onChange={onChange} value={formData.c_name}/>
                                    </td>
                                </tr>
                                <tr className='table_birth'>
                                    <th>생년월일</th>
                                    <td>
                                        <input type="text" name='c_birthY' onChange={onChange} value={formData.c_birthY}/>년 <input type="text" name='c_birthM' onChange={onChange} value={formData.c_birthM}/>월 <input type="text" name='c_birthD' onChange={onChange}  value={formData.c_birthD}/>일
                                    </td>
                                </tr>
                                <tr className='table_gender'>
                                    <th>성별<span>*</span></th>
                                    <td>
                                        남<input type="radio" name='c_gender' value="남자" onChange={onChange}/>
                                        여<input type="radio" name='c_gender' value="여자" onChange={onChange}/>
                                    </td>
                                </tr>
                                <tr className='table_phone'>
                                    <th>휴대전화<span>*</span></th>
                                    <td>
                                        <input type="text" name='c_phone' onChange={onChange} value={formData.c_phone}/> - <input type="text" name='c_phone2' onChange={onChange} value={formData.c_phone2}/> - <input type="text" name='c_phone3' onChange={onChange} value={formData.c_phone3}/>
                                    </td>
                                </tr>
                                <tr className='join_input'>
                                    <th>이메일<span>*</span></th>
                                    <td>
                                        <input type="email" name='c_mail' value={formData.c_mail}/>
                                    </td>
                                </tr>
                                <tr className='table_add'>
                                    <th>주소</th>
                                    <td className='tableAdd'>
                                        <input name="c_add" type="text" onChange={onChange} value={formData.c_add}/>
                                        <input name="c_add_detail" type="text" onChange={onChange} value={formData.c_add_detail}/>
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
                                        <button type='cancel'>취소</button>
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