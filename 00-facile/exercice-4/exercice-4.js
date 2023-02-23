function exercice4(nombre) {
  const lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let chiffreRomain = '';

  for (let i in lookup ) {
    while ( nombre >= lookup[i] ) {
        chiffreRomain += i;
        nombre -= lookup[i];
    }
  }
  return chiffreRomain;
    
}

// Ne touchez pas à la ligne suivante
module.exports = exercice4;