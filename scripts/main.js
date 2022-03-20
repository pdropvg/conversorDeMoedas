function ConverterEuroReal() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmNumerico = parseFloat(valor);
  var valorEmEuro = valorEmNumerico * 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmEuro;
  elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterRealEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmNumerico = parseFloat(valor);
  var valorEmReal = valorEmNumerico / 5;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em real é R$ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
