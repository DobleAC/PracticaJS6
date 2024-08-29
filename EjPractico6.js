const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numeros = [];

const solicitarNumeros = (contador = 0) => {
  if (contador < 6) {
    rl.question(`Introduce el número ${contador + 1}: `, (input) => {
      
      const numero = parseFloat(input);
      if (!isNaN(numero)) {
        numeros.push(numero);
        solicitarNumeros(contador + 1); 
      } else {
        console.log('Por favor, introduce un número válido.');
        solicitarNumeros(contador); 
      }
    });
  } else {
    
    rl.question('Introduce un número para filtrar los números mayores: ', (filtro) => {
      const numeroFiltro = parseFloat(filtro);
      if (!isNaN(numeroFiltro)) {
        
        const numerosFiltrados = numeros.filter(num => num > numeroFiltro);
        console.log(`Números mayores que ${numeroFiltro}:`, numerosFiltrados);
      } else {
        console.log('Por favor, introduce un número válido para filtrar.');
      }
      rl.close(); 
    });
  }
};


solicitarNumeros();
