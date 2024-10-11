import React, { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import useFetch from '../../../features/useFetch';
import CardMovie from '../../Global/CardMovie/CardMovie';
import { useParams } from 'react-router-dom';
const Movie = () => {
    const {slug:keySearch} = useParams();
    console.log(keySearch);
    const [page, setPage] = useState(1);
    const API_KEY = "e9e9d8da18ae29fc430845952232787c"
    const movie = useFetch(keySearch ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${keySearch}&page=${page}` : `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=${page}`);
    const [arrMovie, setArr] = useState([]);
    const handleclick = () => {
        setPage(page + 1);
    }
    useEffect(() => {
        setArr([...arrMovie, ...movie]);
    },[movie]);
    console.log("render");
    return (
        <>
           <Container>
                <div className='headline'>
                    <h3>ONLINE STREAMING</h3>
                    <h2>List Movie</h2>
                </div>
                <Row>
                {arrMovie.map((item) => (
                    
                        <Col lg={3}>
                        <CardMovie id={item.id}
                        title={item.title} 
                        poster_path={item.poster_path}
                        release_date={item.release_date} 
                        original_title={item.original_title} 
                        vote_average={item.vote_average}
                        ></CardMovie>
                        </Col>
                ))}
                </Row>
                <button onClick={handleclick}>Load more</button>
           </Container>
        </>
    );
};

export default Movie;