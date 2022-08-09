import React from 'react';
import './Team.css';

const Staff = () => {
    return (
        <div className='teamTab'>
           <div className='teamHeader'>
                <h3>지원 스태프</h3>
                <p>DB프로미를 서포트 해주는 지원스태프들입니다.</p>
            </div> 
            <div>
                <div className='inner'>
                    <ul className='staffList'>
                        <li>
                            <div className='staffList_img'>
                                <img src='images/staff_parkjae.png' alt='박제용스카우터'/>
                            </div>
                            <div className='staffList_text'>
                                <p>박제용 스카우터</p>
                                <p><img src='images/emblem_db.png' alt='원주DB로고'/>원주 DB 프로미</p>
                            </div>
                        </li>  
                        <li>
                            <div className='staffList_img'>
                                <img src='images/staff_shin.png' alt='신상언스카우터'/>
                            </div>
                            <div className='staffList_text'>
                                <p>신상언 스카우터</p>
                                <p><img src='images/emblem_db.png' alt='원주DB로고'/>원주 DB 프로미</p>
                            </div>
                        </li>  
                        <li>
                            <div className='staffList_img'>
                                <img src='images/staff_tae.png' alt='한홍철매니저'/>
                            </div>
                            <div className='staffList_text'>
                                <p>한홍철 매니저</p>
                                <p><img src='images/emblem_db.png' alt='원주DB로고'/>원주 DB 프로미</p>
                            </div>
                        </li>  
                        <li>
                            <div className='staffList_img'>
                                <img src='images/image_prepare.png' alt='김태형통역'/>
                            </div>
                            <div className='staffList_text'>
                                <p>김태형 통역</p>
                                <p><img src='images/emblem_db.png' alt='원주DB로고'/>원주 DB 프로미</p>
                            </div>
                        </li>  
                        <li>
                            <div className='staffList_img'>
                                <img src='images/staff_yoon.png' alt='윤준트레이너'/>
                            </div>
                            <div className='staffList_text'>
                                <p>윤준 트레이너</p>
                                <p><img src='images/emblem_db.png' alt='원주DB로고'/>원주 DB 프로미</p>
                            </div>
                        </li>  
                        <li>
                            <div className='staffList_img'>
                                <img src='images/staff_young.png' alt='김영오트레이너'/>
                            </div>
                            <div className='staffList_text'>
                                <p>김영오 트레이너</p>
                                <p><img src='images/emblem_db.png' alt='원주DB로고'/>원주 DB 프로미</p>
                            </div>
                        </li>  
                        <li>
                            <div className='staffList_img'>
                                <img src='images/image_prepare.png' alt='이진우트레이너'/>
                            </div>
                            <div className='staffList_text'>
                                <p>이진우 트레이너</p>
                                <p><img src='images/emblem_db.png' alt='원주DB로고'/>원주 DB 프로미</p>
                            </div>
                        </li>  
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Staff;