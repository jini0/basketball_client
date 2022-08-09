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
// import MainYoutube from './components/MainYoutube';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
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
