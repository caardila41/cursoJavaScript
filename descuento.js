function calcualDescuento(precio,descento){

    return precio*(descento/100)
}

function precioConDescuento(precio,descuento){
    const precioConDescuento=precio-calcualDescuento(precio,descuento)

    return precioConDescuento
}

function onClickPriceDiscont(){
    const inputPrice=document.getElementById("inputPrice");
    const priceValue=inputPrice.value;

    const inputDiscount=document.getElementById("inputDiscount");
    const discountValue=inputDiscount.value;

    const precioDescuento=precioConDescuento(priceValue,discountValue);

    const labelPrice=document.getElementById("price");

    labelPrice.innerText="el precio con descuento es: "+precioDescuento;
}


