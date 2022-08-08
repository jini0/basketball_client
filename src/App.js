import './App.css';
import Aside from './include/Aside';
import Footer from './include/Footer';
import Header from './include/Header.js';
import MainPage from './main';
import { Routes,Route } from 'react-router-dom';
import Player from './components/Team/Player';
import PlayerDetail from './components/Team/PlayerDetail';
import Coach from './components/Team/Coach';
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
      </Routes>
      {/* <MainYoutube /> */}
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
