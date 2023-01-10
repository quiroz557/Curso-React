import { useCounter } from "../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(5);

    return (
        <>
            <h1>Counter With hook: { counter }</h1>
            <hr />

            <button onClick={() => decrement()} className="btn btn-primary">-1</button>
            <button onClick={reset} className="btn btn-primary">Reset</button>
            <button onClick={() => increment()} className="btn btn-primary">+1</button>
        </>
    )
}
