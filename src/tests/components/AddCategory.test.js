import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Test on <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> );


    });


    test('should show correclty', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
    test('should change the text box', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        input.simulate('change', { target: { value } });

        expect( wrapper.find('p').text().trim() ).toBe( value );        
    })
    
    test('should dont post on submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} } );

        expect( setCategories ).not.toHaveBeenCalled();

    })

    test('should call setCategories and clean the text box', () => {

        const value = 'Hola Mundo';

        // 1. simular el inputChange
        wrapper.find('input').simulate('change', { target: { value } });

        // 2. simular el submit 
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        // 3. setCategories se debe haber llamado
        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );

        // 4. el value del input debe de estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');
        
    })
    
    
    
})
