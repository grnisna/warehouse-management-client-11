import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        
        <Route  path='/login' element={<Login></Login>} ></Route>
        <Route  path='/carosel' element={<Carosel></Carosel>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
