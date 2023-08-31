import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Aside from './pages/dashboard/Aside/Aside';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/profil/Profile';
import User from './pages/dashboard/users/User';
import Hotel from './pages/dashboard/hotels/Hotel';
import Guide from './pages/dashboard/guides/Guide';
import Car from './pages/dashboard/cars/Car';
import Details from './pages/details/Details';
import Hotels from './pages/hotels/Hotels';
import Cars from './pages/cars/Cars';
import AuthContext from './context/auth-context';
import { useEffect, useState } from 'react';
import Info from './pages/dashboard/info/Info';
import UpdateHotel from './pages/dashboard/hotels/UpdateHotel';
import ForgotPassword from './pages/auth/forgot-password/ForgetPassword';
import ResetPassword from './pages/auth/reset-password/ResetPassword';


function App() {
  const [user, setUser] = useState();
  useEffect(() =>{
    if(localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);
  return (
    <>
    <AuthContext.Provider value={{ user, setUser }}>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='forgot-password' element={<ForgotPassword />} />
          <Route path='reset-password/:token' element={<ResetPassword />} />
          <Route path='sign-up' element={<Register />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='hotels' element={<Hotels />} />
          <Route path='agencies' element={<Cars />} />
          <Route path='/dashboard' element={<Aside />}>
            <Route path='' element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='users' element={<User />} />
            <Route path='hotels' element={<Hotel />} />
            <Route path='edit-hotel/:id' element={<UpdateHotel />} />
            <Route path='info' element={<Info />} />
            <Route path='guides' element={<Guide />} />
            <Route path='agencies' element={<Car />} />
          </Route>
        </Routes>
      </main>

      <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
