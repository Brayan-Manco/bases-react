import { string } from "prop-types";
import { retornaArreglo } from "../../src/bases/03-deses-arr"

describe('Pruebas 03-Deses', () => { 
    test('Debe retornar un string y un numero', () => { 

        const [ letters, numbers ] = retornaArreglo();

        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        // evalua el tipo de dato
        expect( typeof letters ).toBe('string');
        expect( typeof numbers ).toBe('number');

        // para vefiricar que es este tipo de dato (String)
        expect( letters ).toEqual( expect.any(String));
     })
 })