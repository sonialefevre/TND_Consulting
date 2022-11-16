//COMPONENTS
import Header from '../src/components/Header';
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import Experience from "../src/components/Experience"

//DATA
import categories from '../src/catgeories';
import services from '../src/services';
import experiences from '../src/experiences';

//REACT IMPORTS
import { Route, Routes } from 'react-router-dom';

import {AppContext} from './Helper/context';

//STYLE AND STYLING ELEMENTS
import logo from "../src/assets/logo.png"
import './App.css';
import 'semantic-ui-css/semantic.min.css';

function App() {

  const contextValue = {
    services,
    categories,
    experiences,
    logo
  };

  return (
    <AppContext.Provider value={contextValue}>
    {/* <div className="App"> */}
      <Header />
      <Routes>
      <Route
        path="/"
        element={(<Home />)}
      />
      <Route
        path="/services"
        element={(<Services services={services}/>)}
      />
      <Route
        path="/experience"
        element={(<Experience experiences={experiences}/>)}
      />

      </Routes>

    {/* </div> */}
    </AppContext.Provider>
  )
}

export default App
