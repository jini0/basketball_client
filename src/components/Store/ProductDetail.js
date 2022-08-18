import React from 'react';
import PZoomImage from './PZoomImage';

const ProductDetail = () => {
    return (
        <div id='product_detail'>
            <div className='inner'>
                <div id='detailLeft'>
                    <PZoomImage/>
                    {/* <div className='zoom'></div> */}
                    {/* <img src="images/goods_metal_sticker.png" alt="상품" /> */}
                </div>
                <div id='detailRight'>
                    <div>
                        <h2>DB프로미 플레이어 메탈스티커<span>(대형)</span></h2>
                        <div>
                            <ul className='product_desc'>
                                <li className='product_price'><span>판매가</span> 6,000원</li>
                                <li><span>배송</span> 택배(주문 시 결제)</li>
                                <li><span>판매자</span> (주)스미스스포츠</li>
                                <li>
                                    <span>옵션선택</span>
                                    <select>
                                        <option value="" disabled="" selected="">선수 선택</option>
                                        <option>허웅[대형]</option>
                                        <option>정준원[대형]</option>
                                        <option>이준희[대형]</option>
                                    </select>
                                    <input type="number" placeholder='수량'/>
                                </li>
                            </ul>
                            <p>총 상품 금액<span>30,000원</span></p>
                            <ul>
                                <li><button>ADD TO CART</button></li>
                                <li><button>구매하기</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='inner' id='detail_desc'>
                <div className='detail_tabMenu'>
                    <ul>
                        <li className='active'>상세설명</li>
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