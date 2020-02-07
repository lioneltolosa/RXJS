import { asyncScheduler } from 'rxjs';

// setTimeout ( () => {});
// setInterval ( () => {});

// const hi = () => console.log('Hola mundo');
// asyncScheduler.schedule(hi, 3000)


// const hi2 = name => console.log(`Hi ${name}`);
// asyncScheduler.schedule(hi2, 3000, 'Lionel') // Solo se puede pasar un argumento, puede ser tambien un objeto

const subs = asyncScheduler.schedule( function(state) {
    console.log(state);

    this.schedule( state + 1, 1000 )
}, 3000, 0);

// setTimeout( () => {
//     subs.unsubscribe()
// }, 6000)

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 )
