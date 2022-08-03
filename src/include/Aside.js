import React from 'react';
import { VscTriangleUp, VscTriangleDown } from "react-icons/vsc";
import './Aside.css';

const Aside = () => {
    // 화면 최상단 가기
    function toTheTop(){
        window.scrollTo(0,0);
    }
    // 화면 최하단 가기
    function toTheBot(){
        window.scrollTo(0,document.body.scrollHeight);
    }
    return (
        <div id='aside'>
            <button id="goTopBtn" onClick={toTheTop}><VscTriangleUp/></button>
            <button id="goBotBtn" onClick={toTheBot}><VscTriangleDown/></button>
        </div>
    );
};

export default Aside;