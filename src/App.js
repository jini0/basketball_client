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
// import MainYoutube from './components/MainYoutube';

function App() {
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
        <Route path='/news' element={<News/>} />
        <Route path='/player' element={<Player/>} />
        <Route path='/player/:id' element={<PlayerDetail/>} />
        <Route path='/coach' element={<Coach/>} />
        <Route path='/staff' element={<Staff/>} />
        <Route path='/cheerleading' element={<Cheer/>} />
        <Route path='/youtube' element={<Youtube/>} />
        <Route path='/photo' element={<Photo/>} />
        <Route path='/detailPhoto' element={<DetailPhoto/>} />
        <Route path='/event' element={<Event/>} />
        <Route path='/detailEvent' element={<DetailEvent/>} />
        <Route path='/ticketPrice' element={<TicketPrice/>} />
        <Route path='/guide' element={<Guidelines/>} />
        <Route path='/product' element={<Store/>} />
        <Route path='/detailProduct' element={<ProductDetail/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      {/* <MainYoutube /> */}
      <Aside />
      <Footer />
    </div>
  );
}

export default App;