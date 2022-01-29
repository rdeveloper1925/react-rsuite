import NavBar from "./Components/NavBar";
import "rsuite/dist/rsuite.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import ProformaInvoices from "./Screens/ProformaInvoices";
import Darkmode from "./Screens/Darkmode";
import ThemeContext from "./Store/ThemeContext";

function App() {
  const [theme, setTheme] = React.useState("dark");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Routes>
        <Route path="/" element={<NavBar>Home</NavBar>} exact />
        <Route
          path="/dashboard"
          element={
            <NavBar>
              <Dashboard />
            </NavBar>
          }
          exact
        />
        <Route
          path="/proforma"
          element={
            <NavBar>
              <ProformaInvoices />
            </NavBar>
          }
          exact
        />
        <Route path="/darkmode" element={<Darkmode />} exact />
        <Route path="*" element={<NavBar>404</NavBar>} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
