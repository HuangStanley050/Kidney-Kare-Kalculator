import React, { useState } from "react";
import { Container } from "reactstrap";
import Result from "./components/Result";
import WizardForm from "./components/WizardForm";
import Logo from "./assets/Logo.jpg";
//import showResults from "./components/showResults";

function App() {
  const [result, showResult] = useState(false);

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
        Kidney KareCalc{" "}
        <img
          style={{ width: "90px", borderRadius: "50%" }}
          src={Logo}
          alt="logo"
        />
      </h1>
      <Container>
        {result ? <Result /> : <WizardForm onSubmit={() => showResult(true)} />}
      </Container>
    </div>
  );
}

export default App;
