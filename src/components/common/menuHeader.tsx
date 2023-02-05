import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import { Box } from "@mui/system";

export default function MenuHeader() {
  async function signOut() {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Legal Chat
          </Typography>
          <Button color="inherit" onClick={signOut}>
            サインアウト
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
