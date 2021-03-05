
// ******* IT Academy - Exercici 8-a.                                               ****************
//         versió entrant 2 valors per separat per pantalla i escollint un operador ****************

// function calcular(){
//  let num1 = document.getElementById("spnPrimer").value;  // recollir valor 
// 	let num2 = document.getElementById("spnSegon").value;  // recollir valor 

// 	if (document.getElementById("radSuma").checked) {
// 		operacio = parseInt(num1) + parseInt(num2); 
// 	} else if (document.getElementById("radResta").checked) {
// 		operacio = parseInt(num1) - parseInt(num2); 
// 	} else if (document.getElementById("radMulti").checked) {
// 		operacio = parseInt(num1) * parseInt(num2); 
// 	} else if (document.getElementById("radDivi").checked) {
//         if (num2 == 0) {
//             operacio = "NO POTS DIVIDIR PER ZERO";
//         } else {
// 		operacio = parseInt(num1) / parseInt(num2); 
//         }
// 	} else alert ("marcar alguna operacio");
	
// 	let result = "<br>El resultat es: " + operacio + ". <br>";	
// 	document.getElementById("mostrarDatos").innerHTML = result;
	
// // ampliacio - ocultem el botó executar i mostrem el botó per tornar a jugar
// 	document.getElementById("calcular").style.display="none";
//     document.getElementById("actualitzar").style.display="block";
// }

// function actualizar(){
//     location.reload();
// }
// _________________________________________________________________________________________________




// ******* IT Academy - Exercici 8-b.                                               ****************
//         versió amb Gràfics de Bootstrap, AddEventListener i Validacions          ****************


// ________ Variables globals de 2 valors; i estat ___________________________________

var acumulat1 = "";
var acumulat2 = "";
var estat = true;   // true = estem entrant el primer numero; o false = segon numero

// ________ Variables per recollir/identificar del DOM els botons apretats ___________

var numUno    = document.querySelector("#btn-bt1");
var numDos    = document.querySelector("#btn-bt2");
var numTres   = document.querySelector("#btn-bt3");
var numQuatre = document.querySelector("#btn-bt4");
var numCinc   = document.querySelector("#btn-bt5");
var numSis    = document.querySelector("#btn-bt6");
var numSet    = document.querySelector("#btn-bt7");
var numVuit   = document.querySelector("#btn-bt8");
var numNou    = document.querySelector("#btn-bt9");
var numZero   = document.querySelector("#btn-bt0");
var decimal   = document.querySelector("#btn-dec");

var opeSuma   = document.querySelector("#btn-sum");
var opeResta  = document.querySelector("#btn-res");
var opeMulti  = document.querySelector("#btn-mul");
var opeDivi   = document.querySelector("#btn-div");
var opePoten  = document.querySelector("#btn-pot");
var opeArrel  = document.querySelector("#btn-sqr");

var btnExe  = document.querySelector("#btn-exe");
var btnClr    = document.querySelector("#btn-clr");

// _________________ Events pels números i pel decimal ______________________________

numUno.addEventListener('click',function() {
    let valor = acumula('1');    
    mostrar(valor);
} );

numDos.addEventListener('click',function() {
    let valor = acumula('2');    
    mostrar(valor);    
} );

numTres.addEventListener('click',function() {
    let valor = acumula('3');    
    mostrar(valor);    
} );

numQuatre.addEventListener('click',function() {
    let valor = acumula('4');    
    mostrar(valor);    
} );

numCinc.addEventListener('click',function() {
    let valor = acumula('5');    
    mostrar(valor);    
} );

numSis.addEventListener('click',function() {
    let valor = acumula('6');    
    mostrar(valor);    
} );

numSet.addEventListener('click',function() {
    let valor = acumula('7');    
    mostrar(valor);    
} );

numVuit.addEventListener('click',function() {
    let valor = acumula('8');    
    mostrar(valor);    
} );

numNou.addEventListener('click',function() {
    let valor = acumula('9');    
    mostrar(valor);    
} );

numZero.addEventListener('click',function() {
    let valor = acumula('0');    
    mostrar(valor);    
} );

