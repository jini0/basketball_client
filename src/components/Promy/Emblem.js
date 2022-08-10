import React, { useEffect } from 'react';
import './Promy.css';

const Emblem = () => {
    useEffect(()=>{
        const emblem = document.querySelector('.logo_emblem');
        const mascot = document.querySelector('.logo_mascot');
        const emblemList = document.querySelector('.emblemList');
        const mascotList = document.querySelector('.mascotList');
        emblem.addEventListener('click',()=>{
            emblem.classList.add('active');
            mascot.classList.remove('active');
            emblemList.style.display = "block";
            mascotList.style.display = "none";
        })
        mascot.addEventListener('click',()=>{
            mascot.classList.add('active');
            emblem.classList.remove('active');
            mascotList.style.display = "block";
            emblemList.style.display = "none";
        })
    },[])
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>엠블럼 · CI</h3>
                <p>원주DB프로미의 엠블럼 및 CI에 대한 설명입니다.</p>
            </div>
            <div className='inner logo'>
                <ul className='logo_tab'>
                    <li className='active logo_emblem'>엠블럼</li>
                    <li className='logo_mascot'>마스코트</li>
                </ul>   
                {/* 엠블럼 클릭시 */}
                <div className='emblemList active'>
                    <h4 className='logo_title'>엠블럼</h4>
                    <p>
                        PROMY(프로미)의 어원은 PROMISE(약속)로, 금융을 모기업으로 하는 DB프로미농구단의 신뢰감과 친근감, 그리고 팬들과의 약속을 꼭 지키겠다는 강한 의지를 내포하고 있다. <br/>캐릭터 또한 약속을 상징하는 손과 승리를 상징하는 농구공을 결합시켜 ‘최강의 약속, 최고의 승부’를 목표로 새롭게 탄생한 DB프로미농구단의 의지를 영동적으로 형상화하였다.<br/> 전체적으로 DB의 로고색인 녹색에 블랙을 조화시켜 규모감과 강렬한 인상을 표현하고 있다.
                    </p>
                    <div>
                        <ul>
                            <li>
                                <strong>LOGO</strong>
                                <div className='bg_pattern'>
                                    <div>
                                        <img src="images/db_logo_desc.png" alt="원주DB로고" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <strong>EMBLEM</strong>
                                <div className='bg_pattern'>
                                    <div>
                                        <img src="images/db_emblem_desc.png" alt="원주DB엠블럼" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* 마스코트 클릭시 */}
                <div className='mascotList'>
                    <h4 className='logo_title'>마스코트</h4>
                    <p>
                        <span>약속대장DB프로미</span> : 좀더 친근하고 귀여운 새로운 캐릭터
                    </p>
                    <p>
                        <span>Green Monster</span> : 구단공식 서포터즈인 그린몬스터를 재미있고 친근하게 상징한 캐릭터
                    </p>
                    <div>
                        <ul>
                            <li>
                                <strong>약속대장DB프로미</strong>
                                <div className='bg_pattern'>
                                    <div>
                                        <img src="images/mascot-db-1.png" alt="약속대장" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <strong>Green Monster</strong>
                                <div className='bg_pattern'>
                                    <div>
                                        <img src="images/mascot-db-2.png" alt="그린몬스터" />
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Emblem;