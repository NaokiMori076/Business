import "./App.css";
import "antd/dist/reset.css";
import DashboardPage from "./pages/DashboradPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/products" element={"products"} />
          <Route path="/features" element={"Features"} />
          <Route path="/pricing" element={"Pricing"} />
          <Route path="/career" element={"Career"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
