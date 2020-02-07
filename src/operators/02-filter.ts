import { range, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

interface Personajes {
    tipo: string;
    nombre: string;
}

const  personajes: Personajes[] = [ 
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

range(1,10).pipe(
    filter( ( val, i) => {
        return val % 2 === 1
    })
).subscribe(console.log)


/* const persons = personajes.filter( val => val.tipo === 'heroe')
console.log(persons); */

from(personajes).pipe(
    filter( val => val.tipo === 'heroe')
).subscribe(data => console.log(data))


fromEvent<KeyboardEvent>(document, 'keyup').pipe(
    map( event => event.code),
    filter(key => key !== 'Enter')
).subscribe(console.log)
