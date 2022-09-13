import store from "./Redux/Store";
import { Provider } from "react-redux"
import "primereact/resources/themes/lara-dark-purple/theme.css";
import "primereact/resources/primereact.min.css";      
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css"
 

import Home from "./Pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
