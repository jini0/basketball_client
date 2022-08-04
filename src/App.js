import './App.css';
import MainColumn from './components/MainColumn';
import MainMovie from './components/MainMovie';
import MainPhoto from './components/MainPhoto';
// import MainYoutube from './components/MainYoutube';
import Aside from './include/Aside';
import Footer from './include/Footer';
import Header from './include/Header.js';
import MainPage from './main';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <MainColumn />
      {/* <MainYoutube /> */}
      <MainMovie/>
      <MainPhoto />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;
