// ! Reto Condicional IF
const isLeapYear = year => {
  if (!(year % 1 === 0) || year <= 0) {
    return false;
  }

  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const respuesta = isLeapYear(2000);
console.log(respuesta);
