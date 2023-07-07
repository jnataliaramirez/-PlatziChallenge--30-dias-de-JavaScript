const calculateTip = (billAmount, tipPercentage) => billAmount * (tipPercentage / 100);

const respuesta = calculateTip(1524.33, 25);
console.log(respuesta);

