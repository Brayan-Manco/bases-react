import { getUser, getUsuarioActivo } from "../../src/bases/02-funciones";

describe('Pruebas en 02-deses', () => {
    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            user: 'Brayan'
        }

        const user = getUser();

        // expect( testUser ).toStrictEqual( user );
        expect( testUser ).toEqual( user );

    });

    test('getUsuarioActivo debe retornar un objeto',() => {
        const nombre = 'Brayan';

        const user = getUsuarioActivo(nombre);

        expect( user ).toStrictEqual({
            uid: 'ABC123',
            nombre: nombre
        });

    })
})