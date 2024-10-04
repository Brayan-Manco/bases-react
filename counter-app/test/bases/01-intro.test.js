import { getSaludo } from "../../src/bases/01-intro";

describe('intro', () => {
    test('getSaludo debe retonar "Hola Brayan', () => {
        
        const name = 'Brayan';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${name}`);
    })
})