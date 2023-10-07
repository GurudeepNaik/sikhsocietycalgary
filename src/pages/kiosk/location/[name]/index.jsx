import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Kiosk_Footer } from "src/components/kiosk-footer";
import { calculateDistance } from "src/utils/calculateDistance";

const index = () => {
  const params = useSearchParams();
  const name=params.get("name")
  const data = {
    images: [
      {
        link: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1566816874952-efe670a52a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1566816874952-efe670a52a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1566816874952-efe670a52a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1566816874952-efe670a52a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
    ],
    journals: [
      {
        id: 1,
        title: "Guide to  Gurudwara",
        image:
          "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        body: "Lorem ipsum dolor sit amet consectetur. Id sit purus id sed adipiscing mattis nisi. Elementum enim cursus iaculis tincidunt. Enim sed varius dignissim a sodales lacus sit nunc....",
        dateTime: new Date().toDateString().replace(/^... /, ""),
        place: "GURU RAVIDASS COMMUNITY CENTRE CALGARY",
      },
      {
        id: 2,
        title: "Guide to  Gurudwara",
        image:
          "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        body: "Lorem ipsum dolor sit amet consectetur. Id sit purus id sed adipiscing mattis nisi. Elementum enim cursus iaculis tincidunt. Enim sed varius dignissim a sodales lacus sit nunc....",
        dateTime: new Date().toDateString().replace(/^... /, ""),
        place: "GURU RAVIDASS COMMUNITY CENTRE CALGARY",
      },
      {
        id: 3,
        title: "Guide to  Gurudwara",
        image:
          "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        body: "Lorem ipsum dolor sit amet consectetur. Id sit purus id sed adipiscing mattis nisi. Elementum enim cursus iaculis tincidunt. Enim sed varius dignissim a sodales lacus sit nunc....",
        dateTime: new Date().toDateString().replace(/^... /, ""),
        place: "GURU RAVIDASS COMMUNITY CENTRE CALGARY",
      },
    ],
    news: [
      {
        id: 1,
        title: "Guide to  Gurudwara",
        image:
          "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        body: "Lorem ipsum dolor sit amet consectetur. Id sit purus id sed adipiscing mattis nisi. Elementum enim cursus iaculis tincidunt. Enim sed varius dignissim a sodales lacus sit nunc....",
        dateTime: new Date().toDateString().replace(/^... /, ""),
        place: "GURU RAVIDASS COMMUNITY CENTRE CALGARY",
      },
      {
        id: 2,
        title: "Guide to  Gurudwara",
        image:
          "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        body: "Lorem ipsum dolor sit amet consectetur. Id sit purus id sed adipiscing mattis nisi. Elementum enim cursus iaculis tincidunt. Enim sed varius dignissim a sodales lacus sit nunc....",
        dateTime: new Date().toDateString().replace(/^... /, ""),
        place: "GURU RAVIDASS COMMUNITY CENTRE CALGARY",
      },
      {
        id: 3,
        title: "Guide to  Gurudwara",
        image:
          "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        body: "Lorem ipsum dolor sit amet consectetur. Id sit purus id sed adipiscing mattis nisi. Elementum enim cursus iaculis tincidunt. Enim sed varius dignissim a sodales lacus sit nunc....",
        dateTime: new Date().toDateString().replace(/^... /, ""),
        place: "GURU RAVIDASS COMMUNITY CENTRE CALGARY",
      },
    ],
    videos: [
      {
        link: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1566816874952-efe670a52a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1566816874952-efe670a52a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1566816874952-efe670a52a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=833&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1545562083-a600704fa486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1566816874952-efe670a52a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
      {
        link: "https://images.unsplash.com/photo-1605368689763-cebf5db26f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80",
        location: {
          longitude: "34235145",
          latitude: "32141235",
        },
        title: "Image",
      },
    ],
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%",
        maxHeight: "100vh",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          maxHeight: "823px",
          minHeight: "70vh",
          height: "100%",
          margin: "50px",
          marginBottom: "0px",
          borderRadius: "16px",
          border: "1px solid #9A9FB0",
          padding: "32px",
          gap: "24px",
          overflow: "auto",
        }}
      >
        <Typography
          sx={{
            fontWeight: 300,
            color: "#000",
            opacity: "0.8",
            borderBottom: "2px solid #9A9FB0",
            paddingBottom: "20px",
            margin: 0,
          }}
          variant="h4"
          component="h2"
        >
          {name}
        </Typography>

        {data?.images?.length > 0 && (
          <div>
            <label
              style={{
                padding: "10px 0",
                display: "block",
                fontSize: "20px",
                fontWeight: "600",
                opacity: "0.8",
              }}
            >
              Images
            </label>
            <Grid container gap={1}>
              {data?.images?.map((each) => (
                <Grid item>
                  <img
                    width="120px"
                    style={{ borderRadius: "5px", cursor: "pointer" }}
                    height="120px"
                    src={each.link}
                    alt="Image"
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        {data?.journals?.length > 0 && (
          <div>
            <label
              style={{
                padding: "10px 0",
                display: "block",
                fontSize: "20px",
                fontWeight: "600",
                opacity: "0.8",
              }}
            >
              Journals
            </label>
            <Grid container gap={1} direction="column">
              {data?.journals?.map((each) => (
                <Grid item>
                  <Card
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      flexDirection: "row",
                      borderRadius: "5px",
                    }}
                  >
                    <div>
                      <img
                        width="120px"
                        style={{
                          borderRadius: "5px",
                          cursor: "pointer",
                          margin: "10px",
                          display: "block",
                        }}
                        height="120px"
                        src={each.image}
                        alt="Image"
                      />
                    </div>
                    <CardContent
                      sx={{
                        padding: "10px",
                        ":last-child": {
                          paddingBottom: "10px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "20px",
                          lineHeight: "24px",
                          color: "#212151",
                          opacity: "0.9",
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        {each.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#212151",
                          opacity: "0.9",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {each.body}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          gap: "20px",
                          alignItems: "center",
                          marginTop: "20px",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: "400",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#212151",
                            opacity: "0.9",
                          }}
                        >
                          {each.dateTime}
                        </div>
                        <div
                          style={{
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "19px",
                            color: "#212151",
                            opacity: "0.9",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#212151",
                              opacity: "0.4",
                              borderRadius: "100%",
                              display: "inline-flex",
                            }}
                          ></span>
                          {each.place}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        {data?.news?.length > 0 && (
          <div>
            <label
              style={{
                padding: "10px 0",
                display: "block",
                fontSize: "20px",
                fontWeight: "600",
                opacity: "0.8",
              }}
            >
              News
            </label>
            <Grid container gap={1} direction="column">
              {data?.news?.map((each) => (
                <Grid item>
                  <Card
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      alignItems: "center",
                      flexDirection: "row",
                      borderRadius: "5px",
                    }}
                  >
                    <div>
                      <img
                        width="120px"
                        style={{
                          borderRadius: "5px",
                          cursor: "pointer",
                          margin: "10px",
                          display: "block",
                        }}
                        height="120px"
                        src={each.image}
                        alt="Image"
                      />
                    </div>
                    <CardContent
                      sx={{
                        padding: "10px",
                        ":last-child": {
                          paddingBottom: "10px",
                        },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "20px",
                          lineHeight: "24px",
                          color: "#212151",
                          opacity: "0.9",
                        }}
                        gutterBottom
                        variant="h6"
                        component="div"
                      >
                        {each.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "16px",
                          lineHeight: "19px",
                          color: "#212151",
                          opacity: "0.9",
                        }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {each.body}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "start",
                          gap: "20px",
                          alignItems: "center",
                          marginTop: "20px",
                        }}
                      >
                        <div
                          style={{
                            fontWeight: "400",
                            fontSize: "20px",
                            lineHeight: "30px",
                            color: "#212151",
                            opacity: "0.9",
                          }}
                        >
                          {each.dateTime}
                        </div>
                        <div
                          style={{
                            fontWeight: "500",
                            fontSize: "20px",
                            lineHeight: "19px",
                            color: "#212151",
                            opacity: "0.9",
                            display: "flex",
                            justifyContent: "start",
                            alignItems: "center",
                            gap: 8,
                          }}
                        >
                          <span
                            style={{
                              width: "8px",
                              height: "8px",
                              backgroundColor: "#212151",
                              opacity: "0.4",
                              borderRadius: "100%",
                              display: "inline-flex",
                            }}
                          ></span>
                          {each.place}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        )}
        {data?.videos?.length > 0 && (
          <div>
            <label
              style={{
                padding: "10px 0",
                display: "block",
                fontSize: "20px",
                fontWeight: "600",
                opacity: "0.8",
              }}
            >
              Videos
            </label>
            <Grid container gap={1}>
              {data?.videos?.map((each) => (
                <Grid item>
                  <img
                    width="120px"
                    style={{ borderRadius: "5px", cursor: "pointer" }}
                    height="120px"
                    src={each.link}
                    alt="Image"
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        )}
      </Container>

      <Kiosk_Footer handleBack={"/kiosk/location"} handleNext={`/kiosk/location/${name}/${"place"}`} />
    </Container>
  );
};

export default index;
