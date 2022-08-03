import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BsFacebook, BsInstagram, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Header = () => {
    // //header 메뉴(nav/gnb) 스크롤시 부드럽게 
    // useEffect(()=>{
    //     const signNav = document.querySelector('#sign_nav');
    //     window.addEventListener('scroll',()=>{
    //         console.log(window.scrollY);
    //         if(window.scrollY < 1){
    //             signNav.classList.remove('on');
    //         }else if(window.scrollY < 100){
    //             signNav.style.top = `${100-window.scrollY}px`;
    //             signNav.classList.add('on');
    //         }else {
    //             signNav.style.top = `0`;
    //         }
    //     })
    // // eslint-disable-next-line
    // },[])
    return (
        <div id="header">
            <div id='sign_nav'>
                <div className='inner'>
                    <ul>
                        <li>Login</li>
                        <li>Join</li>
                        {/* <li><FontAwesomeIcon icon="fa-brands fa-facebook" /></li> */}
                        <li className='snsIcon'><BsInstagram /></li>
                        <li className='snsIcon'><BsYoutube /></li>
                        <li className='snsIcon'><BsFacebook /></li>
                    </ul>
                </div>
            </div>
            <nav id='gnb'>
                <div className='inner'>
                    <ul>
                        <li>PROMY
                            <ul>
                                <li></li>
                            </ul>
                        </li>
                        <li>NEWS</li>
                        <li>TEAM</li>
                        <li>GAME·STATS</li>
                        <li><Link to="/"><img src="images/DB_logo1.png" alt="원주DB로고" /></Link></li>
                        <li>FAN</li>
                        <li>EVENT</li>
                        <li>TICKET</li>
                        <li>STORE</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;