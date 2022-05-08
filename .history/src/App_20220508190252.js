import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';

function App() {
  return (
    <div className="App">
      <h1>thisi si header</h1>
      <Routes>
        <Route  path='/login' element={<Login></Login>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
