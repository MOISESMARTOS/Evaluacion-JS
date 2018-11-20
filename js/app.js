var pantalla = document.getElementById('display')
var teclas = document.querySelectorAll('.tecla');
teclas.forEach(function(e){//forEach es una propiedad que recorre todos los elementos del array
	e.addEventListener("click", function(){
		var entrada = this.id;
		if (entrada != "") {
			console.log(entrada);
      procesador(entrada);
		}
	})
})

function procesador(entrada){
  var valor = pantalla.textContent;

  if (entrada === "on") {
    pantalla.textContent = "0";
  } else {
    pantalla.textContent = valor + entrada;
  }

}
