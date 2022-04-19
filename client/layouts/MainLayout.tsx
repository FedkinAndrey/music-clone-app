import React, { FC } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import Player from "../components/Player";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "90px" }}>{children}</Container>
      <Player />
    </>
  );
};

export default MainLayout;
