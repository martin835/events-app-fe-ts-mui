import Typography from "@mui/material/Typography";
import MyHeader from "./components/MyHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import { CssBaseline, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      {" "}
      <MyHeader />
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
