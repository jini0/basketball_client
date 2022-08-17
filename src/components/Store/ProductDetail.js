import React from 'react';

const ProductDetail = () => {
    return (
        <div id='product_detail'>
            <div className='inner'>
                <div id='detailLeft'>
                    <img src="images/goods_metal_sticker.png" alt="상품" />
                </div>
                <div id='detailRight'>
                    <div>
                        <h2>DB프로미 플레이어 메탈스티커<span>(대형)</span></h2>
                        <p><span>판매가</span> 6,000원</p>
                        <p><span>배송</span> 택배(주문 시 결제)</p>
                        <p><span>판매자</span> (주)스미스스포츠</p>
                        <select>
                            <option>허웅[대형]</option>
                            <option>정준원[대형]</option>
                            <option>이준희[대형]</option>
                        </select>
                        <input type="number"/>
                        <button>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <div className='inner' id='detail_desc'>
                <div className='detail_tabMenu'>
                    <ul>
                        <li>상세설명</li>
                        <li>상품후기</li>
                        {/* <li>상품문의</li> */}
                        <li>교환/배송/반품</li>
                    </ul>
                </div>
                {/* 상세설명 클릭시 */}
                <div className='detail_img'>
                    <img src="images/goods_metal_sticker_desc.png" alt="상품설명" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;