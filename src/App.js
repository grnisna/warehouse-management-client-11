import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login/Login';
import Header from './components/Home/Header/Header'; 
import Home from './components/Home/Home';
import ItemDetail from './components/Home/ItemDetail/ItemDetail';
import Footer from './components/Home/Footer/Footer';
import Carosel from './components/Home/Carosel/Carosel';
import { ToastContainer } from 'react-toastify';

import Registration from './components/Login/Registration/Registration';
import RequireAuth from './components/Login/Login/RequireAuth/RequireAuth';
import ManageItems from './components/ManageItems/ManageItems';
import AddItem from './components/ManageItems/AddItem';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>
        <Route path='/itemDetail/:itemId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        } ></Route>

        <Route path='/manage' element={<ManageItems></ManageItems>} ></Route>
        <Route path='/additem' element={<AddItem></AddItem>} ></Route>

        <Route path='/registration' element={<Registration></Registration>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
