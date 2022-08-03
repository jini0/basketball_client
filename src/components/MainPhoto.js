import React from 'react';

const MainPhoto = () => {
    return (
        <div id='mainPage'>
            <section id='main_hot_photo'>
                <div className='inner'>
                    <h2>PHOTO GALLERY</h2>
                    <div>
                        <ul>
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
                        </ul>
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
                        <p>사이트 바로가기</p>
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