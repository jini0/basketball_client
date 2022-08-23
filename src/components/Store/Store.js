import React from 'react';
import { Link } from 'react-router-dom';
import './Store.css';

const Store = () => {
    // 위시리스트 클릭

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
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '0');return false;" value="0" className="active">ALL</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233150');return false;" value="233150">UNIFORM/CLOTHES</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233151');return false;" value="233151">BALL</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233152');return false;" value="233152">CAPS</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233976');return false;" value="233976">LIFESTYLE</a>
                        </li>
                        <li>
                            <a href="/product" id="categ" onclick="kbl.productList.clickCategories(this, '233153');return false;" value="233153">ACCESSORY</a>
                        </li>
                    </ul>
                </section>
                <section class="inner clear">
                    <ul className='categorization'>
                        <li>
                            <button className='active'>신규등록순</button>
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
                    <ul className='products'>
                        <li>
                            <div className='product_img'>
                                <Link to="/detailProduct">
                                    <img src="images/goods_metal_sticker.png" alt="메탈스티커" />
                                </Link>
                                <span className='wish_btn'></span>
                            </div>
                            <Link to="/detailProduct">
                                <div className='product_text'>
                                    <h4>DB프로미 플레이어 메탈스티커<span>(대형)</span></h4>
                                    <div>
                                        <span className='price'></span>
                                        <span className='saleprice'>6,000원</span>
                                        <span className='discount_per'></span>
                                    </div>
                                    <span className='store'>(주)스미스스포츠</span>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_muffler.png" alt="니트머플러" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 허웅 니트 머플러<span></span></h4>
                                <div>
                                    <span className='price'></span>
                                    <span className='saleprice'>25,000원</span>
                                    <span className='discount_per'></span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_pinButton.png" alt="핀버튼" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 플레이어 핀버튼<span></span></h4>
                                <div>
                                    <span className='price'>2,500원</span>
                                    <span className='saleprice'>500원</span>
                                    <span className='discount_per'>80%</span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_gripTok.png" alt="그립톡" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 플레이어 그립톡<span></span></h4>
                                <div>
                                    <span className='price'>10,000원</span>
                                    <span className='saleprice'>3,000원</span>
                                    <span className='discount_per'>70%</span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_mug.png" alt="머그컵" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 플레이어 머그<span></span></h4>
                                <div>
                                    <span className='price'>10,000원</span>
                                    <span className='saleprice'>3,000원</span>
                                    <span className='discount_per'>70%</span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_uniform.png" alt="시티유니폼" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 21-22시즌 시티유니폼<span>[무료마킹]</span></h4>
                                <div>
                                    <span className='price'>49,000원</span>
                                    <span className='saleprice'>30,000원</span>
                                    <span className='discount_per'>39%</span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_uniform_home.png" alt="홈유니폼" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 21-22시즌 홈 유니폼<span>[무료마킹]</span></h4>
                                <div>
                                    <span className='price'></span>
                                    <span className='saleprice'>39,000원</span>
                                    <span className='discount_per'></span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_muffler2.png" alt="전사머플러" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 플레이어 전사머플러<span></span></h4>
                                <div>
                                    <span className='price'>19,000원</span>
                                    <span className='saleprice'>5,000원</span>
                                    <span className='discount_per'>74%</span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_signBall.png" alt="사인볼" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 21-22시즌 사인볼<span></span></h4>
                                <div>
                                    <span className='price'></span>
                                    <span className='saleprice'>15,000원</span>
                                    <span className='discount_per'></span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_keyRing.png" alt="스트랩키링" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 스트랩 키링<span></span></h4>
                                <div>
                                    <span className='price'></span>
                                    <span className='saleprice'>11,000원</span>
                                    <span className='discount_per'></span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_figure.png" alt="미니등신대" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 플레이어 미니등신대<span></span></h4>
                                <div>
                                    <span className='price'>11,000원</span>
                                    <span className='saleprice'>3,000원</span>
                                    <span className='discount_per'>73%</span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_blanket.png" alt="무릎담요" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 플레이어 무릎담요<span></span></h4>
                                <div>
                                    <span className='price'>25,000원</span>
                                    <span className='saleprice'>5,000원</span>
                                    <span className='discount_per'>80%</span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_keyRing2.png" alt="키링" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 플레이어 키링<span></span></h4>
                                <div>
                                    <span className='price'>10,000원</span>
                                    <span className='saleprice'>3,000원</span>
                                    <span className='discount_per'>70%</span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
                        </li>
                        <li>
                            <div className='product_img'>
                                <img src="images/goods_sticker.png" alt="스티커세트" />
                                <span className='wish_btn'></span>
                            </div>
                            <div className='product_text'>
                                <h4>DB프로미 스티커세트<span></span></h4>
                                <div>
                                    <span className='price'></span>
                                    <span className='saleprice'>4,000원</span>
                                    <span className='discount_per'></span>
                                </div>
                                <span className='store'>(주)스미스스포츠</span>
                            </div>
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