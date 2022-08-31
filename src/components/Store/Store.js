import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Store.css';

const Store = () => {
    // mysql로 데이터 부르기
    const [ stores, setStores ] = useState([]);
    const [ allStores, setAllStores ] = useState([]);

    useEffect(()=>{ 
        axios.get("http://localhost:8001/stores")
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            // console.log(result.data);
            setStores(result.data);
            setAllStores(result.data);
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    //sort 분류 - onClick
    function all(){
        setStores(allStores.filter(e=>e.sort));
            // eslint-disable-next-line
        if((allStores.filter(e=>e.sort)) == ''){
            alert('상품이 없습니다.')
        }
    }
    function clothes(){
        setStores(allStores.filter(e=>e.sort === "clothes"));
            // eslint-disable-next-line
            if((allStores.filter(e=>e.sort === "clothes")) == ''){
                alert('해당 상품이 없습니다.')
            }
        }
        function ball(){
        setStores(allStores.filter(e=>e.sort === "ball"));
            // eslint-disable-next-line
            if((allStores.filter(e=>e.sort === "ball")) == ''){
                alert('해당 상품이 없습니다.')
            }
        }
        function caps(){
        setStores(allStores.filter(e=>e.sort === "caps"));
            // eslint-disable-next-line
        if((allStores.filter(e=>e.sort === "caps")) == ''){
            alert('해당 상품이 없습니다.')
        }
    }
    function lifestyle(){
        setStores(allStores.filter(e=>e.sort === "lifestyle"));
            // eslint-disable-next-line 
        if((allStores.filter(e=>e.sort === "lifestyle")) == ''){
            alert('해당 상품이 없습니다.')
        }
    }
    function accessory(){
        setStores(allStores.filter(e=>e.sort === "accessory"));
            // eslint-disable-next-line
        if((allStores.filter(e=>e.sort === "accessory")) == ''){
            alert('해당 상품이 없습니다.')
        }
    }

    //sort2 - button - onClick이벤트
    const uploadList = document.querySelector('.uploadList');
    const rankList = document.querySelector('.rankList');
    const lowList = document.querySelector('.lowList');
    const highList = document.querySelector('.highList');
    const reviewList = document.querySelector('.reviewList');
    const sellList = document.querySelector('.sellList');

    function upload(){
        axios.get("http://localhost:8001/stores")
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            setStores(result.data); 
            uploadList.classList.add('active');
            rankList.classList.remove('active');
            lowList.classList.remove('active');
            highList.classList.remove('active');
            reviewList.classList.remove('active');
            sellList.classList.remove('active');

        })
        .catch(e=>{
            console.log(e);
        })
    }
    function ranking(){
        axios.get("http://localhost:8001/storesRank")
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            setStores(result.data);
            rankList.classList.add('active');
            uploadList.classList.remove('active');
            lowList.classList.remove('active');
            highList.classList.remove('active');
            reviewList.classList.remove('active');
            sellList.classList.remove('active');
        })
        .catch(e=>{
            console.log(e);
        })
    }
    function lowPrice(){
        axios.get("http://localhost:8001/storesLow")
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            setStores(result.data);
            lowList.classList.add('active');
            uploadList.classList.remove('active');
            rankList.classList.remove('active');
            highList.classList.remove('active');
            reviewList.classList.remove('active');
            sellList.classList.remove('active');
        })
        .catch(e=>{
            console.log(e);
        })
    }
    function highPrice(){
        axios.get("http://localhost:8001/storesHigh")
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            // console.log(result.data);
            setStores(result.data);
            highList.classList.add('active');
            uploadList.classList.remove('active');
            rankList.classList.remove('active');
            lowList.classList.remove('active');
            reviewList.classList.remove('active');
            sellList.classList.remove('active');
        })
        .catch(e=>{
            console.log(e);
        })
    }
    // function review(){
    //     axios.get("http://localhost:8001/storesReview")
    //     .then(result=>{
    //         const resultA = result.data;
    //         console.log(resultA);
    //         // console.log(result.data);
    //         setStores(result.data);
    //         reviewList.classList.add('active');
    //         uploadList.classList.remove('active');
    //         rankList.classList.remove('active');
    //         lowList.classList.remove('active');
    //         highList.classList.remove('active');
    //         sellList.classList.remove('active');
    //     })
    //     .catch(e=>{
    //         console.log(e);
    //     })
    // }
    function sellRank(){
        axios.get("http://localhost:8001/storesSell")
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            // console.log(result.data);
            setStores(result.data);
            sellList.classList.add('active');
            uploadList.classList.remove('active');
            rankList.classList.remove('active');
            lowList.classList.remove('active');
            highList.classList.remove('active');
            reviewList.classList.remove('active');
        })
        .catch(e=>{
            console.log(e);
        })
    }

    // 위시리스트 클릭
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>DB Store</h3>
                <p>원주DB프로미의 다양한 굿즈들을 소개합니다.</p>
            </div>  
            <div id='product_category'>
                <section className='inner'>
                    <button type='submit'><Link to="/registerProduct">상품 등록</Link></button>
                </section>
                <section class="categoryList inner">
                    <ul class="clear" id="categorys">
                        <li onClick={all}>ALL</li>
                        <li onClick={clothes}>UNIFORM/CLOTHES</li>
                        <li onClick={ball}>BALL</li>
                        <li onClick={caps}>CAPS</li>
                        <li onClick={lifestyle}>LIFESTYLE</li>
                        <li onClick={accessory}>ACCESSORY</li>
                    </ul>
                </section>
                <section class="inner clear">
                    <ul className='categorization'>
                        <li>
                            <button className='uploadList active' onClick={upload}>신규등록순</button>
                        </li>
                        <li>
                            <button className='rankList' onClick={ranking}>랭킹순</button>
                        </li>
                        <li>
                            <button className='lowList' onClick={lowPrice}>낮은가격순</button>
                        </li>
                        <li>
                            <button className='highList' onClick={highPrice}>높은가격순</button>
                        </li>
                        <li>
                            <button className='reviewList' >상품평많은순</button>
                        </li>
                        <li>
                            <button className='sellList' onClick={sellRank}>판매량순</button>
                        </li>
                    </ul>
                    <div className='ball_dribble_top'>
                        <img src="images/gif-maker.gif" alt="농구공gif" />
                    </div>
                    {/* All */}
                    <ul className='products'>
                        {stores.map(store=>(
                            <li key={store.id}>
                                <div className='product_img'>
                                    <Link to={`/store/${store.id}`}>
                                        <img src={store.imgsrc} alt={store.name} />
                                    </Link>
                                    <span className='wish_btn'></span>
                                </div>
                                <Link to="/detailProduct">
                                    <div className='product_text'>
                                        <h4>{store.name}<span>{store.span}</span></h4>
                                        <div>
                                            {(store.price !== null) &&
                                                <span className='price'>{store.price.toLocaleString('ko-KR')}원</span>
                                            }
                                            <span className='saleprice'>{store.saleprice.toLocaleString('ko-KR')}원</span>
                                            <span className='discount_per'>{store.discountper}</span>
                                        </div>
                                        <span className='store'>{store.seller}</span>
                                    </div>
                                </Link>
                            </li>
                        ))}

                        {/* <li>
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
                        </li> */}
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