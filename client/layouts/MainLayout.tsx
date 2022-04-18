import React, { FC } from "react";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";

export interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container sx={{ marginTop: "90px" }}>{children}</Container>
    </>
  );
};

export default MainLayout;
