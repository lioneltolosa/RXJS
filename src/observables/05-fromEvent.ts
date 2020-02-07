import { fromEvent } from 'rxjs';

const clicks1 = fromEvent<MouseEvent>(document, 'click');
const clicks2 = fromEvent<KeyboardEvent>(document, 'keyup');


const observer = {
    next: val => console.log('next', val)
}

clicks1.subscribe( ({x, y}) => {
    console.log('x', x, 'y', y)
});

clicks2.subscribe(event => {
    console.log(event.key)
});

