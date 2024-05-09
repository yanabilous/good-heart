import { Route, Routes, Outlet } from "react-router-dom";
import FinancialAid from "./pages/FinancialAid";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Outlet/>}>
           <Route path="/" element={<Home />} />


          <Route path="financialAid" element={<FinancialAid/>}>
            {/*<Route path="individual" element={<Individual/>}/>*/}
            {/*<Route path="legalEntity" element={<LegalEntity/>}/>*/}
          </Route>


        </Route>
      </Routes>
    </div>
  );
}

export default App;
