import Input from "./components/Input.jsx";
import Results from "./components/Results.jsx";
import "./index.css"
import {useRef, useState} from "react";
import Modal from "./components/Modal.jsx";
function App() {
    const [coefficients, setCoefficients] = useState(
        {
            coefficient_a: 1,
            coefficient_b: 0,
            coefficient_c: 0,
        }
    );

    const dialogRef = useRef(null);

    // determine whether coefficient_a is invalid
    let coefficient_aValid = Number(coefficients.coefficient_a) === 0 || coefficients.coefficient_a === ''

    function handleChange(inputIdentity, coeffValue) {
        // update state when any coeff is changed
        setCoefficients((prevCoefficients) => {
            return {...prevCoefficients, [inputIdentity]: coeffValue};  // surround 'inputIdentity' with [] to be evaluated as key not literal
        })
    }

    function reset(buttonIdentity){
        if(buttonIdentity === "clear"){
            console.log(`buttonIdentity: ${buttonIdentity}`);
            dialogRef.current.showModal();
        } else if(buttonIdentity === "confirm-clear"){
            dialogRef.current.close();
            console.log(`buttonIdentity: ${buttonIdentity}`);
            setCoefficients(
            {
            coefficient_a: "",
            coefficient_b: "",
            coefficient_c: "",
        })
        }
    }
    return (
    <>
        <div className="container">
            <Modal ref={dialogRef} onClickModalButton={reset}/>
            <div id="header">
                <h1>Quadratic Solver</h1>
                <h4>&ldquo;Algebra is so cool&ldquo;</h4>
            </div>

            <div id="coeff-inputs">
                {coefficient_aValid && <p id="invalid_coeff"><span id="warning">&#9888;</span> Coefficient 'a' can't be zero.</p>}
                <Input
                    coefficients={coefficients}
                    onChange={handleChange}/>
            </div>

            <div id="clear-button">
                <button onClick={(event)=>reset(event.target.value)} value="clear">Clear</button>
            </div>

            <div id="results">
                {!coefficient_aValid && <Results coefficients={coefficients}/>}
                {coefficient_aValid &&  <p>Results will display here for a valid quadratic expression</p>}
            </div>

        </div>

    </>
  )
}

export default App
