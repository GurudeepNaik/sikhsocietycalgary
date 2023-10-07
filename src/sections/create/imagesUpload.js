import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  TextField,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MuiFileInput } from "mui-file-input";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ImagesUpload = ({ setFormik }) => {
  const formik = useFormik({
    initialValues: {
      imagesArray: [],
      label: "",
      images: [],
      submit: null,
    },
    validationSchema: Yup.object({
      imagesArray: Yup.array()
        .required("Images is required")
        .test("imagesArray", "At least one image is required", (value) => {
          return value.length > 0;
        }),
    }),
    onSubmit: async (values, helpers) => {
      try {
        console.log(values);
        if(values.imagesArray.length===0)throw Error("Images are required or skip it")
        
        console.log(values);
      } catch (err) {
        console.log(err);
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });
  useEffect(() => {
    setFormik(formik);
  }, [formik,formik.values]);
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
              error={!!(formik.touched.label && formik.errors.label)}
              fullWidth
              helperText={formik.touched.label && formik.errors.label}
              label="Album Name"
              name="label"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.label}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <MuiFileInput
                multiple
                onChange={(files) => {
                  if (files.length > 0) {
                    const newImages = Array.from(files);
                    formik.setFieldValue("images", [...formik.values.images, ...newImages]);
                  } else {
                    formik.setFieldValue("images", []);
                  }
                }}
                value={formik.values.images}
                label="Upload Images"
                error={!!(formik.touched.images && formik.errors.images)}
                fullWidth
                helperText={formik.touched.images && formik.errors.images}
                name="images"
                onBlur={formik.handleBlur}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            {formik.values.images.length > 0 && (
              <>
                <Typography variant="body2" sx={{ fontSize: "20px" }}>
                  Images
                </Typography>
                <ImageList sx={{ width: "100%", height: "100%", minHeight: 500,paddingBottom:"70px" }}>
                  {formik.values.images.map((image, index) => (
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
                          <IconButton
                            onClick={(index) => {
                              const updatedImages = [...formik.values.images];
                              updatedImages.splice(index, 1);
                              formik.setFieldValue("images", updatedImages);
                            }}
                          >
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
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const label = formik.values.label;
                const images = formik.values.images;
                if (label && images.length > 0) {
                  formik.setFieldValue("imagesArray", [
                    ...formik.values.imagesArray,
                    { label, images },
                  ]);
                  formik.setFieldValue("images", []);
                  formik.setFieldValue("label", "");
                }
              }}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            {formik.values.imagesArray.map(({ images, label }, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{label}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Grid container spacing={2}>
                      {images.map((file, fileIndex) => (
                        <Grid item xs={3}>
                          <img
                            key={fileIndex}
                            src={URL.createObjectURL(file)}
                            alt={`Image ${fileIndex}`}
                            width="100%"
                            height="100%"
                          />
                        </Grid>
                      ))}
                    </Grid>
                    <Button
                      type="button"
                      onClick={() => {
                        const updatedImages = [...formik.values.imagesArray];
                        updatedImages.splice(index, 1);
                        formik.setFieldValue("imagesArray", updatedImages);
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </AccordionDetails>
              </Accordion>
            ))}
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

export default ImagesUpload;
