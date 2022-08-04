import React from "react";
import Slider from "react-slick";
// import styled from "styled-components";
// 슬라이드 스타일
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// https://poew.tistory.com/707
// https://fromnowwon.tistory.com/entry/react-slick-slider
// https://bum-developer.tistory.com/entry/NPM-react-slick
//슬라이드 CSS
// const StyledSlider = styled(Slider)`
//     .slick-list {
//         width: 100%;
//         margin: 0 auto;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }
// `

const MainMovie = () => {
    // 다음 버튼 커스텀
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#03662c" }}
            onClick={onClick}
          />
        );
      }
      // 이전 버튼 커스텀
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "#03662c" }}
            onClick={onClick}
          />
        );
      }
    //슬라이드 설정
    const settings = {
        // dots: true,          // 슬라이드 밑에 점 보이게
        rows: 1,                // 몇 줄로 할 것인지
        infinite: true,         // 무한으로 반복
        speed: 500,             // 슬라이드가 넘어갈 때 속도(500 -> 0.5초)     
        autoplay: true,         // 자동
        autoplaySpeed: 2000,    // 자동 넘어가는 속도
        slidesToShow: 3,        // 3장씩 보이게
        slidesToScroll: 1,      // 1장씩 뒤로 넘어가게
        centerMode: true,       // 정중앙 정렬  / centerMode의 가운데 슬라이드가 강조하는 등의 설정이 안 된다. 해당 부분은 추가로 css 옵션을 줘야 한다.
        centerPadding: '0px',   // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
        cssEase: "linear",       // 슬라이드 이동 스타일 수정
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div id='mainPage'>
            <section id='main_movie_clips'>
                <div className='inner movie_inner'>
                    <img src='images/basketball.png' alt='농구공'/>
                    <h2>DB PROMY YOUTUBE</h2>
                    <img src='images/basketball.png' alt='농구공'/>
                    <div id="main_movie_slide">
                    {/* 항목들 슬라이드로 할거임! */}
                        <Slider {...settings} className="slide">
                            <div className='main_index_3'>
                                <img src='images/youtube_1.png' alt='유튜브화면1' />
                                <div className='main_index_text_3'>
                                    <h4>소중한 땀방울이 모인 DB프로미의 러브하우스🏡</h4>
                                    <span>2022-07-13</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/youtube_2.png' alt='유튜브화면2' />
                                <div className='main_index_text_3'>
                                    <h4>모든 것을 파헤쳐 보자! Welcome Back 두경민의 100문 100답💯</h4>
                                    <span>2022-06-24</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/youtube_3.png' alt='유튜브화면3' />
                                <div className='main_index_text_3'>
                                    <h4>휴가 끝! 새로운 시작!☀ 선수단 소집 그리고 체력 테스트 현장🔥</h4>
                                    <span>2022-06-10</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/youtube_4.png' alt='유튜브화면4' />
                                <div className='main_index_text_3'>
                                    <h4>윈디들 보고싶을거야💚 충성! 잘 다녀오겠습니다🥺</h4>
                                    <span>2022-05-17</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/youtube_5.png' alt='유튜브화면5' />
                                <div className='main_index_text_3'>
                                    <h4>코삼부자 특별 출연! 참을 수 없는 가족과의 비즈니스...💦 허웅의 바디프랜드 광고 촬영 현장📸</h4>
                                    <span>2022-04-20</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/youtube_6.png' alt='유튜브화면6' />
                                <div className='main_index_text_3'>
                                    <h4>티브릿지와 함께하는 TMI 대방출!에 이제 영어 듣기를 곁들인...🎧</h4>
                                    <span>2022-04-14</span>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </section>
        </div>
    );   
};

export default MainMovie;
