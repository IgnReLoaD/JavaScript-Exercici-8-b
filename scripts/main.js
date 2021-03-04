
// ... podem passar els parametres

// function calcular(ope, num1, num2){
    // switch (ope) {
    //     case suma:  operacio = parseInt(num1) + parseInt(num2); break;
    //     case rest:  operacio = parseInt(num1) - parseInt(num2); break;
    //     case mult:  operacio = parseInt(num1) * parseInt(num2); break;
    //     case divi:  if (num2 == 0 ) {
    //                     operacio = "NO POTS DIVIDIR PER ZERO";
    //                 } else { operacio = parseInt(num1) / parseInt(num2); }
    // }

// }

// ... o podem agafar els valors per DOM 
function calcular(){

    let num1 = document.getElementById("spnPrimer").value;  // recollir valor 
	let num2 = document.getElementById("spnSegon").value;  // recollir valor 

	if (document.getElementById("radSuma").checked) {
		operacio = parseInt(num1) + parseInt(num2); 
	} else if (document.getElementById("radResta").checked) {
		operacio = parseInt(num1) - parseInt(num2); 
	} else if (document.getElementById("radMulti").checked) {
		operacio = parseInt(num1) * parseInt(num2); 
	} else if (document.getElementById("radDivi").checked) {
        if (num2 == 0) {
            operacio = "NO POTS DIVIDIR PER ZERO";
        } else {
		operacio = parseInt(num1) / parseInt(num2); 
        }
	} else alert ("marcar alguna operacio");
	
	let result = "<br>El resultat es: " + operacio + ". <br>";	
	document.getElementById("mostrarDatos").innerHTML = result;
	
// ampliacio - ocultem el botó executar i mostrem el botó per tornar a jugar
	document.getElementById("calcular").style.display="none";
    document.getElementById("actualitzar").style.display="block";
}

function actualizar(){
    location.reload();
}
