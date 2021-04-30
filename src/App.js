import Dialog from "./components/Dialog";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const inicijalniLik = { duljina: "50", visina: "100", boja: "blue" };
  return (
    <div className='App container'>
      <Dialog {...inicijalniLik} />
    </div>
  );
}

export default App;
