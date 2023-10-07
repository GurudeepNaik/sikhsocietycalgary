import { useCallback, useEffect, useMemo, useState } from "react";
import Head from "next/head";
import { subDays, subHours } from "date-fns";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { Box, Button, Container, Stack, SvgIcon, Typography, Modal } from "@mui/material";
import { useSelection } from "src/hooks/use-selection";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CustomTable } from "src/sections/Image/Table";
import { Search } from "src/sections/Image/Search";
import { applyPagination } from "src/utils/apply-pagination";
import { url } from "../../constants";
import { useAuth } from "src/hooks/use-auth";
import axios from "axios";
import { AddUser } from "src/sections/Image/Add";
import { Details } from "src/sections/Image/Details";
import ListBulletIcon from "@heroicons/react/24/solid/ListBulletIcon";

const Page = () => {
  let { data = [], getData = () => {} } = useAuth();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [component, setComponent] = useState("LIST");
  const [detail, setDetail] = useState({});

  const columns = ["Name", "Place", "Location/City", "Total Images"];
  const keys = ["name", "place", "city", "total"];
  const useCustomers = (page, rowsPerPage) => {
    return useMemo(() => {
      return applyPagination(data, page, rowsPerPage);
    }, [page, rowsPerPage, data]);
  };

  const useCustomerIds = (customers) => {
    return useMemo(() => {
      return customers.map((customer) => customer._id);
    }, [customers]);
  };
  const customers = useCustomers(page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);
  const handlePageChange = useCallback((event, value) => setPage(value), []);
  const handleRowsPerPageChange = useCallback((event) => setRowsPerPage(event.target.value), []);
  useEffect(() => {
    getData();
  }, []);
  const handleComponent = (to) => setComponent(to);
  const onDetailClick = (detail) => {
    setDetail(detail);
    setComponent("VIEW");
  };
  return (
    <>
      <Head>
        <title>Images | Sikh Society, Calgary</title>
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
                <Typography variant="h4">Images</Typography>
              </Stack>
              <div>
                <Button
                  onClick={() => handleComponent(component === "LIST" ? "ADD" : "LIST")}
                  startIcon={
                    <SvgIcon fontSize="small">
                      {component === "LIST" ? <PlusIcon /> : <ListBulletIcon />}
                    </SvgIcon>
                  }
                  variant="contained"
                  sx={{
                    backgroundColor: "#0056e4",
                    "&:hover": {
                      backgroundColor: "#50c2b5",
                    },
                  }}
                >
                  {component === "LIST" ? "Add" : "List"}
                </Button>
              </div>
            </Stack>
            {component === "LIST" && (
              <>
                <Search customersSelection={customersSelection} />
                <CustomTable
                  count={data.length}
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
                  columns={columns}
                  keys={keys}
                  onRowClick={onDetailClick}
                />
              </>
            )}
            {component === "ADD" && <AddUser setComponent={setComponent} />}
            {component === "VIEW" && <Details setComponent={setComponent} details={detail} />}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
