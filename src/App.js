import './App.css';
import Aside from './include/Aside';
import Header from './include/Header.js';
import MainPage from './main';

function App() {
  return (
    <div className="App">
      <Header />
      <MainPage />
      <Aside />
    </div>
  );
}

export default App;
