import Typography from "@mui/material/Typography";
import MyHeader from "./components/MyHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Grid container>
        <MyHeader />
      </Grid>
      <Grid container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
          </Routes>
        </BrowserRouter>
      </Grid>
    </>
  );
}

export default App;
