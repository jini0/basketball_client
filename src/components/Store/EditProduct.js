import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const navigate = useNavigate();
    //formdata
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

    // mysql로 데이터 불러오기
    const [ product, setProduct ] = useState(null);
    const { id } = useParams();             // id값 받아오기(parameter 사용)

    useEffect(()=>{
        axios.get(`http://localhost:8001/store/${id}`)
        // axios.get(`${API_URL}/store/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            setProduct(results[0]); 
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    // 값 변경시
    useEffect(()=>{
        setFormData({
            c_name: product? product.name : "", 
            c_span: product? product.span : "", 
            c_price: product? product.price : "", 
            c_saleprice: product? product.saleprice : "", 
            c_discountper: product? product.discountper : "", 
            c_seller: product? product.seller : "", 
            c_img: product? product.imgsrc : "", 
            c_desc: product? product.imgdesc : "", 
            c_desc2: product? product.imgdesc2 : "", 
            c_sort: product? product.sortcategory : "", 
            c_ranking: product? product.ranking : "", 
            c_review: product? product.review : "", 
            c_sellrank: product? product.sellrank : "", 
            c_delivery: product? product.delivery : ""
        })
    },[product])

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
    //select - onChange이벤트
    const onChangeSelect = (e)=>{
        const { value } = e.target;
        console.log(value);
        setFormData({
            ...formData,
            c_sort: value
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

    //폼 submit이벤트
    const onSubmit = (e) => {
        e.preventDefault();
        console.log("상품 수정");
        console.log(formData);

        //span/price/discountper/desc2/ranking/sellrank/reivew 는 null가능!
        if(formData.c_name !== "" && formData.c_saleprice !== "" && formData.c_seller !=="" 
        && formData.c_img !== "" && formData.c_desc !== "" && formData.c_sort !== ""
        && formData.c_delivery !== ""){
            updateProduct();
        } else {
            alert("항목을 입력하세요");
        }
        //수정함수 PUT전송
        function updateProduct(){
            axios.put(`http://localhost:8001/editProduct/${id}`,formData)
            // axios.put(`${API_URL}/editProduct/${id}`,formData)
            .then(res=>{
                console.log(res);
                navigate(`/store/${id}`);
            })
            .catch(e=>{
                console.log('상품 수정에 실패하였습니다.');
                console.log(e);
            })
        }
    }
    //수정button - onClick이벤트
    const onCheck = ()=>{
        console.log(formData);
    }
    //취소 클릭
    const cancelClick = () => {
        alert('상품등록을 취소하겠습니다.');
        navigate(-1);
    }
    

    if(!product) return <div>로딩중입니다...</div>
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>상품 수정</h3>
                <p>상품을 수정하세요.</p>
            </div>
            <div id='uploadBox2'>
                <div className='editProduct inner'>
                    <p><span>*</span>필수항목입니다.</p>
                    <form onSubmit={onSubmit}>
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
                                        <select name="c_sort" value={formData.c_sort} onChange={onChangeSelect}>
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
                                <tr className='regiProductBtn'>
                                    <td colSpan={2}>
                                        <button type="submit" onClick={onCheck}>수정</button>
                                        <button type="reset" onClick={cancelClick}>취소</button>
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

export default EditProduct;