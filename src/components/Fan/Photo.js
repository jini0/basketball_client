import React from 'react';
import './Fan.css';

const Photo = () => {
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>DB Photo</h3>
                <p>DB프로미! 경기장의 열기를 함께하세요!</p>
            </div>   
            <div id='photo'>
                <div className='inner photo_main'>
                    <div className='photo_category'>
                        <div className='photo_selector'>
                            <label>카테고리</label>
                            <div className='photo_selected'>
                                <div className='photo_text'>경기장면</div>
                                <select className='photo_options'>
                                    <option>경기장면</option>
                                    <option>응원장면</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_1.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[04.05] 원주 DB와 창원 LG의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-04-06</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_2.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>응원</span>[04.05] 원주 DB와 창원 LG의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-04-06</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_3.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[04.05] 원주 DB와 창원 LG의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-04-06</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_4.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>응원</span>[03.30] 원주 DB와 전주 KCC의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-31</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_5.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.26] 원주 DB와 서울 삼성의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-28</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_6.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.23] 원주 DB와 고양 오리온의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-24</span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
    );
};

export default Photo;