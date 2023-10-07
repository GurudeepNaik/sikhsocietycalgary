import { useCallback, useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from 'src/hooks/use-selection';
import { Layout as DashboardLayout } from 'src/layouts/dashboard/layout';
import { ProviderTable } from 'src/sections/Gig/providers-table';
import { ProviderSearch } from 'src/sections/Gig/provider-search';
import { useAuth } from 'src/hooks/use-auth';
import { ProviderDetails } from 'src/sections/Gig/ProviderDetails';
import ListBulletIcon from '@heroicons/react/24/solid/ListBulletIcon';

const Page = () => {
  const auth = useAuth();
  const {getGigs,gigs}=auth
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [component, setComponent] = useState("USERS");
  const [detail, setDetail] = useState({});
  const [data,setData]=useState([]);
  // const [lastPage,setLastPage]=useState(1);
  const [total,setTotal]=useState(0);
  useEffect(()=>{
    setData(gigs?.data||[])
    setTotal(gigs?.total||0)
  },[gigs?.current_page , gigs])
  
  const useCustomerIds = (customers) => {
    return useMemo(
      () => {
        return customers.map((customer) => customer._id);
      },
      [data]
    );
  };

  const customersIds = useCustomerIds(data);
  const customersSelection = useSelection(customersIds);
  const handlePageChange = useCallback(
    (event, value) => {
      setPage(value);
      getGigs(value+1);
    },
    []
  );

  const handleRowsPerPageChange = useCallback(
    (event) => {
      setRowsPerPage(event.target.value);
    },
    []
  );
  
  useEffect(()=>{
    getGigs(1);
  },[])

  const handleAddUser=(to)=>{
      setComponent(to)
  }
  const onDetailClick=(detail)=>{
      setDetail(detail);
      setComponent("USER_DETAILS");
  }
  return (
    <>
      <Head>
        <title>
          Gigs | Sikh Society, Calgary
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1}>
                <Typography variant="h4">
                  Gigs
                </Typography>
              </Stack>
              <div>
              {component ==="USER_DETAILS" &&
                <Button
                  onClick={()=>handleAddUser("USERS")}
                  startIcon={(
                    <SvgIcon fontSize="small">
                    <ListBulletIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  sx={{
                    backgroundColor: "#0056e4",
                    "&:hover": {
                      backgroundColor: "#50c2b5",
                    },
                  }}
                >
                 List
                </Button>
              }
              </div>
            </Stack>
          {component==="USERS" &&
          <>
          <ProviderSearch customersSelection={customersSelection}/>
            {
              data.length >0 && <ProviderTable
              count={total}
              items={data}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage}
              selected={customersSelection.selected}
              onRowClick={onDetailClick}
            />
            }
          </>
           }  
           {component==="USER_DETAILS" &&
           <ProviderDetails
            setComponent={setComponent}
            details={detail}
           />
           }
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
