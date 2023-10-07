import * as React from "react";
import { styled } from "@mui/system";
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#6568f1",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const red = {
  100: "#FFD7D7",
  200: "#FFA9A9",
  400: "#f14b40",
  500: "#FF1717",
  600: "#E50000",
  900: "#990000",
};
const StyledTextarea = styled("textarea")(
  ({ theme, error }) => `
  display:flex;
  justify-content: center;
  flex-direction: column;
  width: -webkit-fill-available;
  overflow:hidden;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  border-color: ${error ? red[400] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === "dark" ? grey[900] : grey[50]};

  &:hover {
    background-color: ${grey[100]};
  }

  &:focus {
    background-color: #ffffff;
    border-color: ${error ? red[400] : blue[400]};
    box-shadow: 0 0 0 3px ${
      theme.palette.mode === "dark" ? blue[500] : `${error ? red[400] : blue[400]}`
    };
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);

export default function MaxHeightTextarea({
  value,
  onChange,
  onBlur,
  error,
  helperText,
  ...props
}) {
  const [textareaValue, setTextareaValue] = React.useState(value);

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
    onChange(event); // Pass the event to Formik's handleChange
  };

  const handleBlur = (event) => {
    setTextareaValue(event.target.value);
    onBlur(event); // Pass the event to Formik's handleBlur
  };
  React.useEffect(()=>{
   if(value===""){
    setTextareaValue("");
   }
  },[value])

  return (
    <div>
      <StyledTextarea
        {...props}
        value={textareaValue}
        onChange={handleChange} 
        onBlur={handleBlur}
        error={error}
      />
      {error && <div style={{ color: red[400] }}>{helperText}</div>}
    </div>
  );
}
