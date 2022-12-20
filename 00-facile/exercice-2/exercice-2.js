function exercice2(prenom) {
  if (prenom === undefined) {
    prenom = "toi";
  }
  return "Un pour " + prenom + ", un pour moi.";
}

// Ne touchez pas à la ligne suivante
module.exports = exercice2;