import { Grid, Box, TextField, Typography, Button, Alert } from "@mui/material";
import { useFormik } from "formik";
import { useAuth } from "src/hooks/use-auth";
import * as Yup from "yup";

export const AddIndustry = ({ setComponent }) => {
  const { postEventType } = useAuth();
  const formik = useFormik({
    initialValues: { eventtype: "" },
    validationSchema: Yup.object({
      eventtype: Yup.string().max(255).required("event type is required"),
    }),
    onSubmit: async (values, helpers) => {
      try {
        const data = { eventtype: values.eventtype };
        await postEventType(data);
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
                    error={!!(formik.touched.eventtype && formik.errors.eventtype)}
                    fullWidth
                    helperText={formik.touched.eventtype && formik.errors.eventtype}
                    label="Event Type"
                    name="eventtype"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.eventtype}
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
                    Add Event Type
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
