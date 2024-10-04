describe('Pruebas en <DemoComponent/>', () => {
    test('primera prueba', () => { 
  
        // 1. Inicialización
        const message1 = 'Hola mundo'
    
        // 2. Estumulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento... Esperado
            //Instalar @types/jest como dependecia para tener ayuda
        expect( message1 ).toBe(message2)
    
     })
})

