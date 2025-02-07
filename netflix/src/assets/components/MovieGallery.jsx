import React, { Component } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import './MovieGallery.css';

class MovieGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      isLoading: true,
      error: null,
    };
  }

  fetchFilms = async (searchTerm) => {
    try {
      const resp = await fetch(
        `https://www.omdbapi.com/?s=${searchTerm}&apikey=6a45bde1`
      );
      if (resp.ok) {
        const data = await resp.json();
        if (data.Response === "True") {
          this.setState({
            films: data.Search,
            isLoading: false,
          });
        } else {
          this.setState({ error: data.Error, isLoading: false });
        }
      } else {
        throw new Error("Failed to fetch");
      }
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message, isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchFilms(this.props.query);
  }

  render() {
    const { films, isLoading, error } = this.state;
    const { title } = this.props;

    const cardStyle = {
      width: "100%",
      height: "250px",
      overflow: "hidden",
      border: "none",
      marginBottom: "15px",
      transition: "transform 0.3s ease",
    };

    const imgStyle = {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    };

    return (
      <div className="movie-gallery">
        <Container fluid>
          <h4>{title}</h4>
          <Row className="d-flex no-gutters flex-nowrap">
            {isLoading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {!isLoading &&
              !error &&
              films.map((film, index) => (
                <Col
                  key={index}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={2}
                  className="d-flex justify-content-center mb-4"
                >
                  <Card className="film-card" style={cardStyle}>
                    <Card.Img
                      variant="top"
                      src={film.Poster}
                      alt={film.Title}
                      style={imgStyle}
                      className="card-img"
                    />
                    <Card.Body>
                      <Card.Title>{film.Title}</Card.Title>
                      <Card.Text>{film.Year}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default MovieGallery;
