import { getImagen } from "../../src/bases/07-aysinc-await"

describe('Pruebas en 07-aysinc', () => { 
    test('getImage debe retonar una urlde la imagen', async() => { 
        const url = await getImagen();
        // console.log(url); 
        expect( typeof url).toBe('string')
     })
 })