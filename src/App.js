import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import FormPage from "./pages/FormPage";
import Home from "./pages/Home";

function App() {
  return (
<div>
  <Routes>
    <Route path="/" element={<Home /> }/>
    <Route path="/builder" element={<FormPage /> }/>
    <Route path="*" element={<ErrorPage /> }/>

  </Routes>
</div>
  );
}

export default App;
