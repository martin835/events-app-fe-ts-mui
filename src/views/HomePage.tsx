import {
  Avatar,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
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
      <Grid item xs={4}>
        <Typography variant="h2" sx={{ fontSize: "2rem" }}>
          Zoznam divadiel
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {theaters?.map((theater) => (
            <>
              <ListItem alignItems="flex-start" key={theater._id}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={`${theater.coverImg}`} />
                </ListItemAvatar>
                <ListItemText
                  primary={`${theater.name}`}
                  secondary={
                    <React.Fragment>
                      {/* <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {theater.city}
                      </Typography> */}
                      <Button
                        size="small"
                        variant="outlined"
                        sx={{ mt: "10px" }}
                      >
                        Viac
                      </Button>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))}
        </List>
      </Grid>
      <Grid item xs={8} textAlign="center">
        <Typography variant="h2" sx={{ fontSize: "2rem" }}>
          Nove predstavenia
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
