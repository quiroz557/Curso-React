import { useCounter, useFetch } from "../hooks";
import { LoadingPokemon, Pokemon  } from "../03-examples";

export const Layout = () => {

    const {  counter, increment } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    const { name, location_area_encounters } = !!data && data;

  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {isLoading &&
          <LoadingPokemon />
        }

        <Pokemon  url={location_area_encounters} name={name} />
       
        <button className="btn btn-primary" onClick={() => increment()}>
          Next Pokemon
        </button>
    </>
  )
}
