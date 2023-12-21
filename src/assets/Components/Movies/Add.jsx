import React, { useState } from "react";
import { saveOnLocalStorage } from "../../../helpers/SaveOnStorage";

export const Add = ({ setMoviesList }) => {
	const titleComponent = "Add Movie";
	const [movies, setMovies] = useState({
		title: "",
		description: "",
	});

	const { title, description } = movies;

	const getFormData = (e) => {
		e.preventDefault();

		let target = e.target;
		let title = target.title.value;
		let description = target.description.value;

		if (title === "" || description === "") {
			alert("Need to fill all fields");
			return;
		}

		let movie = {
			id: new Date().getTime(),
			title,
			description,
		};

		setMovies(movie);

		setMoviesList((elements) => {
			return [movie, ...elements];
		});

		saveOnLocalStorage("movies", movie);
	};

	return (
		<div className="add">
			<h3 className="title">{titleComponent}</h3>

			{title && description && (
				<>
					Movie <strong>{title}</strong> has been created succesfully
				</>
			)}
			<form onSubmit={getFormData}>
				<input type="text" id="title" name="title" placeholder="Title" />
				<textarea
					id="description"
					name="description"
					placeholder="Description"></textarea>
				<input type="submit" id="save" value="Add" />
			</form>
		</div>
	);
};
