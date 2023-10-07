import { Grid, Box, Typography, Item, Paper, ImageListItem } from "@mui/material";
import { url } from "../../../constants";
export const UserDetails = ({ details }) => {
  const getComponents = () => {
    const components = [];
    for (let property in details) {
      if (
        details[property] !== null &&
        property !== "password" &&
        property !== "_id" &&
        property !== "city" && 
        property !== "createdAt" && 
        property !== "updatedAt" &&  
        property !== "avatar" &&  
        property !== "__v"   
      ) {
        let propertyName = "";
        if (property === "username") propertyName = "User Name";
        else if (property === "status") propertyName = "Status";
        else if (property === "email") propertyName = "Email";
        else if (property === "mobilenumber") propertyName = "Phone";
        else if (property === "dateofbirth") propertyName = "Date Of Birth";
        else if (property === "facebookaccount") propertyName = "Facebook Account";
        else if (property === "instagramaccount") propertyName = "Instagram Account";
        else if (property === "twiteraccount") propertyName = "Twitter Account";
        else if (property === "youtubechannel") propertyName = "Youtube Channel";
        else propertyName = property;
        components.push(
          <Grid item xs={6} key={property}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                {propertyName}
              </Typography>
              <Typography variant="body1">{details[property]}</Typography>
            </Paper>
          </Grid>
        );
      }
    }

    return components;
  };
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
          <Grid container spacing={2} margin={2}>
            {details.avatar && (
              <Grid
                item
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "192px",
                    height: "192px",
                    border: "6px solid #f4f4f4",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    style={{
                      width: "182px",
                      height: "182px",
                      objectFit: "cover",
                      borderRadius: "100%",
                      background: "#f2f2f2",
                      margin: "0px auto",
                      marginBottom: "40px",
                    }}
                    src={details.avatar}
                    alt="Profile"
                  />
                </div>
              </Grid>
            )}

            {getComponents()}
          </Grid>
        </Box>
      </Box>
    </>
  );
};
