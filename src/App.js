import "./App.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import Movies from "./pages/movies/Movies";
import Register from "./pages/register/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/movies" element={<Movies />} /> */}
        <Route exact path="/movie/:id/:media_type" element={<MovieDetails />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
