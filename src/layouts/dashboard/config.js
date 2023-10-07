import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import LockClosedIcon from '@heroicons/react/24/solid/LockClosedIcon';
import ShoppingBagIcon from '@heroicons/react/24/solid/ShoppingBagIcon';
import BookOpenIcon from '@heroicons/react/24/solid/BookOpenIcon';
// import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CameraIcon from '@heroicons/react/24/solid/CameraIcon';
import XCircleIcon from '@heroicons/react/24/solid/XCircleIcon';
import { SvgIcon } from '@mui/material';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';

export const items = [
  {
    title: 'Images',
    path: '/image',
    icon: (
      <SvgIcon fontSize="small">
        <CameraIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Create',
    path: '/create',
    icon: (
      <SvgIcon fontSize="small">
        <PlusIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Artists',
  //   path: '/artists',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Venue',
  //   path: '/venues',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Gig',
  //   path: '/gigs',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Genre',
  //   path: '/genre',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Event Type',
  //   path: '/eventtype',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   )
  // },
];
