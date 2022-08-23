import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailPhoto = () => {
    const navigate = useNavigate();

    //button - 목록으로 보내는 함수
    function onSubmit(){
        navigate('/photo');
    }
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>DB Photo</h3>
                <p>DB프로미! 경기장의 열기를 함께하세요!</p>
            </div> 
            <div id='detail_photo'>
                <div className='inner'>
                    <article>
                        <div className='detail_photo_title'>
                            <h2>[04.05] 원주 DB와 창원 LG의 경기</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <ul>
                                            <li><span>작성일</span>2022-04-06</li>
                                            <li><span>조회</span></li>
                                        </ul>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='photo_content'>
                                        <div>
                                            <img src="images/photo_1_1.png" alt="상세포토" />
                                            <img src="images/photo_1_2.png" alt="상세포토" />
                                            <img src="images/photo_1_3.png" alt="상세포토" />
                                            <img src="images/photo_1_4.png" alt="상세포토" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button className='detail_photo_btn' type='button' onClick={onSubmit}>목록으로</button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </article>
                </div>
            </div> 
        </div>
    );
};

export default DetailPhoto;