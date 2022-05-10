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
import MyItems from './components/ManageItems/MyItems';
import Brands from './components/Brands/Brands';
import Rechart from './components/Rechart/Rechart';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/home' element={<Home></Home>} ></Route>

        {/* --------------- Image detail route-------- */}
        <Route path='/itemDetail/:itemId' element={
          <RequireAuth>
            <ItemDetail></ItemDetail>
          </RequireAuth>
        } ></Route>
      {/* --------------- manage route-------- */}
        <Route path='/manage' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        } ></Route>
      {/* ------------ add item ---------  */}      
        <Route path='/additem' element={
          <RequireAuth>
            <AddItem></AddItem>
          </RequireAuth>
        } ></Route>

        {/* ----------- My Item ----------  */}
        <Route path='/myitem' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        } ></Route>
        <Route path='/registration' element={<Registration></Registration>} ></Route>
        <Route path='/login' element={<Login></Login>} ></Route>
      </Routes>

      <Rechart></Rechart>
      <Brands></Brands>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
