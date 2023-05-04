import React, { useState } from "react";
import { Paper, styled, TextField, FormControl } from "@mui/material";
import BMICalculator from "compute-bmi";

import { Button } from "../../../components/ui";

type BMIState = {
  bmi: number;
  bmiClassification: string;
  dbw: number;
  kcal: number;
  nutrients: {
    carbohydrates: number;
    protein: number;
    fat: number;
  };
};

export const BMR = () => {
  const [formState, setFormState] = useState({
    weight: "",
    height: "",
  });
  const [bmiState, setBmiState] = useState<BMIState>();

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onCalculateHandler = () => {
    const calculate = new BMICalculator({
      height: +formState.height,
      weight: +formState.weight,
    });
    const results = calculate.results();
    setBmiState(results);
  };

  return (
    <Wrapper>
      <FormWrapper>
        <TextField
          name="weight"
          value={formState.weight}
          label={"weight [kg]"}
          onChange={onInputChange}
        />
        <TextField
          name="height"
          value={formState.height}
          label={"height [cm]"}
          onChange={onInputChange}
        />
        <Button variant="contained" onClick={onCalculateHandler}>
          Calculate
        </Button>
      </FormWrapper>
      {bmiState && (
        <BmiWrapper>
          <div>BMI: {bmiState?.bmi}</div>
          <div>BMI Classification: {bmiState?.bmiClassification}</div>
          <div>DBW: {bmiState?.dbw}</div>
          <div>kcal: {bmiState?.kcal}</div>
          <div>carbo: {bmiState?.nutrients.carbohydrates.toFixed(2)}</div>
          <div>fat: {bmiState?.nutrients.fat.toFixed(2)}</div>
          <div>protain: {bmiState?.nutrients.protein.toFixed(2)}</div>
        </BmiWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  gap: 20,
}));

const FormWrapper = styled(FormControl)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  width: "100%",

  "& div": {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },

  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

const BmiWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  color: `${theme.palette.grayDark}`,
}));
