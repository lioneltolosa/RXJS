import { range, of, asyncScheduler } from 'rxjs';

console.log('Inicio')
const obs$ = range(1,5, asyncScheduler);
console.log('Fin')

obs$.subscribe(console.log)