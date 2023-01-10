import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

const title = 'Prueba title';
const url = 'https://media0.giphy.com/media/WOb8EeFziTQNE02WXs/giphy.gif?cid=037b74a2hmcwb6p2w4ur7qy6sdsxwc79kgp6zttlp70mk3ku&rid=giphy.gif&ct=g'

describe('Pruebas en GifItem', () => { 
    test('Debe de hacer match con el snapshot', () => { 
        const { container } = render(
            <GifItem 
                title={title} 
                url={url}
            />
        );
        expect( container ).toMatchSnapshot();
    })    

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render(
            <GifItem 
                title={title} 
                url={url}
            />
        );

        expect( screen.getByRole('img').src).toBe( url );
        expect( screen.getByRole('img').alt).toBe( title );
    })

    test('debe de mostrar el titulo en el componente', () => { 
        render(
            <GifItem 
                title={title} 
                url={url}
            />
        );
        expect( screen.getByText(title)).toBeTruthy();
    })
})