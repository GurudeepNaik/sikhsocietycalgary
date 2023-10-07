import { Grid, Box, TextField, Typography, Button, Alert } from "@mui/material";
import { useFormik } from "formik";
import { useAuth } from "src/hooks/use-auth";
import * as Yup from "yup";

export const AddIndustry = ({ setComponent }) => {
  const { postGenre } = useAuth();
  const formik = useFormik({
    initialValues: { genre: "" },
    validationSchema: Yup.object({
      genre: Yup.string().max(255).required("genre is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const data = { genre: values.genre };
        await postGenre(data);
        setComponent("INDUSTRIES");
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    },
  });

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
          <div>
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
                    error={!!(formik.touched.genre && formik.errors.genre)}
                    fullWidth
                    helperText={formik.touched.genre && formik.errors.genre}
                    label="Genre"
                    name="genre"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.category}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} margin={2}>
                <Grid item xs={2}>
                  <Button
                    fullWidth
                    size="small"
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#ec3e97",
                      "&:hover": {
                        backgroundColor: "#50c2b5",
                      },
                    }}
                  >
                    Add Genre
                  </Button>
                </Grid>
              </Grid>
              {formik.errors.submit && (
                <Typography color="error" sx={{ mt: 3 }} variant="body2">
                  {formik.errors.submit}
                </Typography>
              )}
            </form>
          </div>
        </Box>
      </Box>
    </>
  );
};
