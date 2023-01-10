import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirtsApp />', () => { 

  const title = 'Hola soy goku';
  const subtitle = 12345;

  test('Debe de hacer match con el snapshot', () => {

    const { container } = render(<FirstApp title={title} />)
    expect( container ).toMatchSnapshot();
  })  

  test('Debe de mostrar el mensaje "Hola, soy Goku"', () => {
    render(<FirstApp title={title} />)

    expect( screen.getByText(title) ).toBeTruthy();

  })

  test('Debe de mostrar el titulo en un H1"', () => {
    render(<FirstApp title={title} />)

    expect( screen.getByRole('heading',{ level: 1 }).innerHTML).toContain( title );

  })

  test('Debe de mostrar el subtitulo enviado por props"', () => {
    render(
        <FirstApp
            title={title}
            subtitle={ subtitle }
        />
    )

    expect( screen.getAllByText(subtitle).length).toBe(2);

  })

})