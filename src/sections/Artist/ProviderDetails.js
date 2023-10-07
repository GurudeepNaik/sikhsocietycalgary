import {
  Grid,
  Box,
  Typography,
  Item,
  Paper,
  ImageListItem,
  List,
  ListItem,
  ListItemText,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@mui/material";
import { url } from "../../../constants";
import { useState } from "react";
import ChevronUpDownIcon from "@heroicons/react/24/solid/ChevronUpDownIcon";

export const ProviderDetails = ({ details }) => {
  const getComponents = () => {
    const components = [];
    // const [expanded, setExpanded] = useState(false);

    // const handleChange = (panel) => (event, isExpanded) => {
    //   setExpanded(isExpanded ? panel : false);
    // };
    for (let property in details) {
      if (
        details[property] !== null &&
        property !== "password" &&
        property !== "_id" &&
        property !== "createdAt" &&
        property !== "updatedAt" &&
        property !== "avatar" &&
        property !== "__v" &&
        property !== "bandmembers" &&
        property !== "influences" &&
        property !== "otherchannels" &&
        property !== "songs" &&
        property !== "city" &&
        property !== "genre" &&
        property !== "followers" &&
        property !== "following" 
      ) {
        let propertyName = "";
        if (property === "username") propertyName = "User Name";
        else if (property === "email") propertyName = "Email";
        else if (property === "mobilenumber") propertyName = "Phone";
        else if (property === "type") propertyName = "Type";
        else if (property === "status") propertyName = "Status";
        else if (property === "address") propertyName = "Address";
        else if (property === "artistdraw") propertyName = "Artist Draw";
        else if (property === "bandname") propertyName = "Band Name";
        else if (property === "bio") propertyName = "Bio";
        else if (property === "facebookaccount") propertyName = "Facebook Account";
        else if (property === "instagramaccount") propertyName = "Instagram Account";
        else if (property === "youtubechannel") propertyName = "Youtube Channel";
        else if (property === "bandAvailability") propertyName = "Band Availability";
        else if (property === "bandmembers") propertyName = "Band Members";
        else if (property === "influences") propertyName = "Influences";
        else if (property === "otherchannels") propertyName = "Other Channels";
        else if (property === "city") propertyName = "City";
        else if (property === "songs") propertyName = "Songs";
        else if (property === "genre") propertyName = "Genre";
        else if (property === "followers") propertyName = "Followers";
        else if (property === "following") propertyName = "Following";
        else propertyName = property;
        if (typeof details[property] === "string" || typeof details[property] === "number") {
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
        } else if (typeof details[property] === "boolean") {
          components.push(
            <Grid item xs={6} key={property}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {propertyName}
                </Typography>
                <Typography variant="body1">{details[property] ? "True" : "False"}</Typography>
              </Paper>
            </Grid>
          );
        } 
        // else if (typeof details[property] === "object") {
        //   if (Array.isArray(details[property])) {
        //     console.log(details[property]);
        //     details[property].map((each) => {});
        //   } else {
        //     components.push(
        //       <Grid item xs={6} key={property}>
        //         <Paper elevation={3} sx={{ p: 2 }}>
        //           <Accordion expanded={expanded === property} onChange={handleChange(property)}>
        //             <AccordionSummary expandIcon={<div>V</div>} >
        //               <Typography variant="h6" sx={{ mb: 2 }}>
        //                 {propertyName}
        //               </Typography>
        //             </AccordionSummary>
        //             <AccordionDetails>
        //               <Typography variant="body1">
        //                 <List dense={true}>
        //                   {Object.keys(details[property]).map((each) => {
                            
        //                     return (
        //                       <ListItem>
        //                         <ListItemText primary={each} secondary={details[property][each]} />
        //                       </ListItem>
        //                     );
        //                   })}
        //                 </List>
        //               </Typography>
        //             </AccordionDetails>
        //           </Accordion>
        //         </Paper>
        //       </Grid>
        //     );
        //   }
        // }
      }
    }

    return components.reverse();
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
