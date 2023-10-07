import React from "react";
import { Grid } from "@mui/material";
import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import HomeIcon from "@heroicons/react/24/solid/HomeIcon";
import ArrowRightIcon from "@heroicons/react/24/solid/ArrowRightIcon";
import Link from "next/link";

export const Kiosk_Footer = ({ hasHome = true, hasBack = true, handleNext, handleBack }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      maxWidth="xl"
      alignItems="center"
      marginTop={10}
    >
      <Link
        href={handleBack}
        style={{ position: "relative", cursor: hasBack ? "pointer" : "none",pointerEvents:hasBack ? "all" : "none" }}
      >
        {hasBack ? (
          <svg
            width="203"
            height="90"
            viewBox="0 0 203 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Rectangle 1"
              d="M203 10C203 4.47715 198.523 0 193 0H31.5043C27.9884 0 24.7308 1.84641 22.9247 4.86295L0.949997 41.564C0.328323 42.6023 0 43.7898 0 45C0 46.2102 0.328323 47.3977 0.949997 48.436L22.9247 85.137C24.7308 88.1536 27.9884 90 31.5043 90H193C198.523 90 203 85.5228 203 80V10Z"
              fill="url(#paint0_linear_1_265)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_265"
                x1="369.367"
                y1="-231.644"
                x2="-3.2277"
                y2="-34.9788"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9CFFA" />
                <stop offset="1" stop-color="#5755FF" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          <svg
            width="203"
            height="90"
            viewBox="0 0 203 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Rectangle 1"
              d="M203 10C203 4.47715 198.523 0 193 0H31.5043C27.9884 0 24.7308 1.84641 22.9247 4.86295L0.949997 41.564C0.328323 42.6023 0 43.7898 0 45C0 46.2102 0.328323 47.3977 0.949997 48.436L22.9247 85.137C24.7308 88.1536 27.9884 90 31.5043 90H193C198.523 90 203 85.5228 203 80V10Z"
              fill="#E6E6E6"
            />
          </svg>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <ArrowLeftIcon
            width={20}
            height={20}
            fontWeight={600}
            color={hasBack ? "#fff" : "#000"}
          />
          <h1
            style={{
              color: hasBack ? "#fff" : "#000",
              fontFamily: "Inter-Medium, Helvetica",
              fontSize: "24px",
              fontWeight: 500,
              letterSpacing: 0,
              lineHeight: "normal",
            }}
          >
            Back
          </h1>
        </div>
      </Link>
      {hasHome && (
        <Link href="/kiosk/language" style={{ cursor: "pointer", textDecoration: "none" }}>
          <div
            style={{
              alignItems: "center",
              background:
                "linear-gradient(to right, rgb(148, 116, 253) 0%, rgb(87.46, 85, 255) 100%)",
              minHeight: "90px",
              minWidth: "316px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              borderRadius: "10px",
              color: "white",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 10,
              }}
            >
              <HomeIcon width={20} height={20} fontWeight={600} color="#fff" />
              <h1
                style={{
                  color: "#fff",
                  fontFamily: "Inter-Medium, Helvetica",
                  fontSize: "24px",
                  fontWeight: 500,
                  letterSpacing: 0,
                  lineHeight: "normal",
                }}
              >
                Home
              </h1>
            </div>
          </div>
        </Link>
      )}
      <Link href={handleNext} style={{ position: "relative", cursor: "pointer" }}>
        <svg
          width="203"
          height="90"
          viewBox="0 0 203 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Rectangle 1"
            d="M0 10C0 4.47715 4.47715 0 10 0H171.496C175.012 0 178.269 1.84641 180.075 4.86295L202.05 41.564C202.672 42.6023 203 43.7898 203 45C203 46.2102 202.672 47.3977 202.05 48.436L180.075 85.137C178.269 88.1536 175.012 90 171.496 90H10C4.47715 90 0 85.5228 0 80V10Z"
            fill="url(#paint0_linear_1_142)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_142"
              x1="-166.367"
              y1="-231.644"
              x2="206.228"
              y2="-34.9788"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D9CFFA" />
              <stop offset="1" stop-color="#5755FF" />
            </linearGradient>
          </defs>
        </svg>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontFamily: "Inter-Medium, Helvetica",
              fontSize: "24px",
              fontWeight: 500,
              letterSpacing: 0,
              lineHeight: "normal",
            }}
          >
            Next
          </h1>
          <ArrowRightIcon width={20} height={20} fontWeight={600} color="#fff" />
        </div>
      </Link>
    </Grid>
  );
};
