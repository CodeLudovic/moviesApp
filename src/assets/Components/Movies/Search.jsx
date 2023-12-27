/* eslint-disable */
import React, { useState } from "react";

export const Search = ({ movies, setMovies }) => {
	const [search, setSearch] = useState("");
	const [notFind, setNotFind] = useState(false);

	const searchMovie = (e) => {
		// Set State with a value to avoid errors on undefined state or something
		setSearch(e.target.value);
		// Filter coincidences
		let movies_founded = movies.filter((movie) => {
			return movie.title.toLowerCase().includes(search.toLowerCase());
		});
		if (
			search.length <= 0 ||
			movies_founded.length <= 0 ||
			e.target.value === ""
		) {
			movies_founded = JSON.parse(localStorage.getItem("movies"));
			//setMovies(movies_founded);
			setNotFind(true);
		} else setNotFind(false);

		//console.log(movies_founded);
		setMovies(movies_founded);
	};

	return (
		<div className="search">
			<h3 className="title">Search: {search}</h3>
			{notFind && search.length > 1 && (
				<span className="no-encontrado">No se encontro ningun resultado</span>
			)}
			<form>
				<input
					type="text"
					id="search_field"
					name="search"
					autoComplete="off"
					value={search}
					onInput={(e) => searchMovie(e)}
				/>
				<button id="search">Buscar</button>
			</form>
		</div>
	);
};
