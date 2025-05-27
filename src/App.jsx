import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import HomeContainer from "./components/Home/HomeContainer";
import Bus from "./components/Pages/Bus";
import Detail from "./components/Pages/Detail";
import Checkout from "./components/Checkout";
import Finalcheckout from "./components/Finalcheckout";
import Login from "./components/Login";
import Registration from "./components/Registration";
import UsersPage from "./components/UsersList";
import AdminRoute from "./middleware/AdminRoute";

function App() {
  return (
    <>
      <Router>
        <div className="w-full min-h-screen bg-neutral-50 dark:bg-neutral-950 text-neutral-800 dark:text-neutral-300 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar />

          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/bus" element={<Bus />} />
              <Route path="/bus/bus/bus-details" element={<Detail />} />
              <Route
                path="/bus/bus/bus-details/Checkout"
                element={<Checkout />}
              />
              <Route
                path="/bus/bus/bus-details/Checkout/Finalcheckout"
                element={<Finalcheckout />}
              />
              <Route path="/login" element={<Login></Login>} />
              <Route
                path="/registration"
                element={<Registration></Registration>}
              />
              <Route
                path="/admin/users"
                element={
                  <AdminRoute>
                    <UsersPage />
                  </AdminRoute>
                }
              />
            </Routes>
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
