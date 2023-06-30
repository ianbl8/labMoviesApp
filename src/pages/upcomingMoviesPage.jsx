import React, { useState, useEffect } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import IconButton from "@mui/material/IconButton";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

const UpcomingMoviesPage = (props) => {
  const { data, error, isLoading, isError } = useQuery("upcoming", getUpcomingMovies);
  if (isLoading) {
    return <Spinner />;
  };
  if (isError) {
    return <h1>{error.message}</h1>;
  };

  const movies = data ? data.results : [];

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