import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.light;

  return (
    <img
    width="230px"
    height="110px"
    alt="Logo"
    src="/favicon-16x16.png"
    style={{
      margin:"10px auto"
    }}
  />
  );
};
