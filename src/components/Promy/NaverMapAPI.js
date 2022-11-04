import React from 'react';
import { NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

// 네이버 지도 api
// ---> 홈페이지에서, Web 서비스 URL 등록 1. http://localhost:3000/    2. https://basketball-client.vercel.app/
const NaverMapAPI = () => {
    const navermaps = window.naver.maps;
    //마커 onClick이벤트
    function onClick(){
        alert('여기는 원주종합체육관입니다.');
    }

    return (
        <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '100%', // 네이버지도 가로 길이
                height: '60vh' // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 37.3394, lng: 127.9423 }} // 지도 초기 위치(lat: 위도 / lng: 경도)
            defaultZoom={15} // 지도 초기 확대 배율
        >
            <Marker
                key={1}
                position={new navermaps.LatLng(37.3394, 127.9423)}
                animation={2}
                onClick={onClick}
                // onClick={() => {alert('여기는 원주종합체육관입니다.');}}
            />
        </NaverMap>
    );
};

export default NaverMapAPI;