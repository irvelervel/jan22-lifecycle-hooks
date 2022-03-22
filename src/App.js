import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import MovieDetails from "./components/MovieDetails";
import { useState } from "react";
import MovieDropdown from "./components/MovieDropdown";

const App = () => {
  // state = {
  //   movieTitle: "Iron Man",
  // };
  const [movieTitle, setMovieTitle] = useState("Iron Man");

  const changeMovie = (newMovieTitle) => {
    // this.setState({
    //   movieTitle: newMovieTitle,
    // });
    setMovieTitle(newMovieTitle);
  };

  return (
    <div className="App">
      <Container>
        <Row className="justify-content-center my-3">
          <Col md={6} className="text-light">
            <MovieDropdown
              value={movieTitle}
              changeMovie={changeMovie}
              // this is passing down changeMovie as a REFERENCE
            />
          </Col>
        </Row>
        <Row className="justify-content-center my-3">
          <Col md={6}>
            <MovieDetails selectedMovie={movieTitle} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
