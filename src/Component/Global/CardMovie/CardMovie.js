import React from 'react';
import { Link } from 'react-router-dom';
import "./CardMovie.css";

const CardMovie = (pros) => {

    return (
        <div>
            <Link to={`/detail/${pros.id}`} className="cardmovie" >
                <div className="thumb">
                    <img src={`https://image.tmdb.org/t/p/w300${pros.poster_path}`} alt="" />
                </div>
                <p className='mb-3 mt-2'>{pros.title}</p>
                <div className="number d-flex align-items-center">
                    <p className='day'>{pros.release_date}</p>
                    <p className='rate'>
                        <i className='fa-solid fa-star'></i>{pros.vote_average.toFixed(2)}
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default CardMovie;