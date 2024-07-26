export default function Input({label, ...props}) {
    return (
        <>
            <div>
                <label htmlFor="coeff">{label}</label>
                <input type="number" name="coeff" id="coeff" {...props}/>
            </div>

        </>

    )
}