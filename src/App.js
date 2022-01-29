import NavBar from "./Components/NavBar";
import "rsuite/dist/rsuite.min.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import ProformaInvoices from "./Screens/ProformaInvoices";

function App() {
  return (
    <div>
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
        <Route path="*" element={<NavBar>404</NavBar>} />
      </Routes>
    </div>
  );
}

export default App;
