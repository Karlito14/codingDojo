function exercice3(n) {
  let nombre = 0;
  while(n !== 1){
    if(n % 2 === 0){
      n = n/2;
      nombre++;
    } else {
       n = n*3 + 1
      nombre++;
    }
  }
  return nombre;
}

function nombreEstPair(nombre) {
  // On verra l'opérateur modulo '%' dans le module intermédiaire !
  return nombre % 2 === 0;
}

// Ne touchez pas à la ligne suivante
module.exports = exercice3;