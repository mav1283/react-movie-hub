import React, { useEffect, useState } from "react";
import { useData } from "../context/AppContext";
const API_KEY = process.env.REACT_APP_API_KEY;

function DataList() {
  const { movies } = useData();
  const [movieList, setMovieList] = useState([]);

  // let datalist = movies ? movies.results : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://api.themoviedb.org/3/search/movie/?api_key=${API_KEY}&language=en-US&query=all`;
        const response = await fetch(url);
        const data = await response.json();
        setMovieList(data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    movies && setMovieList(movies);
  }, [movies]);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div className="movies">
      {movieList ? (
        <ul className="movielist">
          {movieList
            .filter((movie) => movie.poster_path)
            .map((movie) => {
              return (
                <li key={movie.id} className="movielist--item">
                  <figure
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path})`,
                    }}
                  >
                    {/* <img
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${item.poster_path}`}
                    alt={item.title}
                  /> */}
                    <figcaption>
                      <small>{movie.overview}</small>
                    </figcaption>
                  </figure>
                  <div className="movielist--item--details">
                    <h5 className="movielist--item--details--title">
                      {movie.title}
                    </h5>
                    <p className="movielist--item--details--rdate">
                      <small>Release date: {movie.release_date}</small>
                    </p>
                  </div>
                </li>
              );
            })}
        </ul>
      ) : (
        <p>No data...</p>
      )}
    </div>
  );
}

export default DataList;
