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
import MaxHeightTextarea from "src/utils/StyledTextArea";

const Blogs = ({ setFormik }) => {
  const formik = useFormik({
    initialValues: {
      blogsArray: [],
      title: "",
      image: null,
      body: "",
      submit: null,
    },
    validationSchema: Yup.object({
      blogsArray: Yup.array()
        .required("Blog is required")
        .test("blogsArray", "At least one blog is required", (value) => {
          return value.length > 0;
        }),
      // body: Yup.string().required("Discription is Required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
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
  }, [formik.values]);
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
              error={!!(formik.touched.title && formik.errors.title)}
              fullWidth
              helperText={formik.touched.title && formik.errors.title}
              label="Title"
              name="title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </Grid>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <MuiFileInput
                onChange={(file) => {
                  if (file) {
                    formik.setFieldValue("image", file);
                  } else {
                    formik.setFieldValue("image", null);
                  }
                }}
                value={formik.values.image}
                label="Upload Image"
                error={!!(formik.touched.image && formik.errors.image)}
                fullWidth
                helperText={formik.touched.image && formik.errors.image}
                name="images"
                onBlur={formik.handleBlur}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <MaxHeightTextarea
              rows={7}
              error={!!(formik.touched.body && formik.errors.body)}
              helperText={formik.touched.body && formik.errors.body}
              onBlur={formik.handleBlur}
              placeholder="Description"
              name="body"
              onChange={formik.handleChange}
              value={formik.values.body}
            />
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                const title = formik.values.title;
                const image = formik.values.image;
                const body = formik.values.body;
                if (title && body && image) {
                  formik.setFieldValue("blogsArray", [
                    ...formik.values.blogsArray,
                    { title, image, body },
                  ]);
                  formik.setFieldValue("image", null);
                  formik.setFieldValue("title", "");
                  formik.setFieldValue("body", "");
                }
              }}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={12}>
            {formik.values.blogsArray.map(({ image, title, body }, index) => (
              <Accordion key={index}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <div>
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <img
                          src={URL.createObjectURL(image)}
                          alt="image"
                          width="100%"
                          height="100%"
                          style={{ borderRadius: "10px" }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" sx={{opacity:"0.8",margin:"10px 0px"}}>{title}</Typography>
                        <Typography variant="body1" sx={{fontWeight:"600",opacity:"0.8",margin:"10px 0px"}}>{new Date().toDateString()}</Typography>
                        <Typography variant="body1">{body}</Typography>
                      </Grid>
                    </Grid>
                    <Button
                      type="button"
                      onClick={() => {
                        const updatedblogs = [...formik.values.blogsArray];
                        updatedblogs.splice(index, 1);
                        formik.setFieldValue("blogsArray", updatedblogs);
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

export default Blogs;
