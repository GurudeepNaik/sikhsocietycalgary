import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import TrashIcon from "@heroicons/react/24/solid/TrashIcon";
import {
  Button,
  Card,
  InputAdornment,
  OutlinedInput,
  SvgIcon,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import { useAuth } from "src/hooks/use-auth";

export const ProviderSearch = ({ customersSelection }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  let debounceTimer;

  const debounce = (callback, time) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, time);
  };

  const search = (e) => {
    debounce(() => {
      if (e.target.value === "") {
        // getUsers();
      } else {
        // getUsers(e.target.value);
      }
    }, 500);
  };
  // const handleDelete = () => {
  //   customersSelection.selected.map(async (each) => {
  //     await deleteVenue(each);
  //   });
  //   handleClose()
  // };
  return (
    <Card sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between" spacing={4}>
        <OutlinedInput
          fullWidth
          onChange={search}
          placeholder="Search Gigs"
          startAdornment={
            <InputAdornment position="start">
              <SvgIcon color="action" fontSize="small">
                <MagnifyingGlassIcon />
              </SvgIcon>
            </InputAdornment>
          }
          sx={{ maxWidth: 500 }}
        />
      </Stack>
    </Card>
  );
};
