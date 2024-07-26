export default function Input({coefficients, onChange}) {
    return (
        <>
            <div>
                <label htmlFor="coeff">Coefficient a: </label>
                <input
                    type="number"
                    value={coefficients.coefficient_a}
                    onChange={(event)=>onChange("coefficient_a", event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="coeff">Coefficient b: </label>
                <input
                    type="number"
                    value={coefficients.coefficient_b}
                    onChange={(event)=>onChange("coefficient_b", event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="coeff">Coefficient c: </label>
                <input
                    type="number"
                    value={coefficients.coefficient_c}
                    onChange={(event)=>onChange("coefficient_c", event.target.value)}
                />
            </div>

        </>

    )
}