const resultado = document.querySelector(".resultado");
const display = document.querySelector("#display");

const input1 = document.querySelector("#primerValor");
const input2 = document.querySelector("#segundoValor");

const botonesOperacion = document.querySelectorAll(".botonOperacion");
const tema = document.querySelectorAll(".tema");

// CALCULOS

const operacionesMatematicas = (primerValor, operacion, segundoValor) => {
	return eval(primerValor + operacion + segundoValor);
};

botonesOperacion.forEach((botonOperacion) => {
	botonOperacion.addEventListener("click", () => {
		try {
			const result = operacionesMatematicas(
				input1.value,
				botonOperacion.value,
				input2.value
			);
			console.log(result);
			resultado.innerText = result;
		} catch (error) {
			alert("Ingrese valores númericos");
			console.log(error);
		}
	});
});

// TEMA DEL DISPLAY

tema.forEach((temaElement) => {
	temaElement.addEventListener("click", () => {
		cambiarTema(temaElement.id, display);
	});
});

const cambiarTema = (tema, pantalla) => {
	console.log("display" + tema);
	pantalla.className = "";
	pantalla.classList.add(tema);
};
