import { Link } from 'react-router-dom';
import '../stylesheets/MovieCard.css';

function MovieCard({id, title, desc, poster}) {
  return (
    <div className='movieCard' id={id}>
      <div className='img'>
        <img src={poster} alt={title} />
      </div>
      <div className='info'>
        <p className='movieTitle'>{ title }</p>
        <p className='movieDesc'>{ desc }</p>
        <button className='detailsBtn'><Link className='dBtn' to={`/movie/${id}`}>More Details</Link></button>
      </div>
    </div>
  )
}

export default MovieCard
