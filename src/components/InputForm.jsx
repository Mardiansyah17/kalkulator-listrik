import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
export default function InputForm({ label, value, type, valueHandler, name }) {
  return (
    <div className="">
      <TextField
        value={value}
        label={label}
        type={type}
        autoComplete={"off"}
        name={name}
        onChange={(value) =>
          valueHandler(value.target.name, value.target.value)
        }
      />
    </div>
  );
}
