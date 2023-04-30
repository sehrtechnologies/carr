import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import "antd/dist/antd.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import {Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import BookingCar from "./pages/BookingCar";
import UserBookings from "./pages/UserBookings";

function App() {
  return (
    <>
      
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path='/booking/:id' element={ < BookingCar/>}  />
        <Route exact path='/userbookings' element={ <UserBookings/>}  />
      </Routes>
    </>
  );
}

export default App;
