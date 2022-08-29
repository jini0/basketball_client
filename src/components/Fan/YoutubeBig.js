// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import ReactPlayer from 'react-player';

// const YoutubeBig = () => {
//     const [ youtubeBig, setyoutubeBig ] = useState(null);
//     //상세
//     const { id } = useParams();
//     useEffect(()=>{
//         axios.get(`http://localhost:8001/youtube/${id}`)
//         .then(result => {
//             const results = result.data;
//             console.log(results);
//             setyoutubeBig(results[0]); 
//         })   
//         .catch(e=> {
//             console.log(e);
//         })
//         // eslint-disable-next-line
//     },[])
//     if(!youtubeBig) return <div>로딩중입니다...</div>

//     return (
//         <div className='youtube_main'>
//             <ReactPlayer 
//             className="youtube_player"
//             url={youtubeBig.url}
//             width="1200px"
//             height="675px"
//             playing={true}  // true - 자동재생
//             muted={true}    // true - 재생되었을 때 음소거 설정이 디폴트 (playing, muted 속성이 true여야만 자동재생함!!!)
//             controls={true} // true - 유튜브 플레이어 ui를 그대로 가져옴 
//             />
//             <div className='youtube_info'>
//                 <div className='youtube_title'>
//                     <h3>{youtubeBig.title}</h3>
//                 </div>
//                 <div className='youtube_date'>
//                     {/* <span>2022-08-16</span> */}
//                     <ul>
//                         <li>{(youtubeBig.date).replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')}</li>
//                         <li>조회수 : <span>{youtubeBig.view}</span></li>
//                     </ul>
//                 </div>
//             </div>   
//         </div>
//     );
// };

// export default YoutubeBig;