import Input from "./components/Input.jsx";
import Results from "./components/Results.jsx";
import "./index.css"
import {useState} from "react";
function App() {
    const [coefficients, setCoefficients] = useState(
        {
            coefficient_a: 1,
            coefficient_b: 0,
            coefficient_c: 0,
        }
    );

    let coefficient_aValid = coefficients.coefficient_a === 0 || coefficients.coefficient_a === ''
    console.log("coefficient_aValid", coefficient_aValid)
    function handleChange(inputIdentity, coeffValue) {
        setCoefficients((prevCoefficients) => {
            return {...prevCoefficients, [inputIdentity]: coeffValue};  // surround 'inputIdentity' with [] to be evaluated as key not literal
        })
    };
    return (
    <>
        <div className="container">

            <div id="header">
                <h1>Quadratic Solver</h1>
                <h4>&ldquo;Algebra is so cool&ldquo;</h4>
            </div>

            <div id="coeff-inputs">
                <Input
                    coefficients={coefficients}
                    onChange={handleChange}/>
            </div>

            <div id="clear-button">
                <button>Clear</button>
            </div>

            <div id="results">
                {coefficient_aValid && <p id="invalid_coeff">Coefficient a is invalid. It can't be zero.</p>}
                {!coefficient_aValid && <Results coefficients={coefficients}/>}
            </div>


        </div>

    </>
  )
}

export default App
