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
// import MainYoutube from './components/MainYoutube';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/intro' element={<Introduce/>} />
        <Route path='/emblem' element={<Emblem/>} />
        <Route path='/sponser' element={<Sponser/>} />
        <Route path='/stadium' element={<Stadium/>} />
        <Route path='/player' element={<Player/>} />
        <Route path='/detailPlayer' element={<PlayerDetail/>} />
        <Route path='/coach' element={<Coach/>} />
        <Route path='/staff' element={<Staff/>} />
        <Route path='/cheerleading' element={<Cheer/>} />
        <Route path='/event' element={<Event/>} />
      </Routes>
      {/* <MainYoutube /> */}
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
