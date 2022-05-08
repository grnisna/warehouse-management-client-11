import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Header from './components/Home/Header/Header';
import Carosel from './components/Home/Carosel/Carosel';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
        <Route  path='/' element={} ></Route>
        <Route  path='/login' element={<Login></Login>} ></Route>
        <Route  path='/login' element={<Login></Login>} ></Route>
        <Route  path='/carosel' element={<Carosel></Carosel>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
