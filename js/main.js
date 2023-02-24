/*

- Ciclo for da 1 a 100
- Iterazione -> if Mod 3 Stampa Fizz
- Iterazione -> if Mod 5 Stampa Buzz
- Iterazione -> if Mod 3 && 5 Stampa FizzBuzz

*/

const ObjTilesCollection = document.querySelector('.tiles-collection');


let i;

for(i = 1; i <= 100; i++){

    const ObjNewTile = document.createElement('div');

    if ((i % 3 == 0) && (i % 5 == 0)){

        ObjNewTile.classList.add('tile','bg-red');
        ObjNewTile.append('fizzbuzz');
        ObjTilesCollection.append(ObjNewTile);

        console.log('FizzBuzz');

    } else if (i % 3 == 0) {

        ObjNewTile.classList.add('tile','bg-green');
        ObjNewTile.append('fizz');
        ObjTilesCollection.append(ObjNewTile);

        console.log('Fizz');


    } else if (i % 5 == 0) {

        ObjNewTile.classList.add('tile','bg-yellow');
        ObjNewTile.append('buzz');
        ObjTilesCollection.append(ObjNewTile);

        console.log('Buzz');

    } else {

        ObjNewTile.classList.add('tile','bg-blue');
        ObjNewTile.append(i);
        ObjTilesCollection.append(ObjNewTile);

        console.log(i);
    }

}