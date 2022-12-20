function exercice3(n) {
  let nombreEtapes = 0;
  while(n !== 1){
    if(nombreEstPair(n)){
      n = n/2;
    } else {
       n = n*3 + 1
    }
    nombreEtapes++;
  }
  return nombreEtapes;
}

function nombreEstPair(nombre) {
  // On verra l'opérateur modulo '%' dans le module intermédiaire !
  return nombre % 2 === 0;
}

// Ne touchez pas à la ligne suivante
module.exports = exercice3;