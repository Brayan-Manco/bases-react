import { getHeroeById } from "./04-import-filter-find";

export const getHeroebyIdAsync = (id) => {
    return new Promise( (resolve, reject) => {

        setTimeout(() => {
            const p1 = getHeroeById(id);
            if ( p1 ) {
                resolve( p1 );
            } else {
                reject('No se pudo encontrar el heroe')
            }
        }, 1000)
    });
}