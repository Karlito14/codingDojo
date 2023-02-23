function exercice0(phrase) {
  let newPhrase = "";
  const tableau = phrase.split(' ');
  
  for(let i = 0; i < tableau.length; i++){
    if(tableau[i][0] === "\""){
        newPhrase += tableau[i][1];
    } else {
        newPhrase += tableau[i][0];
    }
  }
  return newPhrase.toUpperCase()
}

// Ne touchez pas à la ligne suivante
module.exports = exercice0;