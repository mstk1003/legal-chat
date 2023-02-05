import { Button, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import { useState } from "react";

function SignUp() {
  const [signUpInfo, setSignUpInfo] = useState({ username: "", password: "" });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpInfo({
      ...signUpInfo,
      [e.target.name]: e.target.value,
    });
  };
  const signUp = async () => {
    try {
      const { user } = await Auth.signUp({
        username: signUpInfo.username,
        password: signUpInfo.password,
      });
      console.log(user);
    } catch (error) {
      console.log("error signing up:", error);
    }
  };

  return (
    <div>
      <TextField onChange={handleFormChange} name="username" />
      <TextField onChange={handleFormChange} name="password" />
      <Button onClick={signUp}>アカウント登録</Button>
    </div>
  );
}

export default SignUp;
