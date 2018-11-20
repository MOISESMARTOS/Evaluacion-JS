var teclas = document.querySelectorAll('.tecla');
teclas.forEach(function(e){//forEach es una propiedad que recorre todos los elementos del array
	e.addEventListener("click", function(){
		var entrada = this.id;
		if (entrada != "") {
			console.log(entrada);
		}
	})
})
