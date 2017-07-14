function division(){
  var a = 0;
  var b = 0;
  var resultado = 0;
  var resto = 0;
  //primero jalamos los valores
  a = document.getElementById('dividendo').value;
  b = document.getElementById('divisor').value;
  // luego convertimos valores a numeros
  a = parseInt(a);
  b = parseInt(b);
  // realizamos operaciones
  resto = a % b;
  resultado = a / b;

  console.log("Resto");
  console.log(resto);
  console.log("resultado");
  console.log(resultado);

  if(resto == 0){
    console.log("La division es exacta")
  }else{
    //si no es exacta regresar la parte entera del resultado
    console.log(resultado);
    resultado = parseInt(resultado);
    console.log(resultado);
  }

}
