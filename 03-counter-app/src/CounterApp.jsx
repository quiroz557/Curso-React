import React, { useState } from 'react'
import PropTypes from 'prop-types'



export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState(value);

    const handleAdd = ( event ) => {
        setCounter(counter + 1);

        // Otra forma de setear el valor
        // setCounter( (c) => c + 1);
    }

    const handleSubstract = ( event ) => setCounter(counter - 1);

    const handleReset = (event) => setCounter( value );
    
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={ handleAdd }>+1</button>
            <button aria-label={'btn-reset'} onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    )
}

CounterApp.proptypes = {
    value: PropTypes.number.isRequired
}

