import DefaultLayout from "@/src/app/defaultLayout";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { User } from "@/src/models";

export default function About() {
  const [user, setUser] = useState({ account: "", name: "" });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  const registerUser = async () => {
    await DataStore.save(
      new User({
        account: user.account,
        name: user.name,
      })
    );
  };
  const [fetchedUser, setFetchedUser] = useState({ account: "", name: "" });
  const fetchUser = async () => {
    const models = await DataStore.query(User);
    setFetchedUser({ account: models[0].account, name: models[0].name ?? "" });
  };
  return (
    <DefaultLayout>
      <Box>
        <div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            name="account"
            value={user.account}
            onChange={handleFormChange}
          />
        </div>
        <div>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            name="name"
            value={user.name}
            onChange={handleFormChange}
          />
        </div>
      </Box>
      <div>
        <Button variant="contained" onClick={registerUser}>
          登録する
        </Button>
      </div>
      <div>
        <Button variant="contained" onClick={fetchUser}>
          取得する
        </Button>
      </div>
      <div>
        {fetchedUser.account} {fetchedUser.name}
      </div>
    </DefaultLayout>
  );
}
