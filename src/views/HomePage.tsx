import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";
import { IOrganizer } from "../interfaces/dbObjects";

const HomePage = () => {
  const [theaters, setTheaters] = useState<IOrganizer[]>([]);

  useEffect(() => {
    fetchTheaters();
  }, []);

  const fetchTheaters = async () => {
    try {
      let response = await fetch(`${process.env.REACT_APP_BE_URL}/organizers`);
      if (response.ok) {
        let data: IOrganizer[] = await response.json();
        setTheaters(data);
      } else {
        console.log("error while getting data from the server");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid container justifyContent="center" mt={1}>
      <Grid item xs={12} textAlign="center" sx={{ backgroundColor: "yellow" }}>
        <Paper sx={{ py: "15px" }}>
          {" "}
          <Typography variant="h1" sx={{ fontSize: "4rem" }}>
            Prehľad divadiel na Slovensku
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default HomePage;
