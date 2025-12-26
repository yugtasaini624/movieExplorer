import { movies } from '../data/movies';
import '../stylesheets/Home.css';
import MovieCard from '../components/MovieCard';

function Home() {
  return (
    <div className='homePage'>
      <h1 className='homeHeading'>Explore Your Next Favorite Movie</h1>
      <div className='container'>
        {movies.map(movie => (
            <MovieCard id={movie.id} title={movie.title} desc={movie.description} poster={movie.img} />
        ))}
      </div>
    </div>
  )
}

export default Home
