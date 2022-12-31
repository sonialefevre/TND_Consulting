//COMPONENTS
import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Services from "../src/components/Services";
import Experience from "../src/components/Experience";
import About from "../src/components/About";
import Calendar from "../src/components/Calendar";
import Contact from "../src/components/Contact";
import CommentsBook from "../src/components/CommentsBook";

//DATA
import categories from "../src/catgeories";
import services from "../src/services";
import experiences from "../src/experiences";

//REACT IMPORTS
import { Route, Routes } from "react-router-dom";

import { AppContext } from "./Helper/context";

//STYLE AND STYLING ELEMENTS
import logo from "../src/assets/logo.png";
import "./App.scss";
import "semantic-ui-css/semantic.min.css";

function App() {
  const contextValue = {
    services,
    categories,
    experiences,
    logo,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {/* <div className="App"> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services services={services} />} />
        <Route
          path="/experience"
          element={<Experience experiences={experiences} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/contact_form" element={<Contact />} />
        <Route path="/comments_book" element={<CommentsBook />} />
      </Routes>

      {/* </div> */}
    </AppContext.Provider>
  );
}

export default App;
