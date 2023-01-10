import { fireEvent, render, screen } from '@testing-library/react'
import GifExpertApp from '../src/GifExpertApp'

describe('Pruebas en <GifExpertApp />', () => {  

    test('Debería renderizar un titulo h3', () => {  
        render(<GifExpertApp />);

        expect(screen.getAllByRole('heading',{level:3}).length).toBe(1);
    })

    test('Debería renderizar dos titulos h3', () => {  
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: 'Saitama'}})
        fireEvent.submit(form);


        expect(screen.getAllByRole('heading',{level:3}).length).toBe(2);
    })

    test('Debería renderizar solo un título h3 si envío el nombre One Punch ya que por defecto este viene añadido en las categories', () => {  
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: 'One Punch'}})
        fireEvent.submit(form);

        expect(screen.getAllByRole('heading',{level:3}).length).toBe(1);
    })
})