// Créez une fonction qui prend un entier comme argument et retourne "Pair" pour les nombres pairs ou "Odd" pour les nombres impairs.

function num (value){
    
    if(value % 2 ===0){
       return "paire";
    }else{
        return"odd";
    }
    
}

console.log(num(5));