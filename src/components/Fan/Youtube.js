import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import Loading from '../Loading/Loading';
// import { API_URL } from '../config/contansts';
import './Fan.css';

const Youtube = () => {
    // mysql로 데이터 부르기
    const [ youtubes, setyoutubes ] = useState([]);
    const [ youtube, setyoutube ] = useState([]);
    const [ youtubeLatest, setyoutubeLatest ] = useState([]);
    const [ style, setStyle ] = useState({display: 'block'});
    const [ style2, setStyle2 ] = useState({display: 'block'});

    //최신영상
    const onMouseEnter = (e) => {
        setStyle({display: 'block'})
    }
    const onMouseLeave = (e) => {
        setStyle({display: 'none'})
    }
    //클릭시영상
    const onMouseEnter2 = (e) => {
        setStyle2({display: 'block'})
    }
    const onMouseLeave2 = (e) => {
        setStyle2({display: 'none'})
    }

    //전체
    useEffect(()=>{ 
        axios.get("http://localhost:8001/youtubes")
        // axios.get(`${API_URL}/youtubes`)
        .then(result=>{
            const resultA = result.data;
            console.log(resultA);
            setyoutubes(result.data);
            setyoutube(result.data);
            onMouseEnter();
            onMouseLeave2();
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    //최근영상 재생
    useEffect(()=>{ 
        axios.get('http://localhost:8001/youtubeLatest')
        // axios.get(`${API_URL}/youtubeLatest`)
        .then(result=>{
            const resultB = result.data;
            console.log(resultB);
            setyoutubeLatest(result.data);
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    //클릭시
    const youtubeClick = (id) => {
        console.log(id);
        // 클릭시 영상 재생
        axios.get(`http://localhost:8001/youtube/${id}`)
        // axios.get(`${API_URL}/youtube/${id}`)
        .then(res=>{
            console.log(res);
            setyoutube(res.data);
            onMouseLeave();
            onMouseEnter2();
        })
        .catch(e=>{
            console.log(e);
        })

        // 조회수
        axios.put(`http://localhost:8001/viewYoutube/${id}`)
        // axios.put(`${API_URL}/viewYoutube/${id}`)
        .then(res=>{
            console.log(res);
            setyoutube(res.data);
        })
        .catch(e=>{
            console.log(e);
        })
    }

    if(!youtube) return <Loading/>
    if(!youtubeLatest) return <Loading/>
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>DB Youtube</h3>
                <p>DB프로미의 유튜브 채널 영상을 볼 수 있습니다.</p>
            </div>  
            <div id='youtube'>
                <div id='youtube_top' className='inner'>
                    {/* 클릭시 영상 */}
                    <div className='youtube_main view_youtube' style={style2}>
                        {youtube.map(youtub=>(
                            <ReactPlayer 
                            className="youtube_player"
                            url={youtub.url} 
                            width="1200px"
                            height="675px"
                            playing={true}  // true - 자동재생
                            muted={true}    // true - 재생되었을 때 음소거 설정이 디폴트 (playing, muted 속성이 true여야만 자동재생함!!!)
                            controls={true} // true - 유튜브 플레이어 ui를 그대로 가져옴 
                            key={youtub.id}
                            />
                        ))}
                        {youtube.map(youtub=>(
                            <div className='youtube_info' key={youtub.id}>
                                <div className='youtube_title'>
                                    <h3>{youtub.title}</h3>
                                </div>
                                <div className='youtube_date'>
                                    <ul>
                                        <li>{(youtub.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</li>
                                        <li>조회수 : <span>{youtub.view}</span></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                            {/* <ReactPlayer 
                            className="youtube_player"
                            url="https://www.youtube.com/watch?v=lKu7OKwCLCM&t=2s" 
                            width="1200px"
                            height="675px"
                            playing={true}  // true - 자동재생
                            muted={true}    // true - 재생되었을 때 음소거 설정이 디폴트 (playing, muted 속성이 true여야만 자동재생함!!!)
                            controls={true} // true - 유튜브 플레이어 ui를 그대로 가져옴 
                            /> */}
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
                            {/* <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>Welcome DB, 한국 도착한 이선 알바노👋 #shorts</h3>
                                </div>
                                <div className='youtube_date'>
                                    <ul>
                                        <li>2022-08-16</li>
                                        <li>조회수 : <span></span></li>
                                    </ul>
                                </div>
                            </div> */}
                    </div>
                    {/* 최신영상재생 */}
                    <div className='youtube_main view_youtube2' style={style}>
                        {youtubeLatest.map(youtubeLat=>(
                            <ReactPlayer 
                            className="youtube_player"
                            url={youtubeLat.url} 
                            width="1200px"
                            height="675px"
                            playing={true}  // true - 자동재생
                            muted={true}    // true - 재생되었을 때 음소거 설정이 디폴트 (playing, muted 속성이 true여야만 자동재생함!!!)
                            controls={true} // true - 유튜브 플레이어 ui를 그대로 가져옴 
                            key={youtubeLat.id}
                            />
                        ))}
                        {youtubeLatest.map(youtubeLat=>(
                            <div className='youtube_info' key={youtubeLat.id}>
                                <div className='youtube_title'>
                                    <h3>{youtubeLat.title}</h3>
                                </div>
                                <div className='youtube_date'>
                                    <ul>
                                        <li>{(youtubeLat.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</li>
                                        <li>조회수 : <span>{youtubeLat.view}</span></li>
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div id='youtube_bot' className='inner'>
                    <ul>
                        {youtubes.map(youtube=>(
                            <li key={youtube.id} onClick={()=>youtubeClick(youtube.id)}>
                                <div className='youtube_img'>
                                    <img src={youtube.imgsrc} alt="유튜브" />
                                </div>
                                <div className='youtube_info'>
                                    <div className='youtube_title'>
                                        <h3>{youtube.title}</h3>
                                    </div>
                                    <div className='youtube_date'>
                                        {/* <span>{(youtube.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</span> */}
                                        <ul>
                                            <li>{(youtube.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</li>
                                            <li>조회수 : <span>{youtube.view}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}

                        {/* <li>
                            <div className='youtube_img'>
                                <img src="images/youtube_1.png" alt="유튜브" />
                            </div>
                            <div className='youtube_info'>
                                <div className='youtube_title'>
                                    <h3>DB농구 보고 싶은 윈디들?!🙋🏻‍♂ 비시즌 첫 연습 경기 H/L (vs 고려대)</h3>
                                </div>
                                <div className='youtube_date'>
                                    <span>2022-08-25</span>
                                    <ul>
                                        <li>2022-08-16</li>
                                        <li>조회수 : <span></span></li>
                                    </ul>
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
                                    <ul>
                                        <li>2022-08-16</li>
                                        <li>조회수 : <span></span></li>
                                    </ul>
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
                                    <ul>
                                        <li>2022-08-12</li>
                                        <li>조회수<span></span></li>
                                    </ul>
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
                                    <ul>
                                        <li>2022-07-13</li>
                                        <li>조회수<span></span></li>
                                    </ul>
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
                                    <ul>
                                        <li>2022-06-24</li>
                                        <li>조회수<span></span></li>
                                    </ul>
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
                                    <ul>
                                        <li>2022-06-10</li>
                                        <li>조회수<span></span></li>
                                    </ul>
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
                                    <ul>
                                        <li>2022-05-17</li>
                                        <li>조회수<span></span></li>
                                    </ul>
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
                                </div>
                            </div>
                        </li> */}
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