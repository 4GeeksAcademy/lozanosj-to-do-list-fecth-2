import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	// let nuevoTodo ="";

	const [nuevoTodo, setNuevoTodo] = useState("");
	const [todos, setTodos] = useState([]);

	const handleClick = () => {
		console.log("nueva tarea", nuevoTodo);
		//
		setTodos([...todos, nuevoTodo])
	}

	const deleteTodo = (indice) => {
		console.log(indice);
		const listaNueva = todos.filter((todo, i) => i !== indice);
		setTodos(listaNueva);
	}

	const handleChange = (event) => {
		console.log(event.target.value);
		setNuevoTodo(event.target.value);
	}

	return (
		<div className="">
			<h1 className="text-center mt-5">
				Todo List React + Fecth
			</h1>

			<div className="container mt-3">
				<div className="d-flex gap-2">

					<input type="text" onChange={handleChange} className="form-control"/>
					<button onClick={handleClick} className="btn btn-primary">
						Agregar Tarea
					</button>

				</div>
				<p className="mt-3">
					Preview: {nuevoTodo}
				</p>

				<ul className="list-group list-group-flush">
					{todos.map((todo, indice) => {
						return (
							<li className="list-group-item d-flex justify-content-between align-items-center">
								{todo}	<buttom className="btn btn-danger" onClick={() => deleteTodo(indice)}> X </buttom>
							</li>
						)
					})}
				</ul>

			</div>
		</div>
	);
};

export default Home;
