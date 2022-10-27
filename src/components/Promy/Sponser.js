import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import { API_URL } from '../config/contansts';
import './Promy.css';

const Sponser = () => {
    // mysql로 데이터 부르기
    const [ sponsers, setSponsers ] = useState([]);

    useEffect(()=>{ 
        // axios.get("http://localhost:8001/sponsers")
        axios.get(`${API_URL}/sponsers`)
        .then(result=>{
            const results = result.data;
            console.log(results);
            // console.log(result.data);
            setSponsers(result.data)
        })
        .catch(e=>{
            console.log(e);
        })
        // eslint-disable-next-line
    },[])
    
    if(!sponsers) return <Loading/>
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>스폰서</h3>
                <p>원주DB프로미를 후원 및 제휴하는 든든한 스폰서를 소개합니다.</p>
            </div>   
            <div id='sponser'>
                <div className='inner'>
                    <ul>
                        {sponsers.map(sponser=>(
                            <li key={sponser.id} sponser={sponser}>
                                <strong>{sponser.name}</strong>
                                <a href={sponser.address} target="_blank" rel="noopener noreferrer"><img src={sponser.imgsrc} alt={sponser.name} /></a>
                            </li>
                        ))}

                        {/* <li>
                            <strong>험멜코리아</strong>
                            <a href="http://www.hummel.co.kr/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_1_2.png" alt="험멜코리아" /></a>
                        </li>
                        <li>
                            <strong>원주한빛치과</strong>
                            <a href="https://store.naver.com/hospitals/detail?id=11888179" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_2.png" alt="원주한빛치과" /></a>
                        </li>
                        <li>
                            <strong>성지병원</strong>
                            <a href="https://sjmedi.co.kr:42611/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_3.png" alt="성지병원" /></a>
                        </li>
                        <li>
                            <strong>강원일보</strong>
                            <a href="http://www.kwnews.co.kr/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_4.png" alt="강원일보" /></a>
                        </li>
                        <li>
                            <strong>마이테라스</strong>
                            <a href="https://store.naver.com/restaurants/detail?id=1657333309" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_5.png" alt="마이테라스" /></a>
                        </li>
                        <li>
                            <strong>애플라인드</strong>
                            <a href="https://www.applerind.com/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_6.png" alt="애플라인드" /></a>
                        </li>
                        <li>
                            <strong>링네트</strong>
                            <a href="http://www.ringnet.co.kr/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_7.png" alt="링네트" /></a>
                        </li>
                        <li>
                            <strong>유사나</strong>
                            <a href="https://healthfreedoms.usana.com/ux/dotcom/#!/kor-KR/home" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_8.png" alt="유사나" /></a>
                        </li>
                        <li>
                            <strong>농협하나로</strong>
                            <a href="https://www.nhhanaro.co.kr/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_9.png" alt="농협하나로" /></a>
                        </li>
                        <li>
                            <strong>메가박스</strong>
                            <a href="https://www.megabox.co.kr/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_10.png" alt="메가박스" /></a>
                        </li>
                        <li>
                            <strong>엘가스튜디오</strong>
                            <a href="http://cafe.daum.net/wjelga" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_11.png" alt="엘가스튜디오" /></a>
                        </li>
                        <li>
                            <strong>파스쿠치(봉화산점)</strong>
                            <a href="http://www.caffe-pascucci.co.kr/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_12.png" alt="파스쿠치(봉화산점)" /></a>
                        </li>
                        <li>
                            <strong>치악산한우</strong>
                            <a href="http://www.chiaksanhanwoo.com/main/index" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_13.png" alt="치악산한우" /></a>
                        </li>
                        <li>
                            <strong>토토미닭강정</strong>
                            <a href="http://www.totomichicken.com" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_14.png" alt="토토미닭강정" /></a>
                        </li>
                        <li>
                            <strong>코리아나화장품</strong>
                            <a href="http://www.coreana.com/kor/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_15.png" alt="코리아나화장품" /></a>
                        </li>
                        <li>
                            <strong>온세까세로</strong>
                            <a href="https://www.instagram.com/oncecasero/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_16.png" alt="온세까세로" /></a>
                        </li>
                        <li>
                            <strong>강원만찬</strong>
                            <a href="https://gwmanchan.modoo.at/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_17.png" alt="강원만찬" /></a>
                        </li>
                        <li>
                            <strong>평창산삼마을</strong>
                            <a href="http://wellagingpark.com/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_18.png" alt="평창산삼마을" /></a>
                        </li>
                        <li>
                            <strong>크라이오테라피(원주 무실점)</strong>
                            <a href="https://www.facebook.com/크라이오-테라피-무실점-391240415003484" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_19.png" alt="크라이오테라피(원주 무실점)" /></a>
                        </li>
                        <li>
                            <strong>솔아띠몽</strong>
                            <a href="http://www.solfood.co.kr/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_20.png" alt="솔아띠몽" /></a>
                        </li>
                        <li>
                            <strong>머슬테크</strong>
                            <a href="http://elifestore.co.kr/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_21.png" alt="머슬테크" /></a>
                        </li>
                        <li>
                            <strong>서강식품</strong>
                            <a href="https://smartstore.naver.com/ywc83?NaPm=ct%3Dl6ncp9kt%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dc82a1b33fde88432af57ca6aa667e280a26971e2" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_22.png" alt="서강식품" /></a>
                        </li>
                        <li>
                            <strong>미프</strong>
                            <a href="https://map.naver.com/v5/search/%EC%9B%90%EC%A3%BC%20%EB%AF%B8%ED%94%84%20%EA%B0%80%EA%B2%8C/place/148544666?placePath=%3Fentry=pll%26from=nx%26fromNxList=true&c=14240373.4035744,4485499.5516519,15,0,0,0,dh" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_23.png" alt="미프" /></a>
                        </li>
                        <li>
                            <strong>설성식품</strong>
                            <a href="https://www.sulsungmall.com/" target="_blank" rel="noopener noreferrer"><img src="images/spon_db_24.png" alt="설성식품" /></a>
                        </li> */}
                    </ul>
                    {/* <p>클릭시 홈페이지로 넘어갑니다.</p> */}
                    <p>
                        <span>클</span>
                        <span>릭</span>
                        <span>시</span> 

                        <span>홈</span>
                        <span>페</span>
                        <span>이</span>
                        <span>지</span>
                        <span>로</span> 
                        
                        <span>넘</span>
                        <span>어</span>
                        <span>갑</span>
                        <span>니</span>
                        <span>다</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Sponser;