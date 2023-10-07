import React from "react";
import { Box, Grid } from "@mui/material";
import styles from  "./style2.module.css";
import { useRouter } from "next/navigation";

 const Frame02 = () => {
  const router=useRouter()
  return (
    <Box sx={{ flexGrow: 1,cursor:"pointer" }} onClick={()=>router.push("/kiosk/Frame/Frame3")}>
      <Grid container spacing={2} className={styles.frame02}>
        <Grid item xs={2}>
          <div className={styles.div_1}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_2}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_3}></div>
        </Grid>
        <Grid item xs={2}>
          <div className={styles.div_4}></div>
        </Grid>

        <Grid item xs={2}>
          <div className={styles.div_5}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_6}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_7}></div>
        </Grid>
        <Grid item xs={2}>
          <div className={styles.div_8}></div>
        </Grid>

        <Grid item xs={2}>
          <div className={styles.div_9}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_10}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_11}></div>
        </Grid>
        <Grid item xs={2}>
          <div className={styles.div_12}></div>
        </Grid>

        <Grid item xs={2}>
          <div className={styles.div_13}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_14}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_15}></div>
        </Grid>
        <Grid item xs={2}>
          <div className={styles.div_16}></div>
        </Grid>
      </Grid>
      <div className={styles.SIKH_SOCIETY_CALGARY_wrapper}>
        <img
          className={styles.SIKH_SOCIETY_CALGARY}
          alt="Sikh SOCIETY CALGARY"
          src="/assets/kiosk/SIKH SOCIETY CALGARY_transaprent 1.png"
        />
      </div>
    </Box>
  );
};
export default Frame02