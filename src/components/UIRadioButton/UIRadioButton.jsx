import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import React from "react";

const UIRadioButton = ({ arr, value, onChange }) => {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
      value={value}
      onChange={onChange}
    >
      {arr.map((item) => {
        return (
          <FormControlLabel
            value={item.value}
            control={<Radio />}
            label={item.label}
          />
        );
      })}
    </RadioGroup>
  );
};

export default UIRadioButton;
