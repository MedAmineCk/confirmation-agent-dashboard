import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import OverviewPage from "./pages/OverviewPage";
import OrderPage from "./pages/OrderPage";
import ProfilePage from "./pages/ProfilePage";
import AddNewOrderPage from "./pages/AddNewOrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="orders/:orderId" element={<OrderPage />} />
          <Route path="add-new-order" element={<AddNewOrderPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
