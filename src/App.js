import React from "react";
import { Container } from "reactstrap";

import WizardForm from "./components/WizardForm";
import showResults from "./components/showResults";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Kidney Kare Kalculator</h1>
      <Container>
        <WizardForm onSubmit={showResults} />
      </Container>
    </div>
  );
}

export default App;
