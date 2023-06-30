import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const UpcomingMoviesPage = (props) => {
  const [movies, setMovies] = useState([]);

  const addToFavourites = (movieId) => {
    const updatedMovies = movies.map((m) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  }

  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      setMovies(movies);
    });
    // es-lint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
		<PageTemplate
			title="Upcoming Movies"
			movies={movies}
      action={(movie) => {
        return (
          <IconButton aria-label="add to playlist">
            <PlaylistAddIcon color="primary" fontSize="large" movie={movie} />
          </IconButton>
        );
      }}
		/>
	);
};

export default UpcomingMoviesPage;