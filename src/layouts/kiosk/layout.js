import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { appWithTranslation } from "next-i18next";
const Layout = (props) => {
  const { children } = props;

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flex: "1 1 auto",
      }}
    >
      {children}
    </Box>
  );
};

Layout.prototypes = {
  children: PropTypes.node,
};
export default appWithTranslation(Layout);