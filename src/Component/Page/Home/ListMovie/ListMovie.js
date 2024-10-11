import React from 'react';
import Container from 'react-bootstrap/Container';
import CardMovie from '../../../Global/CardMovie/CardMovie';
import useFetch from '../../../../features/useFetch';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./ListMovie.css";

const ListMovie = (pros) => {
    const API_KEY = "e9e9d8da18ae29fc430845952232787c"
    const movie = useFetch(`https://api.themoviedb.org/3/movie/${pros.api}?api_key=${API_KEY}&page=1`);
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
      };
    return (
        <div className='list-movie'>
            <Container>
                <div className='headline'>
                    <h3>{pros.title}</h3>
                    <h2>{pros.desc}</h2>
                </div>
                <Slider {...settings}>
                    {movie.map((item) => (
                        <CardMovie id={item.id}
                        title={item.title} 
                        poster_path={item.poster_path}
                        release_date={item.release_date} 
                        original_title={item.original_title} 
                        vote_average={item.vote_average}
                        ></CardMovie>
                    ))}
                </Slider>
            </Container>
        </div>
    );
};

export default ListMovie;