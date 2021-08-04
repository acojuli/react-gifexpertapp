import { shallow } from 'enzyme';
import GifExpertApp from '../GifExpertApp';

describe('Pruebas del componente <GifExpertApp />', () => {

    test('should show the component correctly', () => {

        const wrapper = shallow( <GifExpertApp /> )
        expect( wrapper ).toMatchSnapshot();
        
    });    

    test('should show a category list', () => {

        const categories = ['Pokemon', 'Dragon ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } /> );

        expect( wrapper ).toMatchSnapshot();
        // expect( wrapper.find('GifGrid').lenth ).toBe( categories.length );
        
    })
    
    
})
