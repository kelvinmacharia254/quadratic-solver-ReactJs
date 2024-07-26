import Input from "./components/Input.jsx";
import Results from "./components/Results.jsx";
import "./index.css"
function App() {

  return (
    <>
        <div className="container">

            <div id="header">
                <h1>Quadratic Solver</h1>
                <h4>&ldquo;Algebra is so cool&ldquo;</h4>
            </div>

            <div id="coeff-inputs">
                <Input label="Coefficient a: " min="0"/> {/*practice use of proxy props*/}
                <Input label="Coefficient b: "/>
                <Input label="Coefficient c: "/>
            </div>

            <div id="clear-button">
                <button>Clear</button>
            </div>

            <div className="result">
                <Results/>
            </div>


        </div>

    </>
  )
}

export default App
