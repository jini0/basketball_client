import React from 'react';
import ReactPlayer from 'react-player';
import './Fan.css';

const Youtube = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>DB Youtube</h3>
                <p>DB프로미의 유튜브 채널 영상을 볼 수 있습니다.</p>
            </div>  
            <div id='youtube'>
                <div id='youtube_top' className='inner'>
                    <div className='youtube_main'>
                        <ReactPlayer 
                        className="youtube_player"
                        url="https://www.youtube.com/watch?v=lKu7OKwCLCM&t=2s" 
                        width="1200px"
                        height="675px"
                        playing={true}  // true - 자동재생
                        muted={true}    // true - 재생되었을 때 음소거 설정이 디폴트 (playing, muted 속성이 true여야만 자동재생함!!!)
                        controls={true} // true - 유튜브 플레이어 ui를 그대로 가져옴 
                        />
                        {/* 자동재생 되었을 때, 음소거로 영상이 재생되는 것이 마음에 들지 않아 고치려했지만 Chrome 66버전부터는 동영상이 음소거로 되어있어야만 자동으로 재생됨(*따라서 playing, muted속성이 true로 꼭 되어있어야함!)
                        수정>> ReactPlayer 속성중에 controls 속성과 playing 속성을 이렇게 주면 자동재생도 되고 디폴트로 음소거도 되지않는다!
                        <ReactPlayer
                            className="youtube_player"
                            url={""}
                            controls
                            playing={true}
                            width="1200px"
                            height="675px"
                        /> */}
                        <div className='youtube_info'>
                            <div className='youtube_title'>
                                <h3>Welcome DB, 한국 도착한 이선 알바노👋 #shorts</h3>
                            </div>
                            <div className='youtube_date'>
                                {/* <span>2022-08-16</span> */}
                                <ul>
                                    <li>2022-08-16</li>
                                    <li>조회수 : <span></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='youtube_bot' className='inner'>
                    <ul>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_1.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>DB농구 보고 싶은 윈디들?!🙋🏻‍♂ 비시즌 첫 연습 경기 H/L (vs 고려대)</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-08-25</span>
                                    {/* <ul>
                                        <li>2022-08-16</li>
                                        <li>조회수 : <span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_2.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>Welcome DB, 한국 도착한 이선 알바노👋 #shorts</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-08-16</span>
                                    {/* <ul>
                                        <li>2022-08-16</li>
                                        <li>조회수 : <span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_3.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>상처만 남은…찬카소의 화실🎨</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-08-12</span>
                                    {/* <ul>
                                        <li>2022-08-12</li>
                                        <li>조회수<span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_4.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>소중한 땀방울이 모인 DB프로미의 러브하우스🏡</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-07-13</span>
                                    {/* <ul>
                                        <li>2022-07-13</li>
                                        <li>조회수<span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_5.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>모든 것을 파헤쳐 보자! Welcome Back 두경민의 100문 100답💯</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-06-24</span>
                                    {/* <ul>
                                        <li>2022-06-24</li>
                                        <li>조회수<span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_6.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>휴가 끝! 새로운 시작!☀ 선수단 소집 그리고 체력 테스트 현장🔥</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-06-10</span>
                                    {/* <ul>
                                        <li>2022-06-10</li>
                                        <li>조회수<span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_7.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>윈디들 보고싶을거야💚 충성! 잘 다녀오겠습니다🥺</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-05-17</span>
                                    {/* <ul>
                                        <li>2022-05-17</li>
                                        <li>조회수<span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_8.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>코삼부자 특별 출연! 참을 수 없는 가족과의 비즈니스...💦 허웅의 바디프랜드 광고 촬영 현장📸</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-04-20</span>
                                    {/* <ul>
                                        <li>2022-04-20</li>
                                        <li>조회수<span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_9.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>티브릿지와 함께하는 TMI 대방출!에 이제 영어 듣기를 곁들인...🎧</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-04-14</span>
                                    {/* <ul>
                                        <li>2022-04-14</li>
                                        <li>조회수<span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_10.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>윈디 여러분 감사합니다! 승리로 장식한 마지막 홈경기❤‍🔥｜4월 5일 원주 DB vs 창원 LG</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-04-08</span>
                                    {/* <ul>
                                        <li>2022-04-08</li>
                                        <li>조회수<span></span></li>
                                    </ul> */}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Youtube;

// cf.
// #react-youtube
// https://velog.io/@soonmac/React-npm-react-youtube
// https://velog.io/@dooreplay/youtube-api%EB%A1%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8%EC%97%90-%EC%98%81%EC%83%81-%EA%B0%80%EC%A0%B8%EC%98%A4%EA%B8%B0
// https://developers.google.com/youtube/player_parameters
// #iFrame Player Api
// https://developers.google.com/youtube/iframe_api_reference
// #react-player
// https://rosej.tistory.com/31
// https://intrepidgeeks.com/tutorial/react-easily-import-youtube-videos-react-player
// https://www.npmjs.com/package/react-player
// https://developers.google.com/youtube/v3/getting-started?hl=ko