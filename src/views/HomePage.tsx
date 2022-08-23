import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

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

  return <Typography variant="h1">sasadsd</Typography>;
};

export default HomePage;
