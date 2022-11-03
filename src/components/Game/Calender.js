import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { format, addMonths, subMonths } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from 'date-fns';
import { isSameMonth, isSameDay, addDays, parse } from 'date-fns';
import './style.scss';
import { useEffect } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { API_URL } from '../config/contansts';
// import { useRef } from 'react';

// 리액트 달력만들기 https://sennieworld.tistory.com/61
const RenderHeader = ({ currentMonth, prevMonth, nextMonth, date }) => {
    return (
        <div className="header row">
            <div className="col col-start">
                <span className="text">
                    {format(currentMonth, 'yyyy')}
                    <span className="text month">
                        {format(currentMonth, 'M')}월
                    </span>
                </span>
            </div>
            <div className="col col-end">
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
                <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
            </div>
        </div>
    );
};

const RenderDays = () => {
    const days = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>,
        );
    }

    return <div className="days row">{days}</div>;
};

const RenderCells = ({ currentMonth, selectedDate, onDateClick }) => {
    // mysql로 데이터 부르기
    const [ games, setGames ] = useState([]);
    // const hiddenDate = useRef();
    // const hiddenDate = document.querySelectorAll(".hiddenDate"); 

    useEffect(()=>{ 
        // axios.get(`http://localhost:8001/calendars`)
        axios.get(`${API_URL}/calendars`)
        .then(result=>{
            const gameCalendars = result.data;
            console.log(gameCalendars);
            setGames(result.data);
        })
        .catch(e=>{
            console.log(e);
        })
        //eslint-disable-next-line
    },[])
    // const gameday = games ? new Date(games.date) : null;


    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    
    // const [a,setA] = useState();
    // const onClickDate = ()=>{

    // }
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, 'd');
            const cloneDay = day;
            const gameDate2 = format(currentMonth,"yyyy")+format(currentMonth,"MM")+format(day, 'dd');
            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, selectedDate)
                            ? 'selected'
                            // : isSameDay(day, gameday)
                            // ? 'game'
                            : format(currentMonth, 'M') !== format(day, 'M')
                            ? 'not-valid'
                            : 'valid'
                    }`}
                    key={day}
                    onClick={() => onDateClick(parse(cloneDay))}
                >
                    <div>
                        <span
                            className={
                                format(currentMonth, 'M') !== format(day, 'M')
                                ? 'text not-valid'
                                    : ''
                            }
                        >                      
                            {formattedDate} 
                        </span>       
                        
                        <div className='gameDate'>
                            {/* <input type="hidden" ref={hiddenDate} className='hiddenDate' value={format(currentMonth,"yyyy")+format(currentMonth,"MM")+format(day, 'dd')} /> */}
                            {/* <div>{hiddenDate}</div> */}
                            {format(currentMonth, 'M') !== format(day, 'M') ? "" : games.map(game=>(
                                //hiddenDate.current.value === game.date ?
                                gameDate2 === game.date ?
                                    <div className='gameDateDiv'>
                                        <div>
                                            <img src={game.imgsrc_promy} alt="DB로고"/>
                                            {/* <p>{game.name_promy}</p> */}
                                            <p style={{color: (game.goal_promy > game.goal_competitor) ? "red" : "#333", display: game.goal_promy != null ? "inline-block" : "none" }}>{game.goal_promy}</p>
                                        </div>
                                        <div>
                                            <span className='versus'>vs</span>
                                            <p style={{display: game.goal_promy == null ? "inline-block" : "none", marginTop: "6px"}}>경기예정</p>
                                        </div>
                                        <div>
                                            <img src={game.imgsrc_competitor} alt="상대로고"/>
                                            {/* <p>{game.name_competitor}</p> */}
                                            <p style={{color: (game.goal_promy < game.goal_competitor) ? "red" : "#333" }}>{game.goal_competitor}</p>
                                        </div>
                                    </div>
                                : ""
                                ))}
                        </div>
                        
                    </div> 
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={day}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
};

export const Calender = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    //데이터베이스 날짜(varchar:문자)와 비교하려고 만든 date 상태관리
    const [date, setDate] = useState("");

    // const monthStart = startOfMonth(currentMonth);
    // const monthEnd = endOfMonth(monthStart);
    // const startDate = startOfWeek(monthStart);
    // const endDate = endOfWeek(monthEnd);

    // const rows = [];
    // let days = [];
    // let day = startDate;
    // let formattedDate = '';

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
        // console.log(typeof(currentMonth));   //string
        // console.log(format(currentMonth,"M"));
        console.log(format(currentMonth,"MM"));
        console.log(format(currentMonth,"d"));
        // console.log(days);
        setDate(format(currentMonth,"yyyy")+format(currentMonth,"M"))
    };
    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
        setDate({
            ...date,
            year: format(currentMonth,"yyyy"),
            month: currentMonth,
        })
    };
    const onDateClick = (day) => {
        setSelectedDate(day);
    };
    return (
        <div className='teamTab'>
            <div className='teamHeader'>
                <h3>일정 및 결과</h3>
                <p>KBL 경기 일정 및 결과를 확인할 수 있습니다.</p>
            </div> 
            <div className="calendar">
                <div className='inner'>
                    <RenderHeader
                        currentMonth={currentMonth}
                        prevMonth={prevMonth}
                        nextMonth={nextMonth}
                    />
                    <RenderDays />
                    <RenderCells
                        currentMonth={currentMonth}
                        selectedDate={selectedDate}
                        onDateClick={onDateClick}
                    />
                </div>
            </div>
        </div>
    );
};