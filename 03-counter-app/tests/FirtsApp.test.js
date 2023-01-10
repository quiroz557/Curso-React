import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirtsApp />', () => { 

  // test('Debe de hacer match con el snapshot', () => {

  //   const title = 'Hola, soy Goku'
  //   const { container }  = render( <FirstApp title={ title } />)
    
  //   expect(container).toMatchSnapshot();
  // })  

  test('Debe de mostrar el titulo en un H1', () => {

    const title = 'Hola, soy Goku'
    const { getByText, getByTestId } = render( <FirstApp title={ title } />)

    expect( getByText(title) ).toBeTruthy();

    // const h1 = container.querySelector('h1');
    // expect(h1.innerHTML).toContain(title);

    expect( getByTestId('test-title').innerHTML).toBe(title);

  })  

  test('debe de mostrar el subtitulo enviado por props', () => {
    const title = 'Hola, soy Goku'
    const subtitle = 557

    const { getAllByText } = render( 
      <FirstApp 
        title={ title }
        subtitle={ subtitle }
      />
    )

    expect( getAllByText(subtitle).length ).toBe(2);
  })

})