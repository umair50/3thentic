import "./App.css";
import { Fragment, useState } from "react";
import { ToastProvider } from "react-toast-notifications";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Home from "./pages/Home/index";
import Payment from "./pages/Payment/Payment";
import Login from "./components/Login";
import UserData from "./components/UserData";

const App = () => {
  const [address, setAddress] = useState(null);

  return (
    <Fragment>
      <ToastProvider>
        <BrowserRouter basename={"/3-then"}>
          <Routes>
            <Route
              path="/"
              element={<Home address={address} setAddress={setAddress} />}
            />
            <Route
              path="/faq"
              element={<Faq address={address} setAddress={setAddress} />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/userdata" element={<UserData />} />

            <Route
              path="/payment"
              element={<Payment address={address} setAddress={setAddress} />}
            />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </Fragment>
  );
};

export default App;
