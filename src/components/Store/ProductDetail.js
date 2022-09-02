import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PZoomImage from './PZoomImage';

const ProductDetail = () => {
    const navigate = useNavigate();
    //총상품금액 - 상태관리
    const [totalPrice, setTotalPrice] = useState();
    //장바구니
    const [ cartData, setCartData ] = useState();

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

    // mysql로 데이터 불러오기
    const [ store, setStore ] = useState(null);
    // const [ cartData, setCartData ] = useState();

    const { id } = useParams();             // id값 받아오기(parameter 사용)
    useEffect(()=>{
        axios.get(`http://localhost:8001/store/${id}`)
        .then(result => {
            const results = result.data;
            console.log(results);
            setStore(results[0]); 
            setCartData({
                c_name : results[0].name,
                c_span : results[0].span,
                c_saleprice : results[0].saleprice,
                c_amount : "",
                c_img : results[0].imgsrc,
                c_select : results[0].select,
                c_userid : ""
            });
        })   
        .catch(e=> {
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    //카트 추가
    const pAmount = document.querySelector('#amount');
    const addCart = ()=>{
        // eslint-disable-next-line
        if(pAmount.value == 0){
            window.alert("수량을 입력해주세요.");
        }else{
            axios.post(`http://localhost:8001/addCart`, cartData)
            .then(res=>{
                console.log("카트추가완료");
    
                if( window.confirm("장바구니에 담겼습니다. 장바구니로 가시겠습니까?")){
                    navigate('/cart');
                    console.log("확인")
                }else{
                    console.log("실패")
                }
            })
            .catch(err=>{
                console.log(err);
            })
        }
    }
    
    //select - onChange이벤트
    const onChangeSelect = (e)=>{
        const { value } = e.target;
        console.log(value);
    }
    //상품 수량 input - onChange이벤트
    const onChange = (e)=>{
        const { value } = e.target;
        console.log(value);
        setTotalPrice((store.saleprice)*value)
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
                                    <select onChange={onChangeSelect}>
                                        <option value="0" disabled="">선수 선택</option>
                                        <option value="1" disabled="">허웅[대형]</option>
                                        <option value="2" disabled="">정준원[대형]</option>
                                        <option value="3" disabled="">이준희[대형]</option>
                                    </select>
                                    <input type="number" placeholder='수량' min="0" id='amount' onChange={onChange} />
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