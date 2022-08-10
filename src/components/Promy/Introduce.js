import React from 'react';
import './Promy.css';

const Introduce = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>소개 · 인사말</h3>
                <p>원주DB프로미에 대해 알 수 있는 소개페이지입니다.</p>
            </div> 
            <div id='intro'>
                <div className='inner owner'>
                    <div>
                        <h3>구단주 인사말</h3>
                    </div>
                    <div>
                        <div className='intro_text'>
                            <h4>원주DB프로미 농구단을 사랑해 주시는<br/>
                                농구팬 여러분 안녕하십니까?</h4>
                            <p>항상 저희 구단에 많은 관심과 성원을 보내 주시는 농구팬 여러분께 진심으로 감사드립니다.<br/><br/>

                                2021~2022시즌이 시작됐습니다. 지난 시즌 코로나19와 부진한 성적의 아쉬움을 뒤로 하고, 저희 구단은 새 시즌을 맞아 선수단의 면모를 일신했습니다.<br/><br/>

                                강팀의 전통을 계속 이어갈 수 있도록 최고 수준의 국내선수들과 젊은 외국인선수를 영입하는 등 전력을 보강했습니다.<br/><br/>

                                새롭게 도전하는 2021~2022시즌에 팬 여러분도 저희와 함께 해 주십시오. 농구 이상의 감동을 안겨 드릴 수 있는 DB프로미가 될 것을 약속 드립니다.<br/><br/>

                                감사합니다.<br/><br/>

                                DB프로미 농구단<br/>
                                구단주 김정남</p>
                        </div>
                        <div className='intro_img'>
                            <img src="images/greeting_owner.png" alt="구단주"/>
                        </div>
                    </div>
                </div>
                <div className='inner leader'>
                    <div>
                        <h3>단장 인사말</h3>
                    </div>
                    <div>
                        <div className='intro_img'>
                            <img src="images/greeting_leader.png" alt="구단주"/>
                        </div>
                        <div className='intro_text'>
                            <h4>원주DB프로미 농구팬 여러분 안녕하십니까?</h4>
                            <p>저희 원주DB프로미 농구단에 애정을 가지고 응원해 주시는 팬 여러분께 진심으로 감사드립니다.<br/><br/>
                                2021-22시즌을 맞아 저희 구단은 강팀의 전통을 계속 이어가겠습니다.<br/><br/>
                                최고 수준의 국내선수들과 젊은 외국인선수 영입으로 우승에 도전할 수 있도록 만반의 준비를 다 하였습니다.<br/><br/>
                                새 시즌에는 '위드코로나'와 함께 원주종합체육관에서 팬 여러분들을 만날 수 있다는 생각에 가슴 벅차며 팬 여러분들의 뜨거운 함성과 응원에 보답하도록 승리의 희열을 안겨 드리겠습니다.<br/><br/>
                                이번 시즌 최고의 경기, 그 이상의 감동을 드릴 수 있도록 최선을 다하겠습니다.<br/><br/>
                                팬 여러분의 열정과 함께 챔피언의 꿈을 향해 새롭게 도전해 나가겠습니다.<br/><br/>
                                감사합니다.<br/><br/>
                                Go beyond<br/><br/>
                                DB프로미 농구단<br/>
                                단장 권순철</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Introduce;