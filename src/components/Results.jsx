import {quadratic_solver} from "../utils/quadratic_solver.js";

export default function Results({coefficients}) {
    // calc helper function to determine solution
    let results = quadratic_solver(coefficients)
    return (
        <>
            <p>
                <span>a = {coefficients.coefficient_a}&emsp;</span>
                {coefficients.coefficient_b !== "" && <span>b = {coefficients.coefficient_b}&emsp;</span>}
                {coefficients.coefficient_c !== "" && <span>c = {coefficients.coefficient_c}</span>}
            </p>
            {(results.length == 2) && <p>Solution has 2 roots:  x<sub>1</sub> = {results[0]},&emsp; x<sub>2</sub> = {results[1]}</p>}
            {results.length ==  1 &&<p>Solution has 1 root:  x = {results[0]}</p>}
            {results.length >  2 &&<p>The solution is a complex number.</p>}
        </>
    )
}