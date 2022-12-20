function exercice6() {
    let phrase = "" ;
    for(let i = 1; i <= 200; i++){
        if(Number.isInteger(i/3)){
            if(Number.isInteger(i/15)){
                phrase = phrase + "FizzBuzz - ";
            } else {
                phrase = phrase + "Fizz - ";
            } 
        } else if(Number.isInteger(i/5)){
            if(Number.isInteger(i/15)){
                phrase = phrase + "FizzBuzz - ";
            } else {
                if(i === 200){
                    phrase = phrase + "Buzz";
                } else{
                    phrase = phrase + "Buzz - ";
                }
            }
          } else {
            phrase = phrase + i + " - ";
        } 
    }
    
    return phrase;
}


// Ne touchez pas à la ligne suivante
module.exports = exercice6;