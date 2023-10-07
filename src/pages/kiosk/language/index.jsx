import { Avatar, Container, Grid, Stack } from "@mui/material";
import React, { useState } from "react";
import style from "./style.module.css";
import { Kiosk_Footer } from "src/components/kiosk-footer";
import { Logo } from "src/components/kiosk-logo";

const Frame = () => {
  const [language, setLanuage] = useState("");
  return (
    <div className={style.container}>
      <Logo />
      <Container maxWidth="lg">
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className={style.header}>
            <div className={style.frame}>
              <img
                className={style.language}
                alt="Language"
                src="/assets/kiosk/language_logo.png"
              />
            </div>
            <div className={style.label}>
              <h1 className={style.choose_your}>
                <span className={style.text_wrapper}>Choose your preferred </span>
                <span className={style.span}>Language</span>
              </h1>
            </div>
          </div>

          <Grid container spacing={3}>
            <Grid item xs={4}>
              <div
                className={`${style.component} ${language === "en" ? style.active : ""}`}
                onClick={() => setLanuage("en")}
              >
                <div className={style.text_heading}>Welcome</div>
                <div className={style.text_content}>English</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className={`${style.component} ${language === "hi" ? style.active : ""}`}
                onClick={() => setLanuage("hi")}
              >
                <div className={style.text_heading}>स्वागत</div>
                <div className={style.text_content}>Hindi</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className={`${style.component} ${language === "pu" ? style.active : ""}`}
                onClick={() => setLanuage("pu")}
              >
                <div className={style.text_heading}>स्वागत</div>
                <div className={style.text_content}>Punjabi</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className={`${style.component} ${language === "fr" ? style.active : ""}`}
                onClick={() => setLanuage("fr")}
              >
                <div className={style.text_heading}>Bienvenu</div>
                <div className={style.text_content}>French</div>
              </div>
            </Grid>
            <Grid item xs={4}>
              <div
                className={`${style.component} ${language === "sh" ? style.active : ""}`}
                onClick={() => setLanuage("sh")}
              >
                <div className={style.text_heading}>خوش آمدید</div>
                <div className={style.text_content}>Shahmukhi</div>
              </div>
            </Grid>
          </Grid>
        </Stack>
      <Kiosk_Footer handleNext={"/kiosk/location"} handleBack={"/kiosk/language"} hasHome={false} hasBack={false} />
      </Container>
    </div>
  );
};

export default Frame;
