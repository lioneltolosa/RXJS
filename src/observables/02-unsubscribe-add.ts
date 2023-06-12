import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguente:', value),
    error: err => console.error(err),
    complete: () => console.info('Completado')
};

const intervalos$ = new Observable<number>(subs => {

    let count = 0;

    let interval = setInterval( () => {
        count++
        subs.next(count);

        console.log(count)
    }, 1000);

    return () => {
        clearInterval(interval);
        console.log('Interval destroy', interval)
    }
});

const subscription1 =  intervalos$.subscribe(observer);
const subscription2 =  intervalos$.subscribe(observer);
const subscription3 =  intervalos$.subscribe(observer);

subscription1.add( subscription2 )
            /*  .add( subscription3 ) */

setTimeout(() => {
    subscription1.unsubscribe();

    console.log('Completado el timeout')
}, 3000 );

