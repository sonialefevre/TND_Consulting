//COMPONENTS
import Header from '../src/components/Header';
import Home from "../src/components/Home";
import Services from "../src/components/Services";

//DATA
import categories from '../src/catgeories';
import services from '../src/services';

//REACT IMPORTS
import { Route, Routes } from 'react-router-dom';

//STYLE AND STYLING ELEMENTS
import logo from "../src/assets/logo.png"
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {

  return (
    <div className="App">
      <Header categories={categories} logo={logo} />
      <Routes>
      <Route
        path="/"
        element={(<Home />)}
      />
      <Route
        path="/services"
        element={(<Services services={services}/>)}
      />

      </Routes>

    </div>
  )
}

export default App
