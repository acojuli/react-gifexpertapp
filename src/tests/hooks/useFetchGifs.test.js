import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('test on the hook useFetchGifs', () => {
    
    test('should retorn the initial state', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Pokemon' ) );
        const { data, loading } = result.current;

        await waitForNextUpdate();


        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        
    });

    test('should retorn an array of images and the loading in false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Pokemon' ) );
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe(12);
        expect( loading ).toBe(false);
        
    });

        
});
