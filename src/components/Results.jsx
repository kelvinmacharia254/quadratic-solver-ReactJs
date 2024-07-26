export default function Results({coefficients}) {
    return (
        <>
            <p>
                <span>a = {coefficients.coefficient_a}  </span>,
                <span>b = {coefficients.coefficient_b}  </span>
                <span>& </span>
                <span>c = {coefficients.coefficient_c}</span>
            </p>

        </>
    )
}