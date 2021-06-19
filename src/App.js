import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom";
import Forget from "./containers/Forget";
import Signin from "./containers/Signin"

function App() {
  return (

    <div className="body-gradient d-flex justify-content-center align-items-center">
     <BrowserRouter>
        <Route path="/" exact component={Signin} />
        <Route path="/forget" exact component={Forget} />
     </BrowserRouter>
    </div>
  );
}

export default App;
