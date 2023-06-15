import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';


function App() {
  return (
    <>
    <header>
    <Navbar />
    </header>

    <main>
      <Home />
    </main>

    <Footer />
    </>
  );
}

export default App;
