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
import Car from './pages/dashboard/cars/Car';
import Hotels from './pages/hotels/Hotels';
import Cars from './pages/cars/Cars';
import AuthContext from './context/auth-context';
import { useEffect, useState } from 'react';
import Info from './pages/dashboard/info/Info';
import UpdateHotel from './pages/dashboard/hotels/UpdateHotel';
import ForgotPassword from './pages/auth/forgot-password/ForgetPassword';
import ResetPassword from './pages/auth/reset-password/ResetPassword';
import DetailsHotel from './pages/details-hotel/DetailsHotel';
import Employee from './pages/dashboard/Employee/Employee';
import Guide from './pages/dashboard/guides/Guide';
import UpdateEmployee from './pages/dashboard/Employee/UpdateEmployee';
import UpdateCar from './pages/dashboard/cars/UpdateCar';
import DetailsAgency from './pages/details-agency/DetailsAgency';
import Guides from './pages/guide/Guides';
import UpdateGuide from './pages/dashboard/guides/UpdateGuide';
import DetailsGuide from './pages/details-guide/DetailsGuide';
import Category from './pages/dashboard/categories/Category';
import UpdateCategory from './pages/dashboard/categories/UpdateCategory';
import UpdateInfo from './pages/dashboard/info/UpdateInfo';
import Infos from './pages/pratical-info/Infos';
import Bookmarks from './pages/dashboard/bookmarks/Bookmarks';
import Inscription from './pages/dashboard/inscriptions/Inscription';


function App() {
  const [user, setUser] = useState();
  const [userRole, setUserRole] = useState();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);
  useEffect(() => {
    if (user) {
      setUserRole(user?.role);
    }
  }, [user])
  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        <header>
          <Navbar />
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            {!user &&
              <>
                <Route path='login' element={<Login />} />
                <Route path='forgot-password' element={<ForgotPassword />} />
                <Route path='reset-password/:token' element={<ResetPassword />} />
                <Route path='sign-up' element={<Register />} />
              </>
            }

            <Route path='hotel-details/:id' element={<DetailsHotel />} />
            <Route path='agency-details/:id' element={<DetailsAgency />} />
            <Route path='guide-details/:id' element={<DetailsGuide />} />
            <Route path='hotels' element={<Hotels />} />
            <Route path='practical-info' element={<Infos />} />
            <Route path='agencies' element={<Cars />} />
            <Route path='guides' element={<Guides />} />

            {userRole ?
              userRole === 'Director' || userRole === 'Admin' ?
                <Route path='/dashboard' element={<Aside />}>
                  <Route path='' element={<Dashboard />} />
                  <Route path='profile' element={<Profile />} />
                  <Route path='registrations' element={<Inscription />} />
                  <Route path='users' element={<User />} />
                  <Route path='employees' element={<Employee />} />
                  <Route path='edit-employe/:id' element={<UpdateEmployee />} />
                  <Route path='hotels' element={<Hotel />} />
                  <Route path='edit-hotel/:id' element={<UpdateHotel />} />
                  <Route path='categories' element={<Category />} />
                  <Route path='edit-category/:id' element={<UpdateCategory />} />
                  <Route path='informations' element={<Info />} />
                  <Route path='edit-information/:id' element={<UpdateInfo />} />
                  <Route path='guides' element={<Guide />} />
                  <Route path='edit-guide/:id' element={<UpdateGuide />} />
                  <Route path='agencies' element={<Car />} />
                  <Route path='edit-agency/:id' element={<UpdateCar />} />

                </Route>
                :
                <Route path='/dashboard' element={<Aside />}>
                  <Route path='' element={<Profile />} />
                  <Route path='profile' element={<Profile />} />
                  <Route path='bookmarks' element={<Bookmarks />} />
                </Route>

              :
              <Route path='/' element={<Home />} />

            }

            <Route path='*' element={<div className='page404 d-flex  justify-content-center align-items-center'><h2 className='text-danger fw-semibold'>404 Page Not Found</h2></div>} />

          </Routes>
        </main>

        <Footer />
      </AuthContext.Provider>
    </>
  );
}

export default App;
