import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Header from './components/Home/Header/Header';
import Carosel from './components/Home/Carosel/Carosel';
import Home from './components/Home/Home';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
        <Route  path='/' element={<Home></Home>} ></Route>
        <Route  path='/home' element={<Home></Home>} ></Route>
        <Route  path='/carosel' element={<Carosel></Carosel>} ></Route>
        <Route  path='/login' element={<Login></Login>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
