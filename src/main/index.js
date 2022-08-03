import React from 'react';
// import React, { useEffect } from 'react';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const MainPage = () => {
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
            
            
        </div>
    );
};

export default MainPage;