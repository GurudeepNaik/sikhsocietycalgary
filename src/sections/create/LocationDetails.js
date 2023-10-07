import { Autocomplete, Box, FormControl, Grid, TextField } from "@mui/material";
import { City } from "country-state-city";
import { randomUUID } from "crypto";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { countries } from "src/utils/Countries";
import * as Yup from "yup";

const LocationDetails = ({ setFormik }) => {
  const [cities, setCities] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      place: "",
      country: {
        name: "Canada",
        isoCode: "CA",
        flag: "🇨🇦",
        phonecode: "1",
        currency: "CAD",
        latitude: "60.00000000",
        longitude: "-95.00000000",
        timezones: [
          {
            zoneName: "America/Atikokan",
            gmtOffset: -18000,
            gmtOffsetName: "UTC-05:00",
            abbreviation: "EST",
            tzName: "Eastern Standard Time (North America)",
          },
          {
            zoneName: "America/Blanc-Sablon",
            gmtOffset: -14400,
            gmtOffsetName: "UTC-04:00",
            abbreviation: "AST",
            tzName: "Atlantic Standard Time",
          },
          {
            zoneName: "America/Cambridge_Bay",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America)",
          },
          {
            zoneName: "America/Creston",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America)",
          },
          {
            zoneName: "America/Dawson",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America)",
          },
          {
            zoneName: "America/Dawson_Creek",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America)",
          },
          {
            zoneName: "America/Edmonton",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America)",
          },
          {
            zoneName: "America/Fort_Nelson",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America)",
          },
          {
            zoneName: "America/Glace_Bay",
            gmtOffset: -14400,
            gmtOffsetName: "UTC-04:00",
            abbreviation: "AST",
            tzName: "Atlantic Standard Time",
          },
          {
            zoneName: "America/Goose_Bay",
            gmtOffset: -14400,
            gmtOffsetName: "UTC-04:00",
            abbreviation: "AST",
            tzName: "Atlantic Standard Time",
          },
          {
            zoneName: "America/Halifax",
            gmtOffset: -14400,
            gmtOffsetName: "UTC-04:00",
            abbreviation: "AST",
            tzName: "Atlantic Standard Time",
          },
          {
            zoneName: "America/Inuvik",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America",
          },
          {
            zoneName: "America/Iqaluit",
            gmtOffset: -18000,
            gmtOffsetName: "UTC-05:00",
            abbreviation: "EST",
            tzName: "Eastern Standard Time (North America",
          },
          {
            zoneName: "America/Moncton",
            gmtOffset: -14400,
            gmtOffsetName: "UTC-04:00",
            abbreviation: "AST",
            tzName: "Atlantic Standard Time",
          },
          {
            zoneName: "America/Nipigon",
            gmtOffset: -18000,
            gmtOffsetName: "UTC-05:00",
            abbreviation: "EST",
            tzName: "Eastern Standard Time (North America",
          },
          {
            zoneName: "America/Pangnirtung",
            gmtOffset: -18000,
            gmtOffsetName: "UTC-05:00",
            abbreviation: "EST",
            tzName: "Eastern Standard Time (North America",
          },
          {
            zoneName: "America/Rainy_River",
            gmtOffset: -21600,
            gmtOffsetName: "UTC-06:00",
            abbreviation: "CST",
            tzName: "Central Standard Time (North America",
          },
          {
            zoneName: "America/Rankin_Inlet",
            gmtOffset: -21600,
            gmtOffsetName: "UTC-06:00",
            abbreviation: "CST",
            tzName: "Central Standard Time (North America",
          },
          {
            zoneName: "America/Regina",
            gmtOffset: -21600,
            gmtOffsetName: "UTC-06:00",
            abbreviation: "CST",
            tzName: "Central Standard Time (North America",
          },
          {
            zoneName: "America/Resolute",
            gmtOffset: -21600,
            gmtOffsetName: "UTC-06:00",
            abbreviation: "CST",
            tzName: "Central Standard Time (North America",
          },
          {
            zoneName: "America/St_Johns",
            gmtOffset: -12600,
            gmtOffsetName: "UTC-03:30",
            abbreviation: "NST",
            tzName: "Newfoundland Standard Time",
          },
          {
            zoneName: "America/Swift_Current",
            gmtOffset: -21600,
            gmtOffsetName: "UTC-06:00",
            abbreviation: "CST",
            tzName: "Central Standard Time (North America",
          },
          {
            zoneName: "America/Thunder_Bay",
            gmtOffset: -18000,
            gmtOffsetName: "UTC-05:00",
            abbreviation: "EST",
            tzName: "Eastern Standard Time (North America",
          },
          {
            zoneName: "America/Toronto",
            gmtOffset: -18000,
            gmtOffsetName: "UTC-05:00",
            abbreviation: "EST",
            tzName: "Eastern Standard Time (North America",
          },
          {
            zoneName: "America/Vancouver",
            gmtOffset: -28800,
            gmtOffsetName: "UTC-08:00",
            abbreviation: "PST",
            tzName: "Pacific Standard Time (North America",
          },
          {
            zoneName: "America/Whitehorse",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America",
          },
          {
            zoneName: "America/Winnipeg",
            gmtOffset: -21600,
            gmtOffsetName: "UTC-06:00",
            abbreviation: "CST",
            tzName: "Central Standard Time (North America",
          },
          {
            zoneName: "America/Yellowknife",
            gmtOffset: -25200,
            gmtOffsetName: "UTC-07:00",
            abbreviation: "MST",
            tzName: "Mountain Standard Time (North America",
          },
        ],
      },
      city: cities[0],
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Title is required")
        .test("name", "name is required", (value) => {
          return value !== "";
        }),
      place: Yup.string()
        .required("Place is required")
        .test("place", "Place is required", (value) => {
          return value !== "";
        }),
      city: Yup.object()
        .required("city is required")
        .test("city", "City is required", (value) => {
          return value.name !== "";
        }),
      country: Yup.object()
        .required("Country is required")
        .test("country", "Country is required", (value) => {
          return value?.timezones?.length > 0;
        }),
    }),
    onSubmit: async (values, helpers) => {
      console.log(values);
      localStorage.setItem("location", JSON.stringify(values));
      try {
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  useEffect(() => {
    setFormik(formik);
  }, []);

  useEffect(() => {
    setFormik(formik);
  }, [formik.values]);

  useEffect(() => {
    if (formik?.values?.country?.isoCode) {
      const cities = City.getCitiesOfCountry(formik?.values?.country?.isoCode);
      if (cities) {
        setCities(cities);
      } else {
        setCities([]);
      }
    }
  }, [formik.values.country]);
  return (
    <Box
      sx={{
        flex: "1 1 auto",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          maxWidth: "90%",
          width: "100%",
        }}
      >
        <Grid container spacing={2} margin={2}>
          <Grid item xs={6}>
            <TextField
              error={!!(formik.touched.name && formik.errors.name)}
              fullWidth
              helperText={formik.touched.name && formik.errors.name}
              label="Title"
              name="name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              error={!!(formik.touched.place && formik.errors.place)}
              fullWidth
              helperText={formik.touched.place && formik.errors.place}
              label="Place"
              name="place"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.place}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} margin={2}>
          <Grid item xs={6}>
            <Autocomplete
              fullWidth
              options={countries}
              value={formik.values.country}
              onChange={(event, newValue) => formik.setFieldValue("country", newValue)}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => (
                <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                  <img
                    loading="lazy"
                    width="20"
                    src={`https://flagcdn.com/w20/${option.isoCode.toLowerCase()}.png`}
                    srcSet={`https://flagcdn.com/w40/${option.isoCode.toLowerCase()}.png 2x`}
                    alt=""
                  />
                  {option.name}
                </Box>
              )}
              renderInput={(params) => (
                <TextField
                  name="country"
                  helperText={formik.touched.country && formik.errors.country}
                  onBlur={formik.handleBlur}
                  error={!!(formik.touched.country && formik.errors.country)}
                  {...params}
                  label="Choose a country"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <Autocomplete
              fullWidth
              options={cities}
              value={formik.values.city}
              onChange={(event, newValue) => formik.setFieldValue("city", newValue)}
              autoHighlight
              getOptionLabel={(option) => option.name}
              renderOption={(props, option) => {
                return (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                    key={Math.random() * 10000000000000}
                  >
                    {option.name}
                  </Box>
                );
              }}
              renderInput={(params) => (
                <TextField
                  name="city"
                  helperText={formik.touched.city && formik.errors.city}
                  onBlur={formik.handleBlur}
                  error={!!(formik.touched.city && formik.errors.city)}
                  {...params}
                  label="Choose a city"
                  inputProps={{
                    ...params.inputProps,
                    autoComplete: "new-password",
                  }}
                />
              )}
            />
          </Grid>
        </Grid>

        {formik.errors.submit && (
          <Typography color="error" sx={{ mt: 3 }} variant="body2">
            {formik.errors.submit}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default LocationDetails;
