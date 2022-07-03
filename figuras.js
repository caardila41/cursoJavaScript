const ladoCuadro=5;

console.log("lOs lados del cuadrado miden: "+ladoCuadro);

 function perimetroCuadrado(lado){

    return lado*4;

 }

 function perimetroTriangulo(lado1,lado2,lado3){

    return lado1+lado2+lado3;
 }

 function perimetro(diametro){

    return diametro*Math.PI;
 }

 function areaTriangulo(base,altura){

    return base*altura/2;
 }
 function areaCuadrado(lado){

    return lado*lado;
 }

 function areaCirculo(radio){

    return Math.PI.radio^2;
 }


 //interactuamos con el html
 function calcularAreaCuadrado(){
    const input =document.getElementById("inputCuadrado");
    const value=input.value;

    const perimetro=areaCuadrado(value);
    alert(perimetro);


 }

 function calcularPerimetroCuadrado(){
    const input =document.getElementById("inputCuadrado");
    const value=input.value;

    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
 }
