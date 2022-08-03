import React from "react";
import Slider from "react-slick";
// https://poew.tistory.com/707

const MainMovie = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px'
    };
    return (
        <div id='mainPage'>
            <section id='main_movie_clips'>
                <div className='inner'>
                    <h2>DB PROMY YOUTUBE</h2>
                    <div>
                        <Slider {...settings}>
                    {/* 항목들 슬라이드로 할거임! */}
                        <ul>
                            <li>
                                <div className='main_index'>
                                    <img src='images/youtube_1.png' alt='유튜브화면1' />
                                    <div className='main_index_text'>
                                        <h4>소중한 땀방울이 모인 DB프로미의 러브하우스🏡</h4>
                                        <span>2022-07-13</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='main_index'>
                                    <img src='images/youtube_2.png' alt='유튜브화면2' />
                                    <div className='main_index_text'>
                                        <h4>모든 것을 파헤쳐 보자! Welcome Back 두경민의 100문 100답💯</h4>
                                        <span>2022-06-24</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='main_index'>
                                    <img src='images/youtube_3.png' alt='유튜브화면3' />
                                    <div className='main_index_text'>
                                        <h4>휴가 끝! 새로운 시작!☀ 선수단 소집 그리고 체력 테스트 현장🔥</h4>
                                        <span>2022-06-10</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    );   
};

export default MainMovie;
