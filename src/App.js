import './App.css';
import Aside from './include/Aside';
import Footer from './include/Footer';
import Header from './include/Header.js';
import MainPage from './main';
import { Routes,Route } from 'react-router-dom';
import Player from './components/Team/Player';
import PlayerDetail from './components/Team/PlayerDetail';
import Coach from './components/Team/Coach';
import Staff from './components/Team/Staff';
import Cheer from './components/Team/Cheer';
import Event from './components/Event/Event';
import Introduce from './components/Promy/Introduce';
import Emblem from './components/Promy/Emblem';
import Sponser from './components/Promy/Sponser';
import Stadium from './components/Promy/Stadium';
import ScrollToTop from './components/ScrollToTop';
import Store from './components/Store/Store';
import ProductDetail from './components/Store/ProductDetail';
import Login from './components/Member/Login';
import Notice from './components/News/Notice';
import News from './components/News/News';
import Youtube from './components/Fan/Youtube';
import Photo from './components/Fan/Photo';
import DetailPhoto from './components/Fan/DetailPhoto';
import DetailNotice from './components/News/DetailNotice';
import TicketPrice from './components/Ticket/TicketPrice';
import Guidelines from './components/Ticket/Guidelines';
import DetailEvent from './components/Event/DetailEvent';
import RegisterNotice from './components/News/RegisterNotice';
import EditNotice from './components/News/EditNotice';
import RegisterNews from './components/News/RegisterNews';
import EditNews from './components/News/EditNews';
import RegisterPhoto from './components/Fan/RegisterPhoto';
import EditPhoto from './components/Fan/EditPhoto';
import RankTeam from './components/Game/RankTeam';
import RegisterProduct from './components/Store/RegisterProduct';
import { Calender } from './components/Game/Calender';
import Join from './components/Member/Join';
import Cart from './components/Member/Cart';
import { useDispatch } from 'react-redux';
import { getCookie } from './components/util/cookie';
import { useEffect } from 'react';
import { setLogin } from './components/modules/logincheck';
import EditProduct from './components/Store/EditProduct';
// import MainYoutube from './components/MainYoutube';

function App() {
    // 새로고침되면 로그아웃 되는거 해결
    const dispatch = useDispatch();
    const uname = getCookie('userName');
    useEffect(()=>{
      if(uname){        //uname이 있으면(로그인한거)
        dispatch(setLogin())
      }
      // eslint-disable-next-line
    },[])
  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
      <ScrollToTop/>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/intro' element={<Introduce/>} />
        <Route path='/emblem' element={<Emblem/>} />
        <Route path='/sponser' element={<Sponser/>} />
        <Route path='/stadium' element={<Stadium/>} />
        <Route path='/notice' element={<Notice/>} />
        <Route path='/notice/:id' element={<DetailNotice/>} />
        <Route path='/registerNotice' element={<RegisterNotice/>} />
        <Route path='/editNotice/:id' element={<EditNotice/>} />
        <Route path='/news' element={<News/>} />
        <Route path='/registerNews' element={<RegisterNews/>} />
        <Route path='/editNews/:id' element={<EditNews/>} />
        <Route path='/player' element={<Player/>} />
        <Route path='/player/:id' element={<PlayerDetail/>} />
        <Route path='/coach' element={<Coach/>} />
        <Route path='/staff' element={<Staff/>} />
        <Route path='/cheerleading' element={<Cheer/>} />
        <Route path='/calender' element={<Calender/>} />
        <Route path='/rankTeam' element={<RankTeam/>} />
        <Route path='/youtube' element={<Youtube/>} />
        <Route path='/photo' element={<Photo/>} />
        <Route path='/photo/:id' element={<DetailPhoto/>} />
        <Route path='/registerPhoto' element={<RegisterPhoto/>} />
        <Route path='/editPhoto/:id' element={<EditPhoto/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/event/:id' element={<DetailEvent/>} />
        <Route path='/ticketPrice' element={<TicketPrice/>} />
        <Route path='/guide' element={<Guidelines/>} />
        <Route path='/product' element={<Store/>} />
        <Route path='/store/:id' element={<ProductDetail/>} />
        <Route path='/registerProduct' element={<RegisterProduct/>} />
        <Route path='/editProduct/:id' element={<EditProduct/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/join' element={<Join/>} />
        <Route path='/cart/:idid' element={<Cart/>} />
      </Routes>
      {/* <MainYoutube /> */}
      <Aside />
      <Footer />
    </div>
  );
}

export default App;