// import React, { useEffect, useState } from 'react';
// import { useLocation, useParams } from 'react-router-dom';
// import axios from 'axios';
// import useAsync from '../../hooks/useAsync';
// import Notice from '../News/Notice';

// async function searching(check) {
//     const res = await axios.get(`http://localhost:8001/search/${check}`);
//     console.log(res.data);
//     return res.data;
// }

// const SearchNotice = () => {
//     // https://velog.io/@nemo/useLocation
//     const location = useLocation();
//     const { check } = useParams();  //check값 받아오기
//     check = location.state.check;

//     //location 콘솔에 찍어보기
//     useEffect(() => {
//         console.log(location);
//     }, [ location ])

//     const [ searchData, setSearchData ] = useState({
//         title: "",
//         date: ""
//     })
//     // console.log(searchData);

//     const [ state ] = useAsync(()=> searching(check), [check]);
//     const { loading, data: news_notice, error} = state; //객체구조분해할당 - state
//     useEffect(()=>{
//         setSearchData({
//             title: news_notice ? news_notice.title : "",
//             date: news_notice ? news_notice.date :""
//         })
//         //eslint-disable-next-line
//     },[news_notice])
//     console.log(news_notice);

//     if(loading) return <div>로당중입니다..</div>
//     if(error) return <div>!에러가 발생했습니다!</div>
//     if(!news_notice) return null;

//     return (
//         <>
//             <Notice news_notice={news_notice}/>
//             {/* <DestinationsUI2 trips={trips} /> */}
//         </>
//     );
// };
// export default SearchNotice;



// // import React, { useEffect, useState } from 'react';
// // import Header from '../Header';
// // import { useLocation, useParams } from 'react-router-dom';
// // import DestinationsUI2 from './DestinationsUI2';
// // import { API_URL } from '../../config/constant';
// // import axios from 'axios';
// // import useAsync from '../../customHook/useAsync';

// // async function getSearch(search) {
// //     const response = await axios.get(`${API_URL}/search/${search}`);
// //     return response.data;
// // }


// // const SearchDestinaions = () => {
// //     const location = useLocation();
// //     var { search } = useParams();
// //     search = location.state.search;
// //     const [ searchData, setSearchData ] = useState({
// //         cityImg:"",
// //         cityContinent:"",
// //         cityNational:"",
// //         cityDesc:"",
// //         cityDesc2:"",
// //         cityDesc3:"",
// //         cityMapImg:"",
// //         cityName: ""
// //     })
// //     console.log(searchData);
// //     const [state] = useAsync(()=>getSearch(search), [search]);
// //     const { loading, data: trips, error} = state;
// //     useEffect(()=>{
// //         setSearchData({
// //             cityImg: trips? trips.cityImg : "",
// //             cityContinent: trips? trips.cityContinent : "",
// //             cityNational: trips? trips.citynational : "",
// //             cityDesc: trips? trips.cityDesc : "",
// //             cityDesc2: trips? trips.cityDesc2 : "",
// //             cityDesc3: trips? trips.cityDesc3 : "",
// //             cityMapImg: trips? trips.cityMapImg : "",
// //             cityName: trips? trips.cityName : "",
// //         })
// //           //eslint-disable-next-line
// //     },[trips])
// //     console.log(trips);
// //     if(loading) return <div className='spinner_bg'><div className="spinner"><div className="double-bounce1"></div><div className="double-bounce2"></div></div></div>
// //     if(error) return <div>에러가 발생했습니다.</div>
// //     if(!trips) return null;
// //     return (
// //         <div>
// //             <Header />
// //             <DestinationsUI2 trips={trips} />
// //         </div>
// //     );
// // };

// // export default SearchDestinaions;