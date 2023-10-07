import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Input,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  ImageList,
  ImageListItem,
  ListSubheader,
  ImageListItemBar,
  Autocomplete,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "src/hooks/use-auth";
import { url } from "../../../constants";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import { MuiFileInput } from "mui-file-input";
import LocationSearchInput from "src/components/useLocation";
import GoogleMap from "src/components/GoogleMap/UseMap";

export const AddUser = (props) => {
  const { getCountries, cities = [], province = [], getProvince } = useAuth();
  const formik = useFormik({
    initialValues: {
      name: "",
      place: "",
      city: "",
      images: [],
      submit: null,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("name is required"),
      place: Yup.string().required("place is required"),
      city: Yup.string().required("city is required"),
      images: Yup.array().required("Images is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log(values);
        // const res = await axios.post(`${url}/user/adduser`, values);
        // if (res.data.status === 1) {
        //   window.location.reload();
        // } else {
        //   alert(res.data.message);
        // }
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

  const [images, setImages] = useState([]);
  const [address, setAddress] = useState({ name: "", lat: "", lng: "" });
  const [showMap, setShowMap] = useState(false);
  const [address1, setAddress1] = useState("");

  const handleImageChange = (files) => {
    if (files.length > 0) {
      const newImages = Array.from(files);
      setImages([...images, ...newImages]);
    } else {
      setImages([]);
    }
  };

  const handleImageDelete = (index) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);
  };
  console.log(address);
  return (
    <>
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
          <form
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{
              display: "flex",
            }}
          >
            <Grid container spacing={2} margin={2}>
              <Grid item xs={6}>
                <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
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
                <FormControl fullWidth>
                  <LocationSearchInput setAddress={setAddress} />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <MuiFileInput
                    multiple
                    onChange={handleImageChange}
                    value={images}
                    label="Upload Images"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                {images.length > 0 && (
                  <>
                    <Typography variant="body2" sx={{ fontSize: "20px" }}>
                      Images
                    </Typography>
                    <ImageList sx={{ width: "100%", height: "100%", minHeight: 500 }}>
                      {images.map((image, index) => (
                        <ImageListItem key={image.name}>
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Image ${index}`}
                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                            loading="lazy"
                          />
                          <ImageListItemBar
                            subtitle={image.name}
                            actionIcon={
                              <IconButton onClick={() => handleImageDelete(index)}>
                                <DeleteIcon color="error" />
                              </IconButton>
                            }
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </>
                )}
              </Grid>
              <Grid item xs={3}>
                <Button
                  fullWidth
                  size="medium"
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "#0056e4",
                    marginTop: images.length > 0 ? "50px" : "0",
                    "&:hover": {
                      backgroundColor: "#50c2b5",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>

            {formik.errors.submit && (
              <Typography color="error" sx={{ mt: 3 }} variant="body2">
                {formik.errors.submit}
              </Typography>
            )}
          </form>
          <Button onClick={() => setShowMap(true)}>Open</Button>
          <GoogleMap data={{ showMap, setShowMap, address: address1, setAddress: setAddress1 }} />
        </Box>
      </Box>
    </>
  );
};
