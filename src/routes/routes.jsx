import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Overlay from "../components/overlay";
import Signup from "../components/signup";
import Login from "../components/login";
import Home from "../components/home";

const RoutesComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overlay />}>
            <Route index element={<Home />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RoutesComponent;
