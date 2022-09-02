// import axios from 'axios';
import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CartList from './CartList';
import { RiDeleteBin5Line } from "react-icons/ri";
// import { useParams } from 'react-router-dom';

const Cart = () => {
    const [ subPrice, setSubPrice] = useState(0);
    const [ totalPrice, setTotalPrice] = useState(0);
    const [ delivery, setDelivery] = useState(2500);

    // mysql로 데이터 불러오기
    const [ carts, setCarts ] = useState([]);
    
    useEffect(()=>{
        axios.get(`http://localhost:8001/cart`)
        .then((result) => {
            const carts = result.data;
            console.log(carts);
            setCarts(result.data); 
            console.log(carts)
            let subNum = 0;

            result.data.forEach(data => {
                subNum = subNum+(data.saleprice*data.amount);
                console.log(data.saleprice);
                setSubPrice(subNum);
                console.log(subNum);
                if(subNum > 50000) {
                    setDelivery(0);
                    setTotalPrice(subPrice);
                } else {
                    setDelivery(2500);
                    setTotalPrice(delivery+subPrice);
                }
            });            
        })   
        .catch(e=> {
            console.log(e);
        })
    // eslint-disable-next-line 
    },[])

    //check한 애들 선택하기 
    const [ checked, setChecked ] = useState([]);
    const onDelete = () => {
        const checkedLength = checked.length;
        for(let i=0; i<checkedLength; i++){
            if(window.confirm("삭제하시겠습니까?")){
                axios.delete(`http://localhost:8001/delCart/${checked[i]}`)
                .then(res=>{
                    console.log("삭제 완료!");
                    setChecked([]);
                    // window.location.reload();
                })
                .catch(err=>{
                    console.log(err);
                })
            } else{
                alert("삭제가 취소되었습니다");
            }
        }
    }


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
                                {carts.map(cart=>(
                                    <CartList key={cart.id} cart={cart} />
                                ))}
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