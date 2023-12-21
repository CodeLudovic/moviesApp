/* eslint-disable */
import React from "react";

export const Edit = ({ movie, getAllMovies, setMovies, setEdit }) => {
	const title_component = "Edit Movie";

	const saveEdit = (e, id) => {
		e.preventDefault();

		let target = e.target;

		const all_movies = getAllMovies();
		const index = all_movies.findIndex((movie) => movie.id === id);

		let movie_updated = {
			id,
			title: target.title.value,
			description: target.description.value,
		};

		//Update Movie by Index from localStorage
		all_movies[index] = movie_updated;

		// Save on localStorage new Array
		localStorage.setItem("movies", JSON.stringify(all_movies));
		// Update States
		setEdit(0);
		setMovies(all_movies);
	};

	return (
		<div className="edit_form">
			<h3 className="title">{title_component}</h3>

			<form onSubmit={(e) => saveEdit(e, movie.id)}>
				<input
					type="text"
					name="title"
					className="titulo_editado"
					defaultValue={movie.title}
				/>
				<textarea
					name="description"
					defaultValue={movie.description}
					className="descripcion_editada"
				/>

				<input type="submit" className="editar" value="Actualizar" />
			</form>
		</div>
	);
};
