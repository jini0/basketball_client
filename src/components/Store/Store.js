import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { API_URL } from '../config/contansts';
import { getCookie } from '../util/cookie';
import './Store.css';

const Store = () => {
    // 관리자 로그인시
    const userId = getCookie('userId');
    console.log(userId);

    // mysql로 데이터 부르기
    const [ stores, setStores ] = useState([]);
    const [ allStores, setAllStores ] = useState([]);

    useEffect(()=>{ 
        axios.get("http://localhost:8001/stores")
        // axios.get(`${API_URL}/stores`)
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

    // 0. 찜하기 - 상태관리 - state의 초기값 설정 
    const [isWishAdd, setIsWishAdd] = useState(false);
    const [wishCount, setWishCount] = useState(808); 

    // 1. 찜하기 버튼을 누를 때마다 boolean 값이 변경되는 함수 작성
    // - wishAddHandler 함수를 wishCountHandler 함수 안에 넣어줄 것이다.
    // - onClick 이 될 때마다 isWishAdd state 의 boolean 값이 변경된다.
    const wishAddHandler = () => {
        setIsWishAdd(!isWishAdd)
    }
    // 2. 찜하기 숫자 올리고 백엔드에 데이터 보내는 wishCountHandler 함수 작성
    // 찜하기 버튼 - onClick 이벤트
    // wishCountHandler 함수를 찜하기 버튼의 onClick 이벤트로 넘겨준다.
    // wishCountHandler 함수 안에 wishAddHandler 함수를 넣어준다.
    // isWishAdd 값이 true 일 때 카운트를 +1 해주고 fetch 함수를 사용해서 백엔드 API 주소로 user_id 와 product_id 데이터를 보내준다.
    // 백엔드에서는 위 데이터를 처음 받게 되면 찜하기 카운트가 +1이 될 것이고 한 번 더 클릭했을 때 이미 데이터가 있는 상태인데 데이터를 전달 받으면 카운트가 -1이 될 것이다.
    const wishCountHandler = () => {
        wishAddHandler();
        if (!isWishAdd) {
          setWishCount(wishCount +1)
        //   fetch("http://10.58.0.148:8000/product/dip", {
        //     method: "POST".
        //     body: JSON.stringify({
        //       "user_id": 8,
        //       "product_id": 2
        //     })
        //   })
        } else if (isWishAdd) {
          setWishCount(wishCount -1)
        //   fetch("http://10.58.0.148:8000/product/dip", {
        //     method: "POST".
        //     body: JSON.stringigy({
        //       "user_id": 8,
        //       "product_id: 2
        //     })
        //   })
        }
      }    

    //sort 분류 - onClick
    function all(){
        setStores(allStores.filter(e=>e.sortcategory));
            // eslint-disable-next-line
        if((allStores.filter(e=>e.sortcategory)) == ''){
            alert('상품이 없습니다.')
        }
    }
    function clothes(){
        setStores(allStores.filter(e=>e.sortcategory === "clothes"));
            // eslint-disable-next-line
            if((allStores.filter(e=>e.sortcategory === "clothes")) == ''){
                alert('해당 상품이 없습니다.')
            }
        }
        function ball(){
        setStores(allStores.filter(e=>e.sortcategory === "ball"));
            // eslint-disable-next-line
            if((allStores.filter(e=>e.sortcategory === "ball")) == ''){
                alert('해당 상품이 없습니다.')
            }
        }
        function caps(){
        setStores(allStores.filter(e=>e.sortcategory === "caps"));
            // eslint-disable-next-line
        if((allStores.filter(e=>e.sortcategory === "caps")) == ''){
            alert('해당 상품이 없습니다.')
        }
    }
    function lifestyle(){
        setStores(allStores.filter(e=>e.sortcategory === "lifestyle"));
            // eslint-disable-next-line 
        if((allStores.filter(e=>e.sortcategory === "lifestyle")) == ''){
            alert('해당 상품이 없습니다.')
        }
    }
    function accessory(){
        setStores(allStores.filter(e=>e.sortcategory === "accessory"));
            // eslint-disable-next-line
        if((allStores.filter(e=>e.sortcategory === "accessory")) == ''){
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
        // axios.get(`${API_URL}/stores`)
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
        // axios.get(`${API_URL}/storesRank`)
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
        // axios.get(`${API_URL}/storesLow`)
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
        // axios.get(`${API_URL}/storesHigh`)
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
        // axios.get(`${API_URL}/storesSell`)
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


    if(!stores) return <div className='loading'><div class="wrapper">로딩중입니다...
    <svg class="hourglass" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 206" preserveAspectRatio="none">
        <path class="middle" d="M120 0H0v206h120V0zM77.1 133.2C87.5 140.9 92 145 92 152.6V178H28v-25.4c0-7.6 4.5-11.7 14.9-19.4 6-4.5 13-9.6 17.1-17 4.1 7.4 11.1 12.6 17.1 17zM60 89.7c-4.1-7.3-11.1-12.5-17.1-17C32.5 65.1 28 61 28 53.4V28h64v25.4c0 7.6-4.5 11.7-14.9 19.4-6 4.4-13 9.6-17.1 16.9z"/>
        <path class="outer" d="M93.7 95.3c10.5-7.7 26.3-19.4 26.3-41.9V0H0v53.4c0 22.5 15.8 34.2 26.3 41.9 3 2.2 7.9 5.8 9 7.7-1.1 1.9-6 5.5-9 7.7C15.8 118.4 0 130.1 0 152.6V206h120v-53.4c0-22.5-15.8-34.2-26.3-41.9-3-2.2-7.9-5.8-9-7.7 1.1-2 6-5.5 9-7.7zM70.6 103c0 18 35.4 21.8 35.4 49.6V192H14v-39.4c0-27.9 35.4-31.6 35.4-49.6S14 81.2 14 53.4V14h92v39.4C106 81.2 70.6 85 70.6 103z"/>
    </svg>
</div></div>
   
   return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>DB Store</h3>
                <p>원주DB프로미의 다양한 굿즈들을 소개합니다.</p>
            </div>  
            <div id='product_category'>
                <section className='inner'>
                    {userId === 'admin' ?
                        <button type='submit'><Link to="/registerProduct">상품 등록</Link></button>
                    : '' }
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
                                    <span className='wish_btn'><button onClick={wishCountHandler}></button></span>
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