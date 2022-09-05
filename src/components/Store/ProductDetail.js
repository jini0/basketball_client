import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getCookie } from '../util/cookie';
// import { API_URL } from '../config/contansts';
// import {  reset } from '../modules/counter';
import PZoomImage from './PZoomImage';

const ProductDetail = () => {
    // // 관리자 로그인시
    // const userId = getCookie('userId');
    // console.log(userId);

    const navigate = useNavigate();
    const uid = getCookie('userId');    //로그인 쿠키값 불러오기

    // mysql로 데이터 불러오기
    const [ store, setStore ] = useState(null);
    // const [ cartData, setCartData ] = useState();

    const { id } = useParams();             // id값 받아오기(parameter 사용)
    useEffect(()=>{
        axios.get(`http://localhost:8001/store/${id}`)
        // axios.get(`${API_URL}/store/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            setStore(results[0]); 
            // setCartData({
            //     c_name : results[0].name,
            //     c_span : results[0].span,
            //     c_saleprice : results[0].saleprice,
            //     c_amount : "",
            //     c_img : results[0].imgsrc,
            //     c_select : results[0].select,
            //     c_userid : ""
            // });
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])


    //select - onChange이벤트
    const onChangeSelect = (e)=>{
        const { value } = e.target;
        console.log(value);
        setCartData({
            ...cartData,
            c_select: value
        })
    }
    //상품 수량 input - onChange이벤트
    const onChange = (e)=>{
        const { value } = e.target;
        console.log(value);
        setCartData({
            ...cartData,
            c_amount: value
        })
        setTotalPrice((store.saleprice)*value)
    }

    //총상품금액 - 상태관리
    const [totalPrice, setTotalPrice] = useState();
    //장바구니
    const [ cartData, setCartData ] = useState({
        c_name : "",
        c_span : "",
        c_saleprice : "",
        c_amount : "",
        c_img : "",
        c_select : "",
        c_userid : ""
    });
    useEffect(()=>{
        setCartData({
            c_name : store ? store.name : "",
            c_span : store ? store.span : "",
            c_saleprice : store ? store.saleprice : "",
            c_amount : store ? store.amount : "",
            c_img : store ? store.imgsrc : "",
            c_select : store ? store.select_option : "",
            c_userid : uid
        })
    // eslint-disable-next-line
    },[store])

    // useEffect(()=> {
    //     reset();
    //     // eslint-disable-next-line
    // },[])

    //상세페이지 - 상세설명/상품후기/배송 menuTab설정
    // list 
    const description = document.querySelector('.detail_description');
    const review = document.querySelector('.detail_review');
    const delivery = document.querySelector('.detail_delivery');
    // list별 내용
    const detailImg = document.querySelector('.detail_img');
    const reviewDesc = document.querySelector('.detail_review_desc');
    const deliveryDesc = document.querySelector('.detail_delivery_desc');

    //list click이벤트
    function desClick(){
        description.classList.add('active');
        review.classList.remove('active');
        delivery.classList.remove('active');
        detailImg.style.display = "block";
        reviewDesc.style.display = "none";
        deliveryDesc.style.display = "none";
    }
    function reviewClick(){
        review.classList.add('active');
        description.classList.remove('active');
        delivery.classList.remove('active');
        reviewDesc.style.display = "block";
        detailImg.style.display = "none";
        deliveryDesc.style.display = "none";
    }
    function deliveryClick(){
        delivery.classList.add('active');
        description.classList.remove('active');
        review.classList.remove('active');
        deliveryDesc.style.display = "block";
        detailImg.style.display = "none";
        reviewDesc.style.display = "none";
    }

    // //카트 추가
    // const pAmount = document.querySelector('#amount');
    // const addCart = ()=>{
    //     // eslint-disable-next-line
    //     if(pAmount.value == 0){
    //         window.alert("수량을 입력해주세요.");
    //     }else{
    //         axios.post(`http://localhost:8001/addCart`, cartData)
    //         // axios.post(`${API_URL}/addCart`, cartData)
    //         .then(res=>{
    //             console.log("카트추가완료");
    
    //             if( window.confirm("장바구니에 담겼습니다. 장바구니로 가시겠습니까?")){
    //                 navigate('/cart');
    //                 console.log("확인")
    //             }else{
    //                 console.log("실패")
    //             }
    //         })
    //         .catch(err=>{
    //             console.log(err);
    //         })
    //     }
    // }

    const pAmount = document.querySelector('#amount');
    async function addCart(e){
        e.preventDefault();
        console.log("여기여기")
        console.log(cartData);
        if(window.confirm("장바구니에 담으시겠습니까?") && uid){    
            // eslint-disable-next-line   
            if(pAmount.value == 0){
                window.alert("수량을 입력해주세요.");
            }
            // console.log(pAmount.value);
            axios.put(`http://localhost:8001/addCart`,cartData)
            .then((result)=>{
                console.log(result);
                // eslint-disable-next-line  
                if(result.data == '있음'){
                    alert('이미 담겨진 상품입니다.')
                    window.location.reload();
                } else {
                    
                        window.confirm("장바구니에 담겼습니다. 장바구니로 이동하시겠습니까?")
                        navigate(`/cart/${uid}`);                    
                }
            })
            .catch(e=>{
                console.log(e);
            })
        } 
         else {
            if(uid) alert("취소되었습니다.");
            else alert("로그인 후 이용바랍니다.");
        }
    }

    //상품 삭제
    const onDelete = () => {
        axios.delete(`http://localhost:8001/delProduct/${id}`)
        // axios.delete(`${API_URL}/delProduct/${id}`)
        .then(res=>{
            console.log("삭제 완료!");
            navigate(-1);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    
    if(!store) return <div>로딩중입니다...</div>
    return (
        <div id='product_detail'>
            <div className='inner'>
                <div id='detailLeft'>
                    <PZoomImage imgsrc={store.imgsrc}/>
                    {/* <div className='zoom'></div> */}
                    {/* <img src="images/goods_metal_sticker.png" alt="상품" /> */}
                </div>
                <div id='detailRight'>
                    <div>
                        <form>
                            <h2>{store.name}<span>{store.span}</span></h2>
                            <div className='detailR'>
                                <ul className='product_desc'>
                                    <li className='product_price'><span>판매가</span> {store.saleprice.toLocaleString('ko-KR')}원</li>
                                    <li><span>배송</span> 택배(주문 시 결제)</li>
                                    <li><span>판매자</span> {store.seller}</li>
                                    <li>
                                        <span>옵션선택</span>
                                        <select name="c_select" value={cartData.c_select} onChange={onChangeSelect}>
                                            <option value="0" disabled="">선수 선택</option>
                                            <option value="1" disabled="">허웅[대형]</option>
                                            <option value="2" disabled="">정준원[대형]</option>
                                            <option value="3" disabled="">이준희[대형]</option>
                                        </select>
                                        <input type="number" placeholder='수량' min="0" id='amount' name="c_amount" value={cartData.c_amount} onChange={onChange} />
                                    </li>
                                </ul>
                                <p className='totalPrice'>총 상품 금액<span>{!totalPrice ? (store.saleprice).toLocaleString('ko-KR') : totalPrice.toLocaleString('ko-KR')}원</span></p>
                                {/* <p className='totalPrice'>총 상품 금액<span>{!totalPrice ? store.saleprice : totalPrice}</span></p> */}
                                <ul>
                                    <li><button onClick={addCart}>ADD TO CART</button></li>
                                    <li><button>구매하기</button></li>
                                </ul>
                            </div>
                        </form>
                        {uid === 'admin' ?
                            <div className='productBtn'>
                                <button id='editBtn' type='submit'><Link to={`/editProduct/${store.id}`}>수정하기</Link></button>
                                <button id='deleteBtn' onClick={onDelete}>삭제하기</button>
                            </div>
                        : ''}
                    </div>
                </div>
            </div>
            <div className='inner' id='detail_desc'>
                <div className='detail_tabMenu'>
                    <ul>
                        <li className='active detail_description' onClick={desClick}>상세설명</li>
                        <li className='detail_review' onClick={reviewClick}>상품후기</li>
                        {/* <li>상품문의</li> */}
                        <li className='detail_delivery' onClick={deliveryClick}>교환/배송/반품</li>
                    </ul>
                </div>
                {/* 상세설명 클릭시 */}
                <div className='detail_img'>
                    <img src={"../"+store.imgdesc} alt="상품설명" />
                    {store.imgdesc2 !== null &&
                        <img src={"../"+store.imgdesc2} alt="상품설명" />
                    }
                </div>
                <div className='detail_review_desc'>

                </div>
                <div className='detail_delivery_desc'>
                    <img src={"../"+store.delivery} alt="교환배송반품" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;