// import axios from 'axios';
// import React from 'react';
// import { useState } from 'react';

// const CartList = ({cart}) => {
//     //check한 애들 선택하기 
//     const [ checked, setChecked ] = useState([]);

//     //input - formData
//     const onChecked = (id) => {
//         console.log(checked);
//         console.log(checked[0]);
//         setChecked([ ...checked, id ]);
//     }

//     const onDelete = () => {
//         const checkedLength = checked.length;   // check한 목록들을 -> 배열에 담음
//         if(window.confirm("삭제하시겠습니까?")){
//             for(let i=0; i<checkedLength; i++){
//                 axios.delete(`http://localhost:8001/delCart/${checked[i]}`)
//                 // axios.delete(`${API_URL}/delCart/${checked[i]}`)
//                 .then(res=>{
//                     console.log("삭제 완료!");
//                     setChecked([]);
//                     // window.location.reload();
//                 })
//                 .catch(err=>{
//                     console.log(err);
//                 })
//             } 
//         } else{
//             alert("삭제가 취소되었습니다");
//         }
//     }

//     return (
//         <tr>
//             <td><input type="checkbox" value={cart.id} onChange={()=>onChecked(cart.id)}/></td>
//             <td><img src={"../"+cart.imgsrc} alt=""/></td>
//             <td>{cart.name}</td>
//             <td>{cart.saleprice.toLocaleString('ko-KR')}원</td>
//             <td>{cart.select}허웅</td>
//             <td>{cart.amount}개</td>
//             <td className='cartPrice'>{(cart.saleprice*cart.amount).toLocaleString('ko-KR')}원</td>
//         </tr>
//     );
// };

// export default CartList;