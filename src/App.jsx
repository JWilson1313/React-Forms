import "./App.css";
import Authenticate from "./Components/Authenticate";
import SignUpForm from "./Components/SignUpForm";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm setToken={setToken} />

      <Authenticate token={token} />
    </>
  );
}
