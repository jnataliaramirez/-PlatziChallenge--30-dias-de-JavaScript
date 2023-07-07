const printTriangle = (size, character) => {
  let drawTriangule = "";

  for (let i = 0; i < size; i++) {
    for (let j = 1; j < size - i; j++) {
      drawTriangule = drawTriangule + " ";
    }

    for (let k = 0; k < i + 1; k++) {
      drawTriangule = drawTriangule + character;
    }

    if (i !== size - 1) {
      drawTriangule += "\n";
    }
  }

  return drawTriangule;
};

const respuesta2 = printTriangle(5, "*");
console.log(respuesta2);
