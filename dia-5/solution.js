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

  // Al retornar si el arreglo solo tiene 1 posición devolverla la palabra sino null
  return palindromes.length > 1 ? palindromes[0] : null;
};