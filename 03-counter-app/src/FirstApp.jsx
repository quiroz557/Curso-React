import React from 'react'
import PropTypes from 'prop-types'

// const getSaludo = ( saludo ) => `Hola ${ saludo }!!! `

export const FirstApp = ({ title, subtitle, name }) => {
    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subtitle }</p>
            <p>{ subtitle }</p>
            <p>{ name }</p>
        </>
    )
}


//Estas configuraciones normalmente son al final de la inicialización y todo

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
}

FirstApp.defaultProps = {
    title: 'No hay título',
    subtitle: 123,
    name: 'Juan Pablo'
}