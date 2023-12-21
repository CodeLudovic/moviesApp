/* eslint-disable*/
import React, { useEffect, useState } from "react";
import { Edit } from "./Edit";

export const List = ({ movies, setMovies }) => {
	const [edit, setEdit] = useState(0);

	useEffect(() => {
		getAllMovies();
	}, []);

	const getAllMovies = () => {
		let moviesL = JSON.parse(localStorage.getItem("movies"));
		setMovies(moviesL);
		return moviesL;
	};

	const deleteOnStorage = (id) => {
		const movies = getAllMovies();

		let updatedMovies = movies?.filter((elem) => elem.id !== parseInt(id));

		setMovies(updatedMovies);

		localStorage.setItem("movies", JSON.stringify(updatedMovies));
	};

	return (
		<>
			{Array.isArray(movies) && movies.length > 0 ? (
				movies?.map((movie) => {
					return (
						<article key={movie.id} className="peli-item">
							<h3 className="title">{movie.title}</h3>
							<p className="description">{movie.description}</p>

							<button onClick={() => setEdit(movie.id)} className="edit">
								Editar
							</button>
							<button
								onClick={() => deleteOnStorage(movie.id)}
								className="delete">
								Borrar
							</button>
							{/* <--- Desplega Form --> */}

							{edit === movie.id && (
								<Edit
									movie={movie}
									setMovies={setMovies}
									getAllMovies={getAllMovies}
									setEdit={setEdit}
								/>
							)}
						</article>
					);
				})
			) : (
				<p>No movies avaliable</p>
			)}
			{/* <!--aqui van las peliculas--> */}
		</>
	);
};
