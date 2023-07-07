const getPetExerciseInfo = (type, age) => {
  switch (type) {
    case "perro":
      switch (true) {
        case age < 1:
          return "Los cachorros necesitan pequeñas y frecuentes sesiones de juego";
        case age >= 1 && age <= 7:
          return "Los perros a esta edad necesitan caminatas diarias y sesiones de juego";
        default:
          return "Los perros viejos necesitan caminatas más cortas";
      }

    case "gato":
      switch (true) {
        case age < 1:
          return "Los gatitos necesitan frecuentes sesiones de juego";
        case age >= 1 && age <= 7:
          return "Los gatos a esta edad necesitan jugar diariamente";
        default:
          return "Los gatos viejos necesitan sesiones de juego más cortas";
      }

    case "ave":
      switch (true) {
        case age < 1:
          return "Las aves jóvenes necesitan mucho espacio para volar";
        case age >= 1 && age <= 7:
          return "Las aves necesitan jugar diariamente y un lugar para volar";
        default:
          return "Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar";
      }

    default:
      return "Tipo de mascota inválida";
  }
};

const respuesta = getPetExerciseInfo("mamut", 1);
console.log(respuesta);

/* 1. Definir problema ¿Qué?
Retornar una cadena de texto con la información necesaria acerca de cuanto ejercicio necesita hacer cada tipo de mascota.

2. Analizar problema ¿Cómo? 
3. Pseudocódigo
Input: mascota, edad 

Condicional Switch
  opcion 1: "perro" {
    if (perro <= 1) {Texto}
    else if (perro > 1 && perro <= 7) {Texto}
    else {texto}
    break
  }
  opcion 2: "gato" {
    if (perro <= 1) {Texto}
    else if (perro > 1 && perro <= 7) {Texto}
    else {texto}
    break

  }
  opcion 3: "ave" {
    if (perro <= 1) {Texto}
    else if (perro > 1 && perro <= 7) {Texto}
    else {texto}
  }
  default {
    "este ${animal} no esta en la lista"
  }


4. Prueba de escritorio
*/
