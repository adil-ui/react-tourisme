import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import Contact from './pages/contact/Contact';
import Aside from './pages/dashboard/Aside/Aside';
import Dashboard from './pages/dashboard/Dashboard';
import Profile from './pages/dashboard/profil/Profile';
import User from './pages/dashboard/users/User';
import Hotel from './pages/dashboard/hotels/Hotel';
import Monument from './pages/dashboard/monuments/Monument';
import Guide from './pages/dashboard/guides/Guide';
import Car from './pages/dashboard/cars/Car';
import Details from './pages/details/Details';
import Hotels from './pages/hotels/Hotels';
import Cars from './pages/cars/Cars';


function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='connexion' element={<Login />} />
          <Route path='inscription' element={<Register />} />
          <Route path='contact' element={<Contact />} />
          <Route path='details/:id' element={<Details />} />
          <Route path='les-hotels' element={<Hotels />} />
          <Route path='les-agences' element={<Cars />} />
          <Route path='/dashboard' element={<Aside />}>
            <Route path='' element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='utilisateurs' element={<User />} />
            <Route path='hotels' element={<Hotel />} />
            <Route path='monuments' element={<Monument />} />
            <Route path='guides' element={<Guide />} />
            <Route path='voitures' element={<Car />} />
          </Route>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
