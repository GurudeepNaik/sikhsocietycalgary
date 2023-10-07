import { useCallback, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { ProviderTable } from "src/sections/EventType/providers-table";
import { ProviderSearch } from "src/sections/EventType/provider-search";
import { useAuth } from "src/hooks/use-auth";
import { AddIndustry } from "src/sections/EventType/AddProvider";
import ListBulletIcon from "@heroicons/react/24/solid/ListBulletIcon";
import { applyPagination } from "src/utils/apply-pagination";

const Page = () => {
  const { getEventType, eventType } = useAuth();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [component, setComponent] = useState("INDUSTRIES");
  const useCustomers = (page, rowsPerPage) => {
    return useMemo(() => {
      return applyPagination(eventType, page, rowsPerPage);
    }, [page, rowsPerPage, eventType]);
  };

  const useCustomerIds = (customers) => {
    return useMemo(() => {
      return customers.map((customer) => customer._id);
    }, [customers]);
  };
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);
  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const handleRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);
  useEffect(() => {
    getEventType();
  }, []);
  const handleAddUser = (to) => {
    setComponent(to);
  };

  return (
    <>
      <Head>
        <title>Event Type | Circle Connect</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Event Type</Typography>
              </Stack>
              <div>
                <Button
                  onClick={() =>
                    handleAddUser(component === "INDUSTRIES" ? "ADD_INDUSTRY" : "INDUSTRIES")
                  }
                  startIcon={
                    (component === "INDUSTRIES" && (
                      <SvgIcon fontSize="small">
                        <PlusIcon />
                      </SvgIcon>
                    )) ||
                    (component === "ADD_INDUSTRY" && (
                      <SvgIcon fontSize="small">
                        <ListBulletIcon />
                      </SvgIcon>
                    ))
                  }
                  variant="contained"
                  sx={{
                    backgroundColor: "#ec3e97",
                    "&:hover": {
                      backgroundColor: "#50c2b5",
                    },
                  }}
                >
                  {component === "INDUSTRIES" && "Add"}
                  {component === "ADD_INDUSTRY" && "List"}
                </Button>
              </div>
            </Stack>
            {component === "INDUSTRIES" && (
              <>
                <ProviderSearch customersSelection={customersSelection} />
                {eventType.length > 0 && (
                  <ProviderTable
                    count={eventType.length}
                    items={customers}
                    onDeselectAll={customersSelection.handleDeselectAll}
                    onDeselectOne={customersSelection.handleDeselectOne}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleRowsPerPageChange}
                    onSelectAll={customersSelection.handleSelectAll}
                    onSelectOne={customersSelection.handleSelectOne}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    selected={customersSelection.selected}
                  />
                )}
              </>
            )}
            {component === "ADD_INDUSTRY" && <AddIndustry setComponent={setComponent} />}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
