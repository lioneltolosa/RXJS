import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguente:', value),
    error: err => console.error(err),
    complete: () => console.info('Completado')
};

const interval$ = new Observable<number>( subs => {

    let interval = setInterval( 
        () => subs.next( Math.random()
    ), 1000)

    return () => {
        clearInterval(interval)
        console.log('Intervalo destruido')
    }
});

/* interval$.subscribe( resp => {
    console.log(resp)
}) */

// SUBJECT
// CASTEO MULTIPLE
// TAMBIEN ES UN OBSERVER
// NEXT, ERROR, COMPLETE

const subject$ = new Subject();
const subscription = interval$.subscribe(subject$);

/* const subs1 = subject$.subscribe( rnd => console.log('Subs1', rnd))
const subs2 = subject$.subscribe( rnd => console.log('Subs2', rnd)) */

const subs1 = subject$.subscribe( observer )
const subs2 = subject$.subscribe( observer )


setInterval( () => {
    subject$.next(10);
    subject$.complete();

    subscription.unsubscribe();
}, 3000)
