import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs'); // fingimos llamadas a este archivo y controlamos la informacion que responde

describe('pruebas en el componente <GifGrid />', () => {

    const category = 'Pokemon';

    test('should show the component correctly', () => {
        // Simulacion del useFetchGifs, con los valores que deberia regresar
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( <GifGrid category={ category } /> );
        expect( wrapper ).toMatchSnapshot();
        
    });

    test('should show items when img load with useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier cosa'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        // Vamos a hacer un mock para fingir algo, como si mi custom hook ya hubiera traido la informacion
        
        const wrapper = shallow( <GifGrid category={ category } /> );

        // expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );

        
    })
    
    
    
})
