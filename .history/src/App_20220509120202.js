import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Header from './components/Home/Header/Header'; \
import Home from './components/Home/Home';
import ItemDetail from './components/Home/ItemDetail/ItemDetail';
import Footer from './components/Home/Footer/Footer';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/carosel' element={<Carosel></Carosel>} ></Route>
        <Route path='/itemDetail/:itemId' element={<ItemDetail></ItemDetail>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
