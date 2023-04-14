# Evita el callback hell haciendo uso de Promises

En este desafío tienes un código base el cual se aplica una mala práctica de programación que conocemos como el callback hell y tu reto es evitarlo usando promesas.

Nota: No uses async/await, ya que este reto se trata de resolverlo mediante promesas con la función then.

Para solucionarlo vas a encontrar una función llamada runCode que no recibe parámetros de entrada que tiene el código base que tienes que refactorizar, además el archivo tasks.js con las funciones que tienes que ejecutar.

Dentro del cuerpo de la función runCode debes escribir tu solución y además pasar y deberías pasar las funciones del archivo tasks.js a promesas.


### Ejemplo 1:
```javascript
  Input:
  runCode()
  .then(response => console.log(response));
  
  Output:
  ["Task 1", "Task 2", "Task 3"]
```

## Código base: 
```javascript
// File tasks.js
  export function doTask1(callback) {
    window.setTimeout(() => callback('Task 1'), 300);
  }
  
  export function doTask2(callback) {
    window.setTimeout(() => callback('Task 2'), 300);
  }
  
  export function doTask3(callback) {
    window.setTimeout(() => callback('Task 3'), 300);
  }
```

```javascript
// File exercise.js
  import { doTask1, doTask2, doTask3 } from './tasks';
  
  export function runCode() {
    const strings = [];
    return new Promise((resolve) => {
      doTask1((rta1) => {
        strings.push(rta1);
        doTask2((rta2) => {
          strings.push(rta2);
          doTask3((rta3) => {
            strings.push(rta3);
            resolve(strings);
          })
        })
      })
    })
  }

```