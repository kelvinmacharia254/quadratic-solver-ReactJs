export default function Input({label, ...props}) {
    return (
        <>
            <div>
                <label htmlFor="coeff">Coefficient a: </label>
                <input
                    type="number"
                    id="coeff"
                />
            </div>
            <div>
                <label htmlFor="coeff">Coefficient b: </label>
                <input
                    type="number"
                    id="coeff"
                />
            </div>
            <div>
                <label htmlFor="coeff">Coefficient c: </label>
                <input
                    type="number"
                    id="coeff"
                />
            </div>

        </>

    )
}