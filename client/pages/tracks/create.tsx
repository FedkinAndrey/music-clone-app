import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from "../../components/StepWrapper";
import { Button, Grid } from "@mui/material";

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
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
        {activeStep === 0 && <h1>Step 1</h1>}
        {activeStep === 1 && <h1>Step 2</h1>}
        {activeStep === 2 && <h1>Step 3</h1>}
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
