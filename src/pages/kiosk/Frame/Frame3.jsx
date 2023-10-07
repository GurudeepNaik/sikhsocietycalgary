import React from "react";
import { Box, Grid } from "@mui/material";
import styles from "./style3.module.css";
import { useRouter } from "next/navigation";

const Frame03 = () => {
  const router = useRouter();
  return (
    <Box
      sx={{ flexGrow: 1, backgroundColor: "#EDE2FF", cursor: "pointer" }}
      onClick={() => router.push("/kiosk/language")}
    >
      <Grid container gap={3} className={styles.frame03}>
        <Grid item xs={7.5}>
          <div className={styles.div_1}></div>
        </Grid>
        <Grid item xs={4}>
          <div className={styles.div_2}></div>
        </Grid>

        <Grid container direction={"column"} gap={4} xs={4}>
          <Grid item xs={12}>
            <div className={styles.div_3}></div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.div_6}></div>
          </Grid>
        </Grid>

        <Grid container direction={"column"} gap={4} xs={3.3}>
          <Grid item xs={12}>
            <div className={styles.div_4}>
              <img
                className={styles.img}
                alt="Sikh SOCIETY CALGARY"
                src="/assets/kiosk/SIKH SOCIETY CALGARY_transaprent 1.png"
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={styles.div_7}></div>
          </Grid>
        </Grid>
        <Grid container direction={"column"} gap={4} xs={4}>
          <Grid item xs={12}>
            <div className={styles.div_5}></div>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Frame03;
