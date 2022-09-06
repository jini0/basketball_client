import React, { useEffect, useState } from 'react';
import './Fan.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading/Loading';
// import { API_URL } from '../config/contansts';

const Photo = () => {
    // cf.https://wazacs.tistory.com/31 <React 에서 select 사용하기>
    // select - 경기장면 / 응원장면 클릭시 해당 사진만 나오게하기
    const [ selected, setSelected ] = useState("");

    //변수 설정
    const gamePage = document.querySelector('#game_page');
    const cheeringPage = document.querySelector('#cheering_page');
        // eslint-disable-next-line
    if(selected == "1"){
        gamePage.style.display = "flex";
        cheeringPage.style.display = "none";
        // eslint-disable-next-line
    } else if(selected == "2") {
        cheeringPage.style.display = "flex";
        gamePage.style.display = "none";    
    }
    // onChange 이벤트
    const handleSelect = (e) => {
        setSelected(e.target.value);
    }

    // mysql로 데이터 부르기
    const [ photos, setPhotos ] = useState([]);

    useEffect(()=>{ 
        axios.get("http://localhost:8001/photos")
        // axios.get(`${API_URL}/photos`)
        .then(result=>{
            const players = result.data;
            console.log(players);
            // console.log(result.data);
            setPhotos(result.data)
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])

    // *조회수 
    // const { id } = useParams();
    const photoClick = (id) => {
        console.log(id);
        axios.put(`http://localhost:8001/viewPhoto/${id}`)
        // axios.put(`${API_URL}/viewPhoto/${id}`)
        .then(res=>{
            console.log(res);
            // setNotices(res.data.view+1);
            setPhotos(res.data);
        })
        .catch(e=>{
            console.log(e);
        })
    }

    if(!photos) return <Loading/>
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
                                {/* React에서는 option에 selected를 쓰는 대신 select에서 value로 사용!  */}
                                <select className='photo_options' onChange={handleSelect} value={selected}>
                                    <option className='opt' value="1">경기장면</option>
                                    <option className='opt' value="2">응원장면</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='registerBtn'>
                        <button type='submit'><Link to="/registerPhoto">사진 등록</Link></button>
                    </div>
                    {/* 경기장면 클릭시 */}
                    <ul id='game_page'>
                        {photos.filter(e=>e.sort==="경기").map(photo=>(
                            <li onClick={()=>photoClick(photo.id)}>
                                <div className='photo_img'>
                                    <Link to={`/photo/${photo.id}`}>
                                        <img src={photo.imgsrc} alt="포토" />
                                    </Link>
                                </div>
                                <Link to="/detailPhoto">
                                    <div className='photo_info'>
                                        <div className='photo_title'>
                                            <h3><span>{photo.sort}</span>{photo.title}</h3>
                                        </div>
                                        <div className='photo_date'>
                                            <span>{(photo.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                        {/* <li>
                            <div className='photo_img'>
                                <Link to="/detailPhoto">
                                    <img src="images/photo_1.jpg" alt="포토" />
                                </Link>
                            </div>
                            <Link to="/detailPhoto">
                                <div className='photo_info'>
                                    <div className='photo_title'>
                                        <h3><span>경기</span>[04.05] 원주 DB와 창원 LG의 경기</h3>
                                    </div>
                                    <div className='photo_date'>
                                        <span>2022-04-06</span>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_3.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.30] 원주 DB와 전주 KCC의 경기</h3>
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
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_7.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.21] 원주 DB와 고양 오리온의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-22</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_8.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.19] 원주 DB와 대구 한국가스공사의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-21</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_10.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.17] 원주 DB와 안양 KGC의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-18</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_11.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.14] 원주 DB와 전주 KCC의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-15</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_12.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.12] 원주 DB와 울산 현대모비스의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-14</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_14.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.10] 원주 DB와 수원 KT의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-11</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_15.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>경기</span>[03.06] 원주 DB와 서울 SK의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-07</span>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                    {/* 응원장면 클릭시 */}
                    <ul id='cheering_page'>
                        {photos.filter(e=>e.sort==="응원").map(photo=>(
                            <li onClick={()=>photoClick(photo.id)}>
                                <div className='photo_img'>
                                    <Link to={`/photo/${photo.id}`}>
                                        <img src={photo.imgsrc} alt="포토" />
                                    </Link>
                                </div>
                                <Link to="/detailPhoto">
                                    <div className='photo_info'>
                                        <div className='photo_title'>
                                            <h3><span>{photo.sort}</span>{photo.title}</h3>
                                        </div>
                                        <div className='photo_date'>
                                            <span>{(photo.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</span>
                                        </div>
                                    </div>
                                </Link>
                            </li>
                        ))}
                        {/* <li>
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
                                <img src="images/photo_9.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>응원</span>[03.19] 원주 DB와 대구 한국가스공사의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-21</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_13.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>응원</span>[03.10] 원주 DB와 수원 KT의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-11</span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='photo_img'>
                                <img src="images/photo_16.jpg" alt="포토" />
                            </div>
                            <div className='photo_info'>
                                <div className='photo_title'>
                                    <h3><span>응원</span>[03.06] 원주 DB와 서울 SK의 경기</h3>
                                </div>
                                <div className='photo_date'>
                                    <span>2022-03-07</span>
                                </div>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div> 
        </div>
    );
};

export default Photo;