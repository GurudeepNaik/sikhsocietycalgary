import { Grid, Box, Typography, Item, Paper, ImageListItem } from "@mui/material";
import { url } from "../../../constants";
export const ProviderDetails = ({ details }) => {
  const getComponents = () => {
    const components = [];
    console.log(details);
    for (let property in details) {
      if (
        details[property] !== null &&
        property !== "venue" &&
        property !== "artists" &&
        property !== "users" &&
        property !== "password" &&
        property !== "_id" &&
        property !== "members" && 
        property !== "songs" && 
        property !== "createdAt" && 
        property !== "updatedAt" &&  
        property !== "payment" &&  
        property !== "avatar" &&  
        property !== "__v"   
      ) {
        let propertyName = "";
        if (property === "gigtitle") propertyName = "Gig Title";
        else if (property === "gigcity") propertyName = "Gig City";
        else if (property === "giglocation") propertyName = "Location";
        else if (property === "gigtype") propertyName = "Type";
        else if (property === "numberofaudience") propertyName = "Number of Audience";
        else if (property === "gigdate") propertyName = "Gig Date";
        else if (property === "gigtimestart") propertyName = "Gig Start Time";
        else if (property === "gigtimeend") propertyName = "Gig End Time";
        else if (property === "status") propertyName = "Status";
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
