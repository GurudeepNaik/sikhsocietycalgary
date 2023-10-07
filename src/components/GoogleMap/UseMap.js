import React from "react";
import Map from "./index";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height:"100%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const GoogleMap = (props) => {
  const { showMap, setShowMap, setAddress, address } = props.data;
  const handleClose = () => {
    setShowMap(false);
  };
  return (
    <div>
      <Modal
        open={showMap}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Address: {address}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Map setAddress={setAddress} address={address} />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default GoogleMap;
