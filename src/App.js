import './App.css';
import Aside from './include/Aside';
import Footer from './include/Footer';
import Header from './include/Header.js';
import MainPage from './main';
import { Routes,Route } from 'react-router-dom';
import Player from './components/Team/Player';
// import MainYoutube from './components/MainYoutube';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/player' element={<Player/>} />
      </Routes>
      {/* <MainPage />
      <MainColumn />
      <MainMovie/>
      <MainPhoto /> */}
      {/* <MainYoutube /> */}
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
