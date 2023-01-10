import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components'

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const handleAddCategory = ( newCategory ) => {
        
        if( categories.includes( newCategory ) ) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                onNewCategory={ event => handleAddCategory(event) }
            />

            {/* Listado de Gifs */}
            <ul>
                {/* Gif items */}
                { 
                    categories.map(( category ) => (
                        <GifGrid key={ category } category={ category } />
                    ))
                }
            </ul>
        </>
    )
}

export default GifExpertApp;