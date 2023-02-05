import DefaultLayout from "@/src/app/defaultLayout";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function About() {
  const [] = useState();
  return (
    <DefaultLayout>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <div>
        <Button variant="contained">Hello World</Button>
      </div>
    </DefaultLayout>
  );
}
