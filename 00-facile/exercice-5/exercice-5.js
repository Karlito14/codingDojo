function exercice5(cote1, cote2, cote3) {
  if(cote1 === cote2 && cote2 === cote3){
    return "équilatéral";
  } else if(cote1 === cote2 || cote2 === cote3 || cote3 === cote1){
    if((cote1 + cote2 < cote3) || (cote1 + cote3 < cote2) || (cote2 + cote3 < cote1)){
        return "impossible";
    } else {
        return "isocèle";
    }
  } else if(cote1 !== cote2 && cote2 !== cote3 && cote3 !== cote1){
        if((cote1 + cote2 < cote3) || (cote1 + cote3 < cote2) || (cote2 + cote3 < cote1)){
        return "impossible";
    } else {
        return "scalène";
    }
  }
}

// Ne touchez pas à la ligne suivante
module.exports = exercice5;