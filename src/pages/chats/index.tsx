// TODO _app.tsxにwithAuthentificateでラップしたことで、サインイン/サインアップページは実装できたので、本ファイルは不要になるかも
import DefaultLayout from "@/src/app/defaultLayout";
import { Chat } from "@/src/models";
import { Button, TextField } from "@mui/material";
import { Auth, DataStore } from "aws-amplify";
import Router from "next/router";
import { useState } from "react";

function SignIn() {
  const [title, setTitle] = useState("");
  const [chats, setChats] = useState([] as Chat[]);
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const addChat = async () => {
    await DataStore.save(
      new Chat({
        title,
      })
    );
  };

  const search = async () => {
    const chats = await DataStore.query(Chat);
    console.log(chats);
    setChats(chats);
  };
  return (
    <DefaultLayout>
      <div>
        <TextField onChange={handleFormChange} name="title" />
        <Button onClick={addChat}>チャットを追加</Button>
      </div>
      <>
        <Button onClick={search}>チャットを検索</Button>
        {chats.map((chat) => (
          <div key={chat.id}>{chat.title}</div>
        ))}
      </>
    </DefaultLayout>
  );
}

export default SignIn;
