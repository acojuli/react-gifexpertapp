import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs Fetch', () => {

    test('should show 10 elements', async() => {
        
        const gifs = await getGifs('Pokemon');

        expect( gifs.length ).toBe( 12 );

    })

    test('should show an empty string', async() => {
        
        const gifs = await getGifs('');

        expect( gifs.length ).toBe( 0 );

    })
    
    
})
