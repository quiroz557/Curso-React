import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ onNewCategory }) => {

    const [ inputValue, setInputValue ] = useState('');
    
    const handleInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const handleSubmit = ( event ) => {
        event.preventDefault();

        if( inputValue.trim().length <= 1 ) return; 

        onNewCategory( inputValue.trim() );
        setInputValue('');
    }

    return (
        <form onSubmit={ (event) => handleSubmit(event) } aria-label='form'>
          <input 
            type="text"
            placeholder='Buscar gifs' 
            value={ inputValue }
            onChange={ handleInputChange }
          /> 
        </form>
    );
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}