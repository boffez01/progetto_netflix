import axios from 'axios';
import './MovieGallery.css';

const MovieGallery = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMovies = async (searchTerm) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`http://www.omdbapi.com/?apikey=fd237fa1&s=${searchTerm}`);
      if (response.data.Response === 'True') {
        setMovies(response.data.Search);
      } else {
        setError('No movies found');
      }
    } catch (err) {
      setError('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies('Harry Potter');
    fetchMovies('Star Wars');
    fetchMovies('Lord of the Rings');
  }, []);

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
    <div>
      <Container fluid>
        <h4>Harry Potter Films</h4>
        <Row className="d-flex no-gutters flex-nowrap">
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && movies.map((film, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={2} className="d-flex justify-content-center mb-4">
              <Card className="film-card" style={cardStyle}>
                <Card.Img variant="top" src={film.Poster} alt={film.Title} style={imgStyle} className="card-img" />
                <Card.Body>
                  <Card.Title>{film.Title}</Card.Title>
                  <Card.Text>{film.Year}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h4>Star Wars Films</h4>
        <Row className="d-flex no-gutters flex-nowrap">
          {!loading && !error && movies.map((film, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={2} className="d-flex justify-content-center mb-4">
              <Card className="film-card" style={cardStyle}>
          
