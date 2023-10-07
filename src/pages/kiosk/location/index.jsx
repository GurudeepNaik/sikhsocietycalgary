import { Avatar, Container, Grid, List, ListItem, ListItemText, Stack } from "@mui/material";
import React, { useState } from "react";
import style from "./style.module.css";
import { Kiosk_Footer } from "src/components/kiosk-footer";
import { Logo } from "src/components/kiosk-logo";
import Map from "src/components/GoogleMap/index";
import { Scrollbar } from "src/components/scrollbar";

const Frame = () => {
  const [active, setActive] = useState({
    id: 0,
    name: "",
  });
  const [address, setAddress] = useState("");
  const locations = [
    {
      id: 1,
      name: "Calgary",
    },
    {
      id: 2,
      name: "Edmonton",
    },
    {
      id: 3,
      name: "Lakeview",
    },
    {
      id: 4,
      name: "Millwoods",
    },
    {
      id: 1,
      name: "Calgary",
    },
    {
      id: 2,
      name: "Edmonton",
    },
    {
      id: 3,
      name: "Lakeview",
    },
    {
      id: 4,
      name: "Millwoods",
    },
  ];
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
                src="/assets/kiosk/location_logo.png"
              />
            </div>
            <div className={style.label}>
              <h1 className={style.choose_your}>
                <span className={style.text_wrapper}>Select available </span>
                <span className={style.span}>Location</span>
              </h1>
            </div>
          </div>
          <Grid container spacing={3} gap={3}>
            <Grid
              item
              xs={8}
              sx={{
                width: "100%",
                minHeight: "650px",
                border: "1px solid #9A9FB0",
                borderRadius: "10px",
                position: "relative",
                paddingLeft: "0 !important",
                paddingTop: "0 !important",
                paddingRight: 0,
                paddingBottom: 0,
              }}
            >
              <Map setAddress={setAddress} address={address} />
            </Grid>
            <Grid item xs={3.5}>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  width: "300px",
                  maxHeight: "600px",
                  bgcolor: "background.paper",
                  overflow: "scroll",
                  overflowX: "hidden",
                  padding: "10px",
                  margin: "0",
                }}
              >
                <Scrollbar>
                  {locations.map((each) => {
                    return (
                      <ListItem
                        className={`${active?.id === each?.id ? style.active : ""}`}
                        onClick={() => setActive(each)}
                        sx={{
                          width: "100%",
                          height: "102px",
                          minHeight: "82px",
                          padding: "32px",
                          paddingBottom: "55px",
                          border: "1px solid",
                          borderColor: "#9A9FB0",
                          borderRadius: "10px",
                          color: "#202050",
                          fontFamily: "Inter-Medium, Helvetica",
                          fontSize: "28px",
                          fontWeight: 500,
                          letterSpacing: "0.17px",
                          lineHeight: "normal",
                          marginBottom: "10px",
                        }}
                        key={each.id}
                        disableGutters
                      >
                        <ListItemText primary={each.name} />
                      </ListItem>
                    );
                  })}
                </Scrollbar>
              </List>
              {/* <Grid
                container
                direction="column"
                maxHeight={600}
                overflow="scroll"
                spacing={3}
                gap={3}
              >
                {locations.map((each) => {
                  return (
                    <Grid
                      item
                      xs={12}
                      className={`${active?.id === each?.id ? style.active : ""}`}
                      onClick={() => setActive(each)}
                      sx={{
                        width: "100%",
                        height: "102px",
                        minHeight: "82px",
                        padding: "32px",
                        paddingBottom: "55px",
                        border: "1px solid",
                        borderColor: "#9A9FB0",
                        borderRadius: "10px",
                        color: "#202050",
                        fontFamily: "Inter-Medium, Helvetica",
                        fontSize: "28px",
                        fontWeight: 500,
                        letterSpacing: "0.17px",
                        lineHeight: "normal",
                      }}
                    >
                      {each.name}
                    </Grid>
                  );
                })}
              </Grid> */}
            </Grid>
          </Grid>
        </Stack>
        <Kiosk_Footer
          handleNext={`/kiosk/location/${active.name}`}
          handleBack={"/kiosk/language"}
        />
      </Container>
    </div>
  );
};

export default Frame;
