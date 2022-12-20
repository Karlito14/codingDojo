function exercice6() {
    let resultat = [];

    for (let nombre = 1; nombre <= 200; nombre++) {
        resultat.push(fizzBuzz(nombre));
    }

    return resultat.join(' - ');
}

function fizzBuzz(nombre) {
    if (nombre % 15 === 0) {
        return "FizzBuzz";
    }
    if (nombre % 3 === 0) {
        return "Fizz";
    }
    if (nombre % 5 === 0) {
        return "Buzz";
    }
    return nombre;
}
// Ne touchez pas à la ligne suivante
module.exports = exercice6;