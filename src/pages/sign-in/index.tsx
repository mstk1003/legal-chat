// TODO _app.tsxにwithAuthentificateでラップしたことで、サインイン/サインアップページは実装できたので、本ファイルは不要になるかも
import DefaultLayout from "@/src/app/defaultLayout";
import { Button, TextField } from "@mui/material";
import { Auth } from "aws-amplify";
import Router from "next/router";
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
      console.log(user);
      Router.push("/sign-up/confirm");
    } catch (error) {
      console.log("error signing in", error);
    }
  };
  return (
    <DefaultLayout>
      <div>
        <TextField onChange={handleFormChange} name="username" />
        <TextField onChange={handleFormChange} name="password" />
        <Button onClick={signIn}>アカウント登録</Button>
      </div>
    </DefaultLayout>
  );
}

export default SignIn;
