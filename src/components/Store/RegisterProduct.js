import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Store.css';

const RegisterProduct = () => {
    const navigate = useNavigate();
    const [ formData, setFormData ] = useState({
        c_name: "", 
        c_span: "", 
        c_price: "", 
        c_saleprice: "", 
        c_discountper: "", 
        c_seller: "", 
        c_img: "", 
        c_desc: "", 
        c_desc2: "", 
        c_sort: "", 
        c_ranking: "", 
        c_review: "", 
        c_sellrank: "", 
        c_delivery: ""
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
            // [name] :value.replace("C:\\fakepath\\","images/")
            [name] :value.replace("C:\\fakepath\\","")
        })
    }
    //input - 할인률 계산
    const onChangeDiscount = (e) => {
        const { name } = e.target;
        const value = (1-Number( formData.c_saleprice/formData.c_price ));
        setFormData({
            ...formData,
            [name] : value
        })
    }

    //폼 onSubmit 이벤트
    const onSubmitch = (e) => {
        e.preventDefault();
        console.log("상품등록");
        console.log(formData);

        //span/price/discountper/desc2/ranking/sellrank/reivew 는 null가능!
        if(formData.c_name !== "" && formData.c_saleprice !== "" && formData.c_seller !=="" 
        && formData.c_img !== "" && formData.c_desc !== "" && formData.c_sort !== ""
        && formData.c_delivery !== ""){
            registerProduct();
        } else {
            alert("항목을 입력하세요");
            console.log(formData.c_sort);
        }
        //등록함수
        function registerProduct(){
            axios.post('http://localhost:8001/registerProduct', (formData))
            // axios.post(`${API_URL}/registerProduct`, (formData))
            .then(res=>{
                console.log(res);
                navigate(-1);   // '/store'(이전)으로 이동
            })
            .catch(e=>{
                console.log(e);
                alert('상품을 등록하는 도중 오류가 발생하였습니다.')
            })
        }
    }

    const check = ()=>{
        console.log(formData);
    }

    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>상품 등록</h3>
                <p>상품을 등록하세요.</p>
            </div>  
            <div id="register_product">
                <div className='inner'>
                    <p><span>*</span>필수항목입니다.</p>
                    <form onSubmit={onSubmitch}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>상품명<span>*</span></td>
                                    <td>
                                        <input name="c_name" type="text" 
                                        value={formData.c_name}
                                        onChange={onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>상품명(span)</td>
                                    <td>
                                        <input name="c_span" type="text" 
                                        value={formData.c_span}
                                        onChange={onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>할인 전 금액</td>
                                    <td>
                                        <input name="c_price" type="text" 
                                        value={formData.c_price}
                                        onChange={onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>할인 금액(최종금액)<span>*</span></td>
                                    <td>
                                        <input name="c_saleprice" type="text" 
                                        value={formData.c_saleprice}
                                        onChange={onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>할인률(%)</td>
                                    <td>
                                        <input name="c_discountper" type="text" 
                                        value={formData.c_discountper}
                                        onChange={onChangeDiscount} />
                                    </td>
                                    {/* <td>
                                        <input name="discountper" type="text" 
                                        value={formData.c_discountper === (1-Number(formData.c_saleprice/formData.c_price))}
                                        onChange={onChange} />
                                    </td> */}
                                </tr>
                                <tr>
                                    <td>판매자<span>*</span></td>
                                    <td>
                                        <input name="c_seller" type="text" 
                                        value={formData.c_seller}
                                        onChange={onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>상품 메인이미지<span>*</span></td>
                                    <td>
                                        <div className='imgDiv'>
                                            <input type="hidden" name="oldimg" value={formData.c_img} />
                                            <input type="file" name="c_img" className="imgView" onChange={onChangeImg}/>
                                            <label className='imgFile'>파일선택</label>
                                            <label className='imgLabel'>{formData.c_img}</label>
                                        </div>  
                                    </td>
                                </tr>
                                <tr>
                                    <td>상품 상세이미지1<span>*</span></td>
                                    <td>
                                        <div className='imgDiv'>
                                            <input type="hidden" name="oldimg1" value={formData.c_desc} />
                                            <input type="file" name="c_desc" className="imgView" onChange={onChangeImg}/>
                                            <label className='imgFile'>파일선택</label>
                                            <label className='imgLabel'>{formData.c_desc}</label>
                                        </div>  
                                    </td>
                                </tr>
                                <tr>
                                    <td>상품 상세이미지2</td>
                                    <td>
                                        <div className='imgDiv'>
                                            <input type="hidden" name="oldimg2" value={formData.c_desc2} />
                                            <input type="file" name="c_desc2" className="imgView" onChange={onChangeImg}/>
                                            <label className='imgFile'>파일선택</label>
                                            <label className='imgLabel'>{formData.c_desc2}</label>
                                        </div>  
                                    </td>
                                </tr>
                                <tr>
                                    <td>분류(카테고리)<span>*</span></td>
                                    <td>
                                        <select>
                                            <option value="0" disabled="">카테고리 선택</option>
                                            <option value="clothes">clothes</option>
                                            <option value="ball">ball</option>
                                            <option value="caps">caps</option>
                                            <option value="lifestye">lifestye</option>
                                            <option value="accessory">accessory</option>
                                        </select>
                                        {/* <input name="c_sort" type="text" 
                                        value={formData.c_sort}
                                        onChange={onChange} /> */}
                                    </td>
                                </tr>
                                <tr>
                                    <td>랭킹</td>
                                    <td>
                                        <input name="c_ranking" type="text" 
                                        value={formData.c_ranking}
                                        onChange={onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>리뷰순 랭킹</td>
                                    <td>
                                        <input name="c_review" type="text" 
                                        value={formData.c_review}
                                        onChange={onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>판매순 랭킹</td>
                                    <td>
                                        <input name="c_sellrank" type="text" 
                                        value={formData.c_sellrank}
                                        onChange={onChange} />
                                    </td>
                                </tr>
                                <tr>
                                    <td>배송관련<span>*</span></td>
                                    <div className='imgDiv'>
                                        <input type="hidden" name="olddelivery" value={formData.c_delivery} />
                                        <input type="file" name="c_delivery" className="imgView" onChange={onChangeImg}/>
                                        <label className='imgFile'>파일선택</label>
                                        <label className='imgLabel'>{formData.c_delivery}</label>
                                    </div> 
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <button type="submit" onClick={check}>등록</button>
                                        <button type="reset">취소</button>
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

export default RegisterProduct;