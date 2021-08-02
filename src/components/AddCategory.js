import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Recibimos la funcion por props
export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState(''); //''

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    } 

    const handleSubmit = (e) => {
        // De esta manera prevenimos el comportamiento del formulario que actualiza todal a pagina
        e.preventDefault();
        // Con trim borramos los espacios que hay antes y desp de un string
        if ( inputValue.trim().length > 2 ) {

            // console.log('Submit hecho')
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }

    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

// Definicion del proptype, si no proveen esta funcion no van a poder usar mi componente
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
