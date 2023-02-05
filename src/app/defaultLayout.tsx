import React from "react";
import { Container } from "@mui/system";
import MenuHeader from "@/src/components/common/menuHeader";

type Props = React.ReactNode;

export default function DefaultLayout({ children }: { children: Props }) {
  return (
    <>
      <MenuHeader />
      <main style={{ paddingTop: "32px" }}>
        <Container maxWidth="xl">
          <div>{children}</div>
        </Container>
      </main>
    </>
  );
}
