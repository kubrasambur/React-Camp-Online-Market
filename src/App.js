import "./App.css";
import Dasboard from "./layouts/Dasboard";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Navi from "./layouts/Navi";

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dasboard />
      </Container>
    </div>
  );
}

export default App;
