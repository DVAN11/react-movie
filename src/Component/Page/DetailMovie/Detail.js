import React, { useState } from 'react';
import useFetch from '../../../features/useFetch';
import { useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';
import "./Detail.css";

const Detail = () => {
    const {slug:movieId} = useParams();
    const API_KEY = "e9e9d8da18ae29fc430845952232787c"
    const detailMovie = useFetch(` https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
    console.log(detailMovie);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const trailer = useFetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`);
    const findTrailer = trailer.find((item) => item.type === "Trailer")
    console.log(findTrailer);
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          {findTrailer ? (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${findTrailer.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        ) : ""}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <div class="detail mb-5">
          <Container>
            <Row>
              <Col lg={3}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${detailMovie.backdrop_path}`}
                  alt={detailMovie.original_title}
                />
              </Col>
              <Col lg={9}>
                <h1 class="movie-title">{detailMovie.original_title}</h1>
                <div class="yearPro d-flex align-items-center gap-2">
                  <p class="year mb-0">
                    {new Date(detailMovie.release_date).getFullYear()}
                  </p>
                  <p class="kind">
                    {detailMovie.genres &&
                      detailMovie.genres.map((item) => item.name).join(", ")}
                  </p>
                  <p class="time mb-0">
                    <i class="fa-regular fa-clock"></i> {detailMovie.runtime}{" "}
                    min
                  </p>
                </div>
                <div class="rate d-flex align-items-center">
                  <p class="number-rate">{detailMovie.vote_average}</p>
                  <p class="user">({detailMovie.vote_count} votes)</p>
                  <Button
                    Button
                    variant="primary"
                    onClick={handleShow}
                    class="playtrailer"
                  >
                    <i class="fa-solid fa-play"></i> Play trailer
                  </Button>
                </div>
                <h3 class="tagline">{detailMovie.tagline}</h3>
                <h2 class="overview">{detailMovie.overview}</h2>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
};

export default Detail;