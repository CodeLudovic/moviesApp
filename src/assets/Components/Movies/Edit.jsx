/* eslint-disable */
import React from "react";

export const Edit = ({ movie, getAllMovies }) => {
	const title_component = "Edit Movie";

	const saveEdit = (e, id) => {
		e.preventDefault();

		let target = e.target;

		const all_movies = getAllMovies();

		console.log(all_movies);
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
