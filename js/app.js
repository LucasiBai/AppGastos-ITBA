const formulario = document.querySelector("#formulario");
const contenedorNombres = document.querySelector("#contenedorNombres");
const total = document.querySelector("#totalN");
const promedio = document.querySelector("#promedio");

// Calcular total
function calcularTotal(listadoDinero) {
	let total = 0;
	for (const pagado of listadoDinero) {
		total += pagado;
	}
	return total;
}

// Calculamos promedio
function calcularPromedio(listadoDinero) {
	let total = 0;
	let i = 0;
	for (let numero of listadoDinero) {
		total += numero;
		i += 1;
	}
	return parseInt(total / i);
}

// Array con Values
const nombres = [];
const importes = [];
// Evento enviar
formulario[2].addEventListener("click", () => {
	const nombre = formulario[0].value || false;
	const importe = formulario[1].value || 0;
	if (!nombre || !importe) {
		alert("Debe cargar ambos campos");
	} else {
		//Pusheamos al array nombres el nombre cargado
		nombres.push(nombre);
		//Pusheamos al array importes
		importes.push(parseFloat(importe));
		// imprimimos Todo
		imprimirTodoHtml();
		formulario.reset();
	}
});

function imprimirEnTabla() {
	contenedorNombres.innerHTML = "";
	for (const nombre of nombres) {
		let i = nombres.indexOf(nombre);
		contenedorNombres.innerHTML += `
      <tr class="lista__nombre">
        <td>${nombre}: $${importes[i]}</td>
      </tr>`;
	}
}

function imprimirTotal(listadoDinero) {
	total.innerText = `Total: $${calcularTotal(listadoDinero)}`;
}

function imprimirPromedio(listadoDinero) {
	promedio.innerText = `A cada uno le toca aportar: $${calcularPromedio(
		listadoDinero
	)}`;
}
let imprimirTodoHtml = () => {
	imprimirTotal(importes);
	imprimirEnTabla();
	imprimirPromedio(importes);
};
