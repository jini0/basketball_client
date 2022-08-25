import React from 'react';
import { Link } from 'react-router-dom';

const PlayerList = ({player}) => {
    return (
        <li key={player.id}>
            <Link to={`/player/${player.id}`}>
                <div className='teamList_img'>
                    <img src={player.imgsrc} alt=''/>
                </div>
                <div className='teamList_text'>
                    <span className='num'>No.{player.no}</span>
                    <p>{player.name}</p>
                    <span className='position'>{player.position2}</span>
                </div>
            </Link>
        </li>
    );
};

export default PlayerList;