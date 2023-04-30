function encriptar() 
  {
	let texto = document.getElementById("texto").value;
	let tituloMensaje = document.getElementById("titulo-mensaje");
	let parrafo = document.getElementById("parrafo");
	let muñeco = document.getElementById("muñeco");
	
	
	let textocifrado = texto
	    .replace(/e/gi, "enter")
		.replace(/i/gi, "imes")
		.replace(/a/gi, "ai")
		.replace(/o/gi, "ober")
		.replace(/u/gi, "ufat");


  if (document.getElementById("texto").value.length != 0) {
	  document.getElementById("texto").value = textocifrado;
	  tituloMensaje.textContent = 
	  "Texto encriptado con exito";
	  parrafo.textContent = "";
	  muñeco.src = "./img/encriptado.jpg";
      }    
	  else {
	        muñeco.src = "./img/Muñeco.png";
			tituloMensaje.textContent =
			"Ningun mensaje fue encontrado";
			parrafo.textContent = 
			"Ingresa el texto que deseas encriptar o desencriptar";
	        alert("debes ingresar algun texto");
               }
  }
  
  
  function desencriptar() {
	  
	  let texto = document.getElementById("texto").value;
	  let tituloMensaje = document.getElementById("titulo-mensaje");
	  let parrafo = document.getElementById("parrafo");
	  let muñeco = document.getElementById("muñeco");
	  
	  
	  	let textocifrado = texto
	    .replace(/enter/gi, "e")
		.replace(/imes/gi, "i")
		.replace(/ai/gi, "a")
		.replace(/ober/gi, "o")
		.replace(/ufat/gi, "u");
		
		if (texto.length != 0) {
			 document.getElementById("texto").value = textocifrado;
	         tituloMensaje.textContent = 
	           "Texto desencriptado con exito";
	         parrafo.textContent = "";
	         muñeco.src = "./img/desencriptado.jfif";
          } 
		  else {
			   muñeco.src = "./img/Muñeco.png";
			   tituloMensaje.textContent =
			     "Ningun mensaje fue encontrado";
			   parrafo.textContent = 
			     "Ingresa el texto que deseas encriptar o desencriptar";
	           alert("debes ingresar algun texto");
		  }
	 	
  }
