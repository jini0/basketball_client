import React from 'react';
import './Store.css';

const Store = () => {
    // 카테고리 분류 --> 뿌리고나서 filter 사용해서!
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>DB Store</h3>
                <p>원주DB프로미의 다양한 굿즈들을 소개합니다.</p>
            </div>  
            <div id='product_category'>
                <section class="categoryList inner">
                    <ul class="clear" id="categorys">
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '0');return false;" value="0" class="active">ALL</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233150');return false;" value="233150" class="">UNIFORM/CLOTHES</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233151');return false;" value="233151" class="">BALL</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233152');return false;" value="233152" class="">CAPS</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233976');return false;" value="233976" class="">LIFESTYLE</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233153');return false;" value="233153" class="">ACCESSORY</a>
                        </li>
                    </ul>
                </section>
                <section class="inner">
                    <ul>
                        <li>
                            <button>신규등록순</button>
                        </li>
                        <li>
                            <button>랭킹순</button>
                        </li>
                        <li>
                            <button>낮은가격순</button>
                        </li>
                        <li>
                            <button>높은가격순</button>
                        </li>
                        <li>
                            <button>상품평많은순</button>
                        </li>
                        <li>
                            <button>판매량순</button>
                        </li>
                    </ul>
                    {/* All */}
                    <ul>
                        <li>
                            {/* <img /> */}
                        </li>
                    </ul>
                </section>
                <div className='ball_dribble'>
                    <img src="images/gif-maker.gif" alt="농구공gif" />
                </div>
            </div>
        </div>
    );
};

export default Store;