import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { movies } from '../data/movies';
import { movieDetails } from '../data/movies';
import '../stylesheets/MovieDetails.css';
import '../App.css';

function MovieDetails() {
    const { id } = useParams();
    const movie = movieDetails.find(m => m.id === parseInt(id));

    return (
        <div className='detailPage'>
            <h1 className='movieName'>{movie.title}</h1>
            <div className='listOfItems'>
                <ul className='movieInfos'>
                    <li className='movieInfo'>{movie.year}    . </li>
                    <li className='movieInfo'>{movie.ageRating}    . </li>
                    <li className='movieInfo'>{movie.duration}</li>
                </ul>
            </div>
            <div className='box'>
                <div className='posterVideo'>
                    <div className='poster'>
                        <img src={movie.bigPoster} alt={movie.title} />
                    </div>
                    <div className='video'>
                        <iframe
                            className="videoPlay"
                            src={movie.trailerUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className='genre'>
                    {(movie.genre).map(g => (
                        <div className='genreCard'>{g}</div>
                    ))}
                </div>
                <div className='otherInfo'>
                    <p id='desc'>{movie.description}</p>
                    <hr />
                    <p id='director'>Director <span className='ans'>{movie.director}</span></p>
                    <hr />
                    <p id='writer'>Writer <span className='ans'>{movie.writer}</span></p>
                    <hr />
                    <p id='stars'>Stars <span >
                        {movie.stars.map((star, index) => (
                            <span key={index} className='ans'>
                                {star}
                                {index !== movie.stars.length - 1 && <span className='sep'>.</span>}
                            </span>
                        ))}
                    </span> </p>
                    <hr />
                    <div className='extraInfo'>
                        <p id='box-office'>Box-Office   <span className='ans'>{movie.boxOffice}</span></p>
                        <p id='imbdRating'>imbdRating   <span className='ans'>{movie.imdbRating}</span></p>
                    </div>
                </div>
                <div className='goBackDiv'>
                    <button className='goBackBtn' type='submit'><Link to='/' id='btn'>Go Back</Link></button>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
