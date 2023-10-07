import React from "react";
import { Box, Grid } from "@mui/material";
import styles from  "./style1.module.css";
import { useRouter } from "next/navigation";

const Frame = () => {
  const router=useRouter()
  return (
    <Box sx={{ flexGrow: 1,cursor:"pointer" }} onClick={()=>router.push("/kiosk/Frame/Frame2")}>
      <Grid container spacing={2} className={styles.frame01}>
        <Grid item xs={6}>
          <div className={styles.div_1}></div>
        </Grid>
        <Grid item xs={6}>
          <div className={styles.div_2}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_3}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_4}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_5}></div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.div_6}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_7}></div>
        </Grid>
      </Grid>
      <img
        src="/assets/kiosk/SIKH SOCIETY CALGARY_transaprent 1.png"
        className={styles.logo_center}
        alt="Logo"
        width={400}
        height={400}
      />
    </Box>
  );
};
export default Frame