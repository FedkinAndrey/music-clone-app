import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import { Button, Grid, TextField } from "@mui/material";
import FileUpload from "../../components/FileUpload";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const back = () => {
    setActiveStep((prevState) => prevState - 1);
  };
  const forward = () => {
    if (activeStep !== 2) {
      setActiveStep((prevState) => prevState + 1);
    }
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }} gap={2}>
            <TextField label="Track name" />
            <TextField label={"Author name"} />
            <TextField label={"Track text"} multiline rows={3} />
          </Grid>
        )}
        {activeStep === 1 && (
          <FileUpload setFile={setPicture} accept="image/*">
            <Button>Download cover</Button>
          </FileUpload>
        )}
        {activeStep === 2 && (
          <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Download track</Button>
          </FileUpload>
        )}
      </StepWrapper>
      <Grid container justifyContent={"space-around"}>
        <Button disabled={activeStep === 0} onClick={back}>
          Back
        </Button>
        <Button onClick={forward}>Forward</Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
