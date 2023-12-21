export const saveOnLocalStorage = (key, element) => {
	let elementos = JSON.parse(localStorage.getItem(key));
	Array.isArray(elementos) ? elementos.push(element) : (elementos = [element]);
	localStorage.setItem(key, JSON.stringify(elementos));
	return element;
};