decimal.addEventListener('click',function() {
    let valor = acumula('dec');    
    mostrar(valor);    
} );

// _______________ Events Operadors per saber què calcular _________________________

opeSuma.addEventListener('click',function() {
    if (acumulat1 != "") {
        mostrar(acumulat1 + ' +');
        estat = false;
        operador = '+';
    } 
} );

opeResta.addEventListener('click',function() {
    if (acumulat1 != "") {
        mostrar(acumulat1 + ' -');
        estat = false;
        operador = '-';
    } 
} );

opeMulti.addEventListener('click',function() {
    if (acumulat1 != "") {
        mostrar(acumulat1 + ' x');
        estat = false;
        operador = '*';
    } 
} );

opeDivi.addEventListener('click',function() {
    if (acumulat1 != "") {
        mostrar(acumulat1 + ' /');
        estat = false;
        operador = '/';
    } 
} );

opePoten.addEventListener('click',function() {
    if (acumulat1 != "") {
        mostrar(acumulat1 + ' pot');
        estat = false;
        operador = 'p';
    } 
} );

opeArrel.addEventListener('click',function() {
    if (acumulat1 != "") {
        mostrar(acumulat1 + ' sqr');
        estat = false;
        operador = 's';
        calcular();    // l'arrel quadrada no té un segon valor, per tan va a Calcular
    } 
} );

// _________________ Events dels botons Clear i Executar _____________________________

btnClr.addEventListener('click',function() {
    acumulat1 = "";
    acumulat2 = "";
    operador  = "";
    estat     = true;
    mostrar(acumulat1);
} );

btnExe.addEventListener('click',function() {
    calcular();
});

// __________________ FUNCIO per a CALCULAR ___________________________________________

function calcular() {    
    if ( (acumulat1 != "") && ((acumulat2 != "") || (operador == "s")) && ( operador != "") ) {
        let result = 0;
        switch (operador) {
            case '+' :  result = (parseInt(acumulat1) + parseInt(acumulat2)); break;
            case '-' :  result = (parseInt(acumulat1) - parseInt(acumulat2)); break;
            case '*' :  result = (parseInt(acumulat1) * parseInt(acumulat2)); break;
            case '/' :  (acumulat2 == 0) ? result = "Error - div 0" : result = (parseInt(acumulat1) / parseInt(acumulat2)); break;
            case 's' :  result = Math.sqrt(parseInt(acumulat1)); break;
            case 'p' :  result = Math.pow(parseInt(acumulat1), parseInt(acumulat2));
        }
        mostrar(result);
        estat = true;   // per tornar a entrar el primer número per una altra operació

        // segons calculadora de windows i de iPhone, un cop hem calculat, el estat queda
        //   com que el segon valor se aplica la última operació al result, al apretar de nou "="
        acumulat1 = result;   
        // acumulat1 = "";
        // acumulat2 = "";  
        // operador  = "";
    }  
       //  else {
       //      mostrar('E');   // o no fer res
       //  }
} 

// _________________ Funcions per Mostrar i Acumular _____________________________

function mostrar(valor){
    document.querySelector('#screen').innerHTML = valor;
}

function acumula(valor){    
    if (estat) {
        if (valor == "dec") {
            // comprobem que no hi hagi la coma de decimals ja informada en el número de la pantalla
            // if ((acumulat1.charAt(acumulat1.length - 1)) == ",") {
            if (acumulat1.indexOf(',') != -1) {                
                console.log("no fem res, ja que el numero conté ja una coma.");
            } else if (acumulat1 == "") {
                acumulat1 = "0,";
            } else {
                acumulat1 = acumulat1 + ",";
            }
        } else {
            acumulat1 = acumulat1 + valor;
        }
        valor = acumulat1;
    } else {
        if (valor == "dec") {
            if (acumulat2.indexOf(',') != -1) {                
                console.log("no fem res, ja que el numero conté ja una coma.");            
            } else if (acumulat2 == "") {
                acumulat2 = "0,";
            }
            else {
                acumulat2 = acumulat2 + ",";
            }
        } else {
            acumulat2 = acumulat2 + valor;
        }
        valor = acumulat2;
    }    
    return valor;
}
