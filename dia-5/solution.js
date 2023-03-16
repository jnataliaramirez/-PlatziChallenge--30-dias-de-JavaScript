const findLargestPalindrome = (words) => {
  let palindromes = [];

  // Nuevo arreglo con las palabras al reves
  const wordsReverse = words.map((string) => {
    return string.split("").reverse().join("");
  });

  // Identificar que palabra es igual al array original
  words.map((element, index) => {
    if (element === wordsReverse[index]) {
      palindromes.push(element);
    }
  });

  // Ordenar de la palabra más larga a la más pequeña
  palindromes.sort((a, b) => b.length - a.length);

  // Si no llegan a existir coincidencias, retornará null
  if (palindromes.length === 0) {
    return null;
  }

  // Al retornar si el arreglo solo tiene 1 posición devolverla la palabra sino todo el arreglo
  return palindromes.length === 1 ? palindromes[0] : palindromes;
};

const print = findLargestPalindrome(["ada", "faf", "world", "hello"]);
console.log(print);
