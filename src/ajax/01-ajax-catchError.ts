import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';



const url = 'https://api.github.com/users?per_page=5';

const manejaErrores = ( response: Response ) => {

    if ( !response.ok ) {
        throw new Error( response.statusText );
    }
    
    return response;
}

const atrapaError = (err: AjaxError) => {
    console.warn('error en:', err.message );
    return of([]);
}



const fetchPromesa = fetch( url );

// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error en usuarios', err ) )

// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('error en usuarios', err ) )

ajax( url ).pipe(
    pluck('response'),
    catchError( atrapaError )
)
.subscribe( users => console.log('usuarios:', users) );





// Lionel Tolosa

/* import { ajax, AjaxError } from 'rxjs/ajax';
import { map, pluck, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const url = 'http://httpbin.org/delay/1'; */

/* ajax.post(url, {
    id: 1,
    name: 'Lion'
}, {
    'mi-token': 'AAA'
}).subscribe(console.log) */

/* ajax({
    url,
    method: 'PUT',
    headers: {
        'mi-token': '12345678'
    },
    body: {
        id: 1,
        name: 'Lionel'
    }
}).subscribe(console.log) */

/* const url = 'http://api.github.com/users?per_page=5';

const handlerErrors = ( response: Response) => {
    if( !response.ok ) {
        throw new Error( response.statusText)
    } 
    return response
}

const takeErrors = (err: AjaxError) => {
    console.warn('El error es:', err.status)
    return of([])
} */

// const fetchPromise = fetch( url );

/* fetchPromise
    .then( handlerErrors )
    .then( resp => resp.json())
    .then( data => console.log(data))
    .catch( err => console.warn(err)) */

// RXJS - AJAX

/* ajax( url )
    .pipe(
        // map(resp => resp.response)
        pluck('response'),
        catchError(takeErrors)
    )
    .subscribe( users => console.log('Users:', users)) */


