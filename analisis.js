const salariosCol =colombia.map(
    function (persona) {
       return persona.salary        
    }
);

const salariosColSorted=salariosCol.sort(
    function (salaryA,salaryB){
        return salaryA-salaryB
    }
)

function esPar(numero){
    if(numero%2===0){
        return true
    }else{
        return false
    }
}

function medianaSalarios(salario){
    const mitad= parseInt(salario.length/2)

    if (esPar(salario.length)){
        const personaMitad1=salario[mitad-1]
        const personaMitad2=salario[mitad]
        

        const personaMitad=mediaArimetica([personaMitad1,personaMitad2]);
        return personaMitad

    }else{
        
        const personaMitad=salario[mitad]
        return personaMitad;
    }
}

function mediaArimetica(array){
    const media=(array[0]+array[1])/2
    return media


}
 console.log(medianaSalarios(salariosColSorted))


 //madiana del top 10%

 const spliceStart=salariosColSorted.length*(90/100);
 const spliceCount=salariosColSorted.length-spliceStart;

 const salariosTop10=salariosColSorted.splice(spliceStart,spliceCount)

 const salriosMedianaTop10=medianaSalarios(salariosTop10)