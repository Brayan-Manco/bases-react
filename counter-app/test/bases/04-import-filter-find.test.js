import { getHeroeById, getHeroesByOwner } from "../../src/bases/04-import-filter-find";

describe('pruebas en 04-import-filter-find', () =>{
    test('getHeroeById debe retornar un heroe', () =>{
        const id = 1;
        const hero = getHeroeById( id );
        // console.log(hero);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
    })

    test('getHeroeById debe retornar un undefined si no existe', () =>{
        const id = 100;
        const hero = getHeroeById( id );
        // console.log(hero);

        expect( hero ).toBeFalsy();
    })

    test('getHeroesByOwner debe retornar una lista de DC length ===3', ()=> {
        
        const owner = 'DC'

        const listHeroe = [                                                                                                                            
            { id: 1, name: 'Batman', owner: 'DC' },                                                                                    
            { id: 3, name: 'Superman', owner: 'DC' },                                                                                  
            { id: 4, name: 'Flash', owner: 'DC' }                                                                                      
          ]
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes);

        expect(heroes.length).toEqual(3);
        expect(heroes).toEqual(listHeroe);
        expect( heroes ).toEqual( heroes.filter((heroe)=> heroe.owner === owner))
    })

    test('getHeroesByOwner debe retornar una lista de Marvel length ===2', ()=> {
        
        const owner = 'Marvel'

        const listHeroe = [                                                                                                                            
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }                                                                         
          ]
        const heroes = getHeroesByOwner(owner);
        // console.log(heroes);

        expect(heroes).toEqual(listHeroe);
    })

})