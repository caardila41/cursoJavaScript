const lista1=[
    100,200,300,500
];

function promedio(lista){

    let sumaLista=0;
    lista.forEach(element => {
        sumaLista=sumaLista+element;
    });

    return sumaLista/lista.length;

}

lista1.sort()
