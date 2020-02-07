import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('Siguente:', value),
    error: err => console.error(err),
    complete: () => console.info('Completado')
};

const obs$ = new Observable<string>( subs => {
    subs.next('Lionel');
    subs.next('Tolosa');

    subs.complete();

    subs.next('Liooooo');
    subs.next('Miguell');

});

obs$.subscribe(observer);

//obs$.subscribe( resp => { console.log(resp)}); // Esto es igual a 

// obs$.subscribe(console.log); // esto de aqui abajo

/* obs$.subscribe( 
    value => console.log('next', value),
    error => console.warn('Error', error),
    () => console.info('Complete')
)
 */