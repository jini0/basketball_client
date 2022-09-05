import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { useParams } from 'react-router-dom';
// import CartList from './CartList';
// import { API_URL } from '../config/contansts';

const Cart = () => {
    const { idid } = useParams();

    const [ subPrice, setSubPrice] = useState(0);       //제품 합계
    const [ totalPrice, setTotalPrice] = useState(0);   //배송비
    const [ delivery, setDelivery] = useState(2500);    //총금액
    //check한 애들 선택하기 
    const [ checked, setChecked ] = useState([]);
    
    //input - formData
    const onChecked = (id) => {
        console.log(checked);
        console.log(checked[0]);
        setChecked([ ...checked, id ]);
    }
    
    // mysql로 데이터 불러오기 - cart
    const [ carts, setCarts ] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:8001/cart/${idid}`)
        // axios.get(`${API_URL}/cart`)
        .then((result) => {
            const carts = result.data;
            console.log(carts);
            setCarts(result.data); 
            console.log(carts[0].amount);

            let subNum = 0;
            result.data.forEach(data => {
                subNum = subNum+(data.saleprice*Number(data.amount));
                console.log(data.saleprice);   
            });      
            setSubPrice(subNum);
            console.log(subPrice);    
            if(Number(subNum) > 50000) {    //50000원 이상시 배송비 무료
                setDelivery(0);
                // setTotalPrice(subPrice);
                setTotalPrice(subNum);
                console.log(totalPrice);
            } else {
                setDelivery(2500);
                setTotalPrice(delivery+subNum);
                console.log(subPrice);
            }
        })   
        .catch(e=> {
            console.log(e);
        })
    // eslint-disable-next-line 
    },[idid,checked])

    const onDelete = () => {
        const checkedLength = checked.length;   // check한 목록들을 -> 배열에 담음
        if(window.confirm("삭제하시겠습니까?")){
            for(let i=0; i<checkedLength; i++){
                axios.delete(`http://localhost:8001/delCart/${checked[i]}`)
                // axios.delete(`${API_URL}/delCart/${checked[i]}`)
                .then(res=>{
                    console.log("삭제 완료!");
                    setChecked([]);
                    // window.location.reload();
                })
                .catch(err=>{
                    console.log(err);
                })
            } 
        } else{
            alert("삭제가 취소되었습니다");
        }
    }

    // const [ amounts, setAmounts ] = useState({
    //     c_count: ""
    // });
    // useEffect(()=>{
    //     // console.log(carts.amount);   //undefined
    //     console.log(carts[0].amount);  
    //     setAmounts({
            
    //     })
    // },[carts])

    //증가버튼
    async function increase(e) {
        e.preventDefault();

        const { id } = e.target.dataset;
        carts[id]['amount'] += 1;
        console.log("수량");
        console.log(carts[id]['amount'])

        //랜더링 다시하기
        setCarts(carts.map((cart,index) => index === id ? { ...cart, amount: cart.amount+1 } : cart))   
    }
    //감소버튼
    async function decrease(e) {
        e.preventDefault();
        // setAmounts({
        //     ...amounts,
        //     c_count: carts.amount > 1 ? carts.amount - 1 : 1,
        // })
        
        const { id } = e.target.dataset;
        carts[id]['amount'] -= 1;
        console.log("수량");
        console.log(carts[id]['amount'])

        //랜더링 다시하기
        setCarts(carts.map((cart,index) => index === id ? { ...cart, amount: cart.amount-1 } : cart))
    }
    // console.log(carts.length);
    
    
    // if(carts.length === 0) return <div>로딩중...</div>
    if(!carts) return <div>로딩중...</div>
    return (
        <div id='cart'>
            <div className='inner'>
                <h2>CART</h2>
                <div className='cartContent'>
                    <form>
                        <div>
                            <button onClick={onDelete}><RiDeleteBin5Line/></button>
                        </div>
                        <table className='cartTable'>
                            <tbody>
                                <tr className='table_title'>
                                    <td></td>
                                    <td>상품</td>
                                    <td>상품명</td>
                                    <td>가격</td>
                                    <td>옵션</td>
                                    <td>수량</td>
                                    <td>총 가격</td>
                                </tr>
                                {carts.length === 0 ? <tr><td id="noreserve" colSpan={7}>담긴 제품이 없습니다.</td></tr>
                                    : carts.map((cart,index)=>(
                                    <tr>
                                        <td><input type="checkbox" value={cart.id} onChange={()=>onChecked(cart.id)}/></td>
                                        <td><img src={"../"+cart.imgsrc} alt=""/></td>
                                        <td>{cart.name}</td>
                                        <td>{cart.saleprice.toLocaleString('ko-KR')}원</td>
                                        <td>{cart.select_option}</td>
                                        <td> 
                                            <span className='amountBtn'><button onClick={decrease} data-id={index}>-</button></span>          
                                            {cart.amount}  
                                            <span className='amountBtn'><button onClick={increase} data-id={index}>+</button></span>    
                                        </td>
                                        <td className='cartPrice'>{(cart.saleprice*cart.amount).toLocaleString('ko-KR')}원</td>
                                    </tr>
                                ))}
                                {/* {carts.length === 0 ? <tr><td id="noreserve" colSpan={6}>담긴 제품이 없습니다.</td></tr>
                                    : carts.map((cart, index)=>(<CartList key={index} cart={cart}/> ))} */}
                                {/* {carts.map(cart=>(
                                    <CartList key={cart.id} cart={cart} />
                                ))} */}
                            </tbody>
                        </table>
                    </form>
                    <div className="cart_total">
                        <table>
                            <tbody>
                                <tr className='clear'>
                                    <td>제품 합계</td>
                                    <td>{subPrice.toLocaleString('ko-KR')}원</td>
                                </tr>
                                <tr className='clear'>
                                    <td>배송비</td>
                                    <td>{delivery.toLocaleString('ko-KR')}원</td>
                                </tr>
                                <tr className='clear'>
                                    <td>총 결제금액</td>
                                    <td>{totalPrice.toLocaleString('ko-KR')}원</td>
                                </tr>
                        </tbody>
                    </table>
                    <div className='cartBtn'>
                        <button>결제</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};


export default Cart;