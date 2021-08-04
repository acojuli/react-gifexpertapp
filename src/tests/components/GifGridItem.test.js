import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas en <GifGridItem />', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    const wrapper = shallow( <GifGridItem title={ title } url={ url } /> )


    test('should show the component correctly', () => {

        
        expect( wrapper ).toMatchSnapshot();
        
    })

    test('should have a paragraoh with the title', () => {

        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
    })

    test('should have the same img of the url and alt of props', () => {

        const img = wrapper.find('img');
        // console.log( img.prop('src') )
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title)

        
    })

    test('should have animate__fadeIn', () => {

        const div = wrapper.find('div');

        const className = div.prop('className');

        expect( className.includes('animate__fadeIn') ).toBe(true);
        
    })
    
    
    
    
    
})
