import { Button, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import { useState } from "react";

function SignIn() {
  const [signInInfo, setSignInInfo] = useState({ username: "", password: "" });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInInfo({
      ...signInInfo,
      [e.target.name]: e.target.value,
    });
  };
  const signIn = async () => {
    try {
      const user = await Auth.signIn(signInInfo.username, signInInfo.password);
    } catch (error) {
      console.log("error signing in", error);
    }
  };
  return (
    <div>
      <TextField onChange={handleFormChange} name="username" />
      <TextField onChange={handleFormChange} name="password" />
      <Button onClick={signIn}>アカウント登録</Button>
    </div>
  );
}

export default SignIn;
