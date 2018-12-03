var pantalla = document.getElementById('display')
var teclas = document.querySelectorAll('.tecla');
var iniciar = true;
var resultado = 0;
var calc = true;
var ultimaOperacion = "";


teclas.forEach(function(e){//forEach es una propiedad que recorre todos los elementos del array
	e.addEventListener("click", function(){
		var entrada = this.id;
		if (entrada != "") {
			console.log("En ForEach la entrada es: "+entrada);
      procesador(entrada);
		}
	})
})


function procesador(entrada){
  var valor = pantalla.textContent;
	if (entrada == "." && valor.indexOf(".") > -1) return;
	if (entrada == "." && valor == "0") {
		pantalla.textContent = "0"+entrada;
		valor = pantalla.textContent;
		iniciar = false;
		return;
	}

	if (entrada =="sign" && valor.indexOf("-") > -1) {
		pantalla.textContent = "-"+valor;
		valor = pantalla.textContent;
		iniciar = false;
		console.log("Salimos porque - se repite")
		return;
	}

	if (entrada =="sign") {
		pantalla.textContent = "-"+valor;
		valor = pantalla.textContent;
		iniciar = false;
		console.log("ya funciona...")
		return;
	}

  if (entrada === "on") {
    pantalla.textContent = "0";
		iniciar = true;
		resultado = 0;
		calc = true;
  } else {
			if (iniciar) {
				valor = "";
				pantalla.textContent = valor;
				iniciar = false;
			};
			if (entrada === "mas" || entrada === "menos" || entrada === "por" || entrada === "dividido"|| entrada === "raiz") {
				iniciar = true;
				if (calc) {
					resultado = valor;
					calc = false;
					pantalla.textContent = "";
				} else {
					calculadora(valor);
					pantalla.textContent = "";
				}
				ultimaOperacion = entrada;
				//console.log(ultimaOperacion);
			} else {
						if (valor == "0" && pantalla.textContent == "0") {
							pantalla.textContent = entrada;
						}else {
							if (entrada == "igual") {
								calculadora(valor);
								resultado1 = resultado.toString();
								console.log(resultado1);
								if (resultado1.length > 8) {
									pantalla.textContent = resultado1.substring(resultado1.length - 8);
									console.log(resultado1.substring(resultado1.length - 8));
								} else {
									pantalla.textContent = resultado;
									console.log("probando dos");
								}

								calc = true;
								iniciar = true;
							} else {
								if (valor.length < 8) {
									console.log("longitud del valor: "+valor.length);
									pantalla.textContent = valor + entrada;
								}
										console.log("el valor es: "+valor+" la entrada es: "+entrada);
							}

						}



				}

			}

}

function calculadora(valor){
	valor = parseFloat(valor);
	resultado = parseFloat(resultado);
	switch(ultimaOperacion){
		case "mas":
			resultado = resultado + valor;
			console.log(resultado);
			break;

		case "menos":
			resultado = resultado - valor;
			console.log(resultado);
			break;

		case "por":
			resultado = resultado * valor;
			console.log(resultado);
			break;

		case "dividido":
			resultado = resultado / valor;
			console.log(resultado);
			break;

		case "raiz":
			resultado = Math.sqrt(valor);
			console.log(resultado);
			break;
	}
}
