import React from 'react';
import { useNavigate } from 'react-router-dom';
import './News.css';

const DetailNotice = () => {
    const navigate = useNavigate();

    //button - 목록으로 보내는 함수
    function onSubmit(){
        navigate('/notice');
    }
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>공지사항</h3>
                <p>KBL의 소식 및 공지 안내 페이지입니다.</p>
            </div> 
            <div id='detail_notice'>
                <div className='inner'>
                    <article>
                        <div className='detail_notice_title'>
                            <h2>원주DB, 22-23시즌 업무 대행사 선정공고(이벤트,장치장식물,온라인마케팅)</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <ul>
                                            <li><span>작성일</span>2022-06-02</li>
                                            <li><span>조회</span></li>
                                        </ul>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='notice_content'>
                                        <div>
                                            <img src="images/notice10.png" alt="상세공지" />
                                            {/* <img src="images/photo_1-1.png" alt="상세공지" />
                                            <img src="images/photo_1-2.png" alt="상세공지" /> */}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td>
                                        <button className='detail_notice_btn' type='button' onClick={onSubmit}>목록으로</button>
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

export default DetailNotice;