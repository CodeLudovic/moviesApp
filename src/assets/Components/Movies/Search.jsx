import React, { useState } from "react";

export const Search = ({ movies, setMovies }) => {
	const [search, setSearch] = useState("");

	const searchMovie = (e) => {
		// Set State with a value to avoid errors on undefined state or something
		setSearch(e.target.value);
		// Filter coincidences

		let movies_founded = movies.filter((movie) => {
			return movie.title.toLowerCase().includes(search.toLowerCase());
		});

		if (search.length <= 1 || movies_founded <= 0) {
			movies_founded = JSON.parse(localStorage.getItem("movies"));
		}

		setMovies(movies_founded);
	};

	return (
		<div className="search">
			<h3 className="title">Buscador</h3>
			<form>
				<input
					type="text"
					id="search_field"
					name="search"
					autoComplete="off"
					value={search}
					onChange={searchMovie}
				/>
				<button id="search">Buscar</button>
			</form>
		</div>
	);
};
