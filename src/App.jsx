import { useState } from "react";
import { Add } from "./assets/Components/Movies/Add";
import { List } from "./assets/Components/Movies/List";
import { Search } from "./assets/Components/Movies/Search";

function App() {
	const [moviesList, setMoviesList] = useState([]);

	return (
		<div className="layout">
			{/* <!--Cabecera--> */}
			<header className="header">
				<div className="logo">
					<div className="play"></div>
				</div>

				<h1>MovieApp</h1>
			</header>

			{/* <!--Barra de navegación--> */}
			<nav className="nav">
				<ul>
					<li>
						<a href="#">Inicio</a>
					</li>
					<li>
						<a href="#">Peliculas</a>
					</li>
					<li>
						<a href="#">Blog</a>
					</li>
					<li>
						<a href="#">Contacto</a>
					</li>
				</ul>
			</nav>

			{/* <!--Contenido principal--> */}
			<section id="content" className="content">
				<List movies={moviesList} setMovies={setMoviesList} />
			</section>

			{/* <!--Barra lateral--> */}
			<aside className="lateral">
				<Search movies={moviesList} setMovies={setMoviesList} />
				<Add setMoviesList={setMoviesList} />
			</aside>

			{/* <!--Pie de página--> */}
			<footer className="footer">
				&copy; Máster en React -
				<a href="https://codeludovic.vercel.app"> Codeludovic Dev</a>
			</footer>
		</div>
	);
}

export default App;
