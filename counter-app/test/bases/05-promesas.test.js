import { getHeroebyIdAsync } from "../../src/bases/05-promesas";

describe('Pruebas en 05-promesas', () => { 
    test('getHeroeById debe retornar un heroe', (done) => { 

        const id = 1;
        getHeroebyIdAsync(id)
            .then( hero => {
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done();
            })
     }
    )
    test('getHeroeById debe obnter un erros si el heroe no existe', (done) => { 

        const id = 100;
        getHeroebyIdAsync(id)
            .then( hero  => {
                expect( hero ).toBeFalsy();
                done();
            })
            .catch( error =>{
                expect( error).toBe(`No se pudo encontrar el heroe`)
                done();
            })
     }
    )
 })