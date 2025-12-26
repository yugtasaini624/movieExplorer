import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MovieDetails from './pages/MovieDetails';
import Header from './components/Header';
import Footer from './components/Footer';
import Pagenotfound from './pages/Pagenotfound';

function App() {
  return (
    <>
      <Header />
      <main className='main-content'>
        {
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/about' element={ <About /> } />
            <Route path='/movie/:id' element={ <MovieDetails /> } />
            <Route path="*" element={<Pagenotfound />} />
        </Routes>
        }
      </main>
      <Footer />
    </>
  )
}

export default App
