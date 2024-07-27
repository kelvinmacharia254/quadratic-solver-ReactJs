import {quadratic_solver} from "../utils/quadratic_solver.js";

export default function Results({coefficients}) {
    let results = quadratic_solver(coefficients)
    return (
        <>
            <p>
                <span>a = {coefficients.coefficient_a}&emsp;</span>,
                <span>b = {coefficients.coefficient_b}&emsp;</span>
                <span>&&emsp;</span>
                <span>c = {coefficients.coefficient_c}</span>
            </p>
            {(results.length == 2) && <p>x<sub>1</sub> = {results[0]},&emsp; x<sub>2</sub> = {results[1]}</p>}
            {results.length ==  1 &&<p>x = {results[0]}</p>}
            {results.length >  2 &&<p>Complex solution</p>}
        </>
    )
}