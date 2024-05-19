import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import OverviewPage from "./pages/OverviewPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="orders/:orderId" element={<OrderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
