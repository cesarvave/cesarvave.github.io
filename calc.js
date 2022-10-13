//Capturamos los elementos a menera de Arreglos
const botonNumeros = document.getElementsByName('data-number'); 
const botonOpera = document.getElementsByName('data-opera'); 
const botonIgual = document.getElementsByName('data-igual')[0]; 
const botonDelete = document.getElementsByName('data-delete')[0];
var result = document.getElementById('result');

//Variables de apoyo:
var opeActual='';
var opeAnterior='';
var operacion=undefined;

// El arreglo botonNumeros va a mostrar en result y guardar en variables estos numeros con el evento "hacer click"
// El arreglo botonOpera va a introducir la variable anterior en una función, va a hacer que opere con otra variable y va retornar un resultado con el evento "Hacer click"
// La constante Igual va a mostrar en pantalla el resultado con el evento "hacer click"

// La constante delete va a borrar de pantalla (variable result) lo que se encuentre en ella
// La variable result solo se dedicará a mostrar los datos

botonNumeros.forEach(function (boton){
    boton.addEventListener('click',function(){ 
        agregarNumero(boton.innerText);
    });
});//Son funciones que se definen dentro de otras funciones

botonOpera.forEach(function (boton){//Primero recorrer el arreglo
    
    boton.addEventListener('click',function(){//A cada elemento le creamos el evento "Hacer click"
        selectOperacion(boton.innerText);//Llamamos a la función de operacion tomando como argumento el dato dado (data-opera)---->Esta función se definirá más adelante
    });
});

botonIgual.addEventListener('click',function(){//Al botón igual le creamos un evento Click
        calcular();// Tendrá dos funciones: 1. Calcular el valor (el resultado de la operación)
        actualizarDisplay();//2. Mostrar el resultado en pantalla
});

botonDelete.addEventListener('click',function(){ //Al hacer click al botón Borrar
        Clear();//Llamará a esta función que quita lo que haya en pantalla
                //Supongo que también borrará lo guardado como variable
        actualizarDisplay();//Mostrá en pantalla que el dato fue borrado
});

//LOS MÉTODOS NO DEFINIDOS--------------------------------------------
function selectOperacion(op){
    if (opeActual === '')return;;
    if (opeAnterior !== ''){calcular();}
    
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual='';
   
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior); //Pasamos los numeros a tipo numerico
    const actual= parseFloat(opeActual);
    
    if (isNaN(anterior) || isNaN(actual))return; //Si alguno de los valores no es númerico; no retorna nada
   
    switch (operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'X':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default: return;
    }
    opeActual=calculo;
    operacion = undefined;
    opeAnterior = '';
    
    
}
function agregarNumero(num){
    opeActual = opeActual.toString() + num.toString(); //Unimos los string en vez de sumar los valores
    //Si colocaramos dos numeros se sumarian en vez de concatenarse
    actualizarDisplay();//Llama a la función para mostrar
}



function Clear(){
    opeActual='';
    opeAnterior='';
    operacion = undefined;
    actualizarDisplay();
}

function actualizarDisplay(){
    result.value=opeActual;
}

Clear();

