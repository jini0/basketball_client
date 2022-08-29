import React from 'react';
// import React, { useEffect } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Slider from "react-slick";
// 슬라이드 스타일
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MainColumn from '../components/MainColumn';
import MainMovie from '../components/MainMovie';
import MainPhoto from '../components/MainPhoto';
import { Link } from 'react-router-dom';

const MainPage = () => {
    // 슬라이드 설정
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,         
        autoplaySpeed: 2000,    
        slidesToShow: 1,
        slidesToScroll: 1
    };
    // useEffect(()=>{
    //     // 변수
    //     const schedule = document.querySelector('.schedule');
    //     const ranking = document.querySelector('.ranking');
    //     const gameSchedule = document.querySelector('#game_schedule');
    //     const gameRanking = document.querySelector('#game_ranking');

    //     // addEventListener 이벤트 추가
    //     schedule.addEventListener('click',()=>{
    //         schedule.classList.add('active');
    //         ranking.classList.remove('active');
    //         gameSchedule.style.opacity = 1;
    //         gameRanking.style.opacity = 0;
    //     })
    //     ranking.addEventListener('click',()=>{
    //         ranking.classList.add('active');
    //         schedule.classList.remove('active');
    //         gameRanking.style.opacity = 1;
    //         gameSchedule.style.opacity = 0;
    //     })
    // // eslint-disable-next-line
    // },[]);

    return (
        <div id="mainPage">
            <div id='mainSlide'>
                <Slider {...settings}>
                    <div id='main1'>
                        <div id='mainImg'>
                            <img src="images/mainSlide_1.png" alt="메인슬라이드1_1" className='hidden_slide'/>
                            {/* <img src="images/DB_main_slide_3.png" alt="메인슬라이드1_1" className='hidden_slide'/> */}
                            <img src="images/mainSlide_1.png" alt="메인슬라이드1" className='slide' />
                        </div>
                        <div id='mainText'>
                            <div className='seasonText'>
                                {/* <img src='images/mainFlag.png' alt='메인'/> */}
                                <h3>2021-2022 SEASON</h3>
                            </div>
                            <h1>팬 여러분 감사합니다.</h1>
                            <p>
                                2021-2022 시즌은 코로나 상황 속에서도 팬 여러분의 관심과 응원 덕분에<br />
                                새로운 도약의 가능성을 보여준 시즌이었으며,<br/>
                                차기 시즌 더 높은 목표에 도달하도록 최선을 다해 준비하겠습니다.<br/>
                                다시 한 번 팬 여러분께 진심으로 감사드립니다.
                            </p>
                        </div>
                    </div>
                    <div id='main2'>
                        <div id='mainImg2'>
                            <img src="images/mainSlide_2.png" alt="메인슬라이드2"/>
                        </div>
                        <div id='mainText2'>
                            <div>
                                <h4>2022-2023시즌 프로농구</h4>
                                <h2>DB프로미 개막일정</h2>
                            </div>
                            <div>
                                <div className='openingDate'>
                                    <span>시즌 첫 경기</span>
                                    <div>
                                        <span>22.10.15 토 시간미정 고양실내</span>
                                        <p><img src="images/emblem_db.png" alt='db로고'/>원주 DB <span>vs</span> 수원 KT<img src="images/emblem_kt.png" alt='kt로고'/></p>
                                    </div>
                                </div>
                                <div className='openingDate'>
                                    <span>원주 홈 개막</span>
                                    <div>
                                        <span>22.10.22 토 시간미정 원주종합</span>
                                        <p><img src="images/emblem_db.png" alt='db로고'/>원주 DB <span>vs</span> 울산현대모비스<img src="images/emblem_mobis.png" alt='mobis로고'/></p>
                                    </div>
                                </div>
                                <div className='openingDesc'>
                                    <p>※경기 시간은 향후 변경될 수 있음을 알려드립니다.</p>
                                    <h4>팬 여러분의 많은 관심과 성원 부탁드립니다.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="main3">
                        <Link to="/notice/12"><img src="images/mainSlide_3.png" alt="메인슬라이드3" /></Link>
                    </div>
                    <div id="main4">
                        <Link to="/notice/13"><img src="images/mainSlide_4.png" alt="메인슬라이드4" /></Link>
                    </div>
                </Slider>
            </div>
            <MainColumn/>
            <MainMovie />
            <MainPhoto />
        </div>
    );
};

export default MainPage;