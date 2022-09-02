import React from 'react';
import { useState } from 'react';

const CartList = ({cart}) => {
    //check한 애들 선택하기 
    const [ checked, setChecked ] = useState([]);

    //input - formData
    const onChecked = (id) => {
        console.log(checked);
        console.log(checked[0]);
        setChecked([ ...checked, id ]);
    }
    return (
        <tr>
            <td><input type="checkbox" value={cart.id} onChange={()=>onChecked(cart.id)}/></td>
            <td><img src={cart.imgsrc} alt=""/></td>
            <td>{cart.name}</td>
            <td>{cart.saleprice.toLocaleString('ko-KR')}원</td>
            <td>{cart.select}허웅</td>
            <td>{cart.amount}개</td>
            <td className='cartPrice'>{(cart.saleprice*cart.amount).toLocaleString('ko-KR')}원</td>
        </tr>
    );
};

export default CartList;