/*

- Ciclo for da 1 a 100
- Iterazione -> if Mod 3 Stampa Fizz
- Iterazione -> if Mod 5 Stampa Buzz
- Iterazione -> if Mod 3 && 5 Stampa FizzBuzz

*/

let i;

for(i = 1; i <= 100; i++){

    if ((i % 3 == 0) && (i % 5 == 0)){

        console.log('FizzBuzz');

    } else if (i % 3 == 0) {

        console.log('Fizz');

        
    } else if (i % 5 == 0) {

        console.log('Buzz');

    } else {
        console.log(i);
    }

}