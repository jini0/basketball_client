import React from 'react';
import Slider from "react-slick";
// 슬라이드 스타일
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainPhoto = () => {
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
            <section id='main_hot_photo'>
                <div className='inner'>
                    <img src='images/basketball.png' alt='농구공'/>
                    <h2>PHOTO GALLERY</h2>
                    <img src='images/basketball.png' alt='농구공'/>
                    <span>more</span>
                    <div>
                        <Slider {...settings} className="slide">
                            <div className='main_index_3'>
                                <img src='images/photo_1.jpg' alt='핫포토1' />
                                <div className='main_index_text_3'>
                                    <h4><span>경기</span>[04.05] 원주 DB와 창원 LG의 경기</h4>
                                    <span>2022-04-06</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/photo_2.jpg' alt='핫포토2' />
                                <div className='main_index_text_3'>
                                    <h4><span>응원</span>[04.05] 원주 DB와 창원 LG의 경기</h4>
                                    <span>2022-04-06</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/photo_3.jpg' alt='핫포토3' className='main_index_img' />
                                <div className='main_index_text_3'>
                                    <h4><span>경기</span>[04.05] 원주 DB와 창원 LG의 경기</h4>
                                    <span>2022-04-06</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/photo_4.jpg' alt='핫포토2' />
                                <div className='main_index_text_3'>
                                    <h4><span>응원</span>[03.30] 원주 DB와 전주 KCC의 경기</h4>
                                    <span>2022-03-31</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/photo_5.jpg' alt='핫포토3' />
                                <div className='main_index_text_3'>
                                    <h4><span>경기</span>[03.26] 원주 DB와 서울 삼성의 경기</h4>
                                    <span>2022-03-28</span>
                                </div>
                            </div>
                            <div className='main_index_3'>
                                <img src='images/photo_6.jpg' alt='핫포토3' />
                                <div className='main_index_text_3'>
                                    <h4><span>경기</span>[03.23] 원주 DB와 고양 오리온의 경기</h4>
                                    <span>2022-03-24</span>
                                </div>
                            </div>
                        </Slider>
                        {/* <ul>
                            <li>
                                <div className='main_index'>
                                    <img src='images/photo_1.jpg' alt='핫포토1' />
                                    <div className='main_index_text'>
                                        <h4><span>경기</span>[04.05] 원주 DB와 창원 LG의 경기</h4>
                                        <span>2022-04-06</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='main_index'>
                                    <img src='images/photo_2.jpg' alt='핫포토2' />
                                    <div className='main_index_text'>
                                        <h4><span>응원</span>[04.05] 원주 DB와 창원 LG의 경기</h4>
                                        <span>2022-04-06</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className='main_index'>
                                    <img src='images/photo_3.jpg' alt='핫포토3' />
                                    <div className='main_index_text'>
                                        <h4><span>경기</span>[04.05] 원주 DB와 창원 LG의 경기</h4>
                                        <span>2022-04-06</span>
                                    </div>
                                </div>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </section>
            <section id='main_banner_bottom'>
                <div>
                    <img src="images/banner.png" alt='메인광고배너' />
                    <div>
                        <img src='images/DB_insurance_logo.gif' alt='DB손해보험로고' />
                    </div>
                    <div>
                        <p><a href='https://www.idbins.com/FWMAIV0001.do'>사이트 바로가기</a></p>
                    </div>
                    <div>
                        <p>사이트 바로가기</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MainPhoto;