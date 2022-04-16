import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DateRangeIcon from '@mui/icons-material/DateRange';



export const SidebarData =
  [
    {
      title: "Home",
      icon: <HomeIcon />,
      path: "/",
    },
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      path: "/dashboard"
    },
    {
      title: "Reports",
      icon: <AnalyticsIcon />,
      path: "/reports"
    },
    {
      title: "Client",
      icon: <GroupsIcon />,
      path: "client"
    },
    {
      title: "Products",
      icon: <ShoppingBagIcon />,
      path: "products"
    },
    {
      title: "Users",
      icon: <PersonIcon />,
      path: "users"
    },
    {
      title: "Images",
      icon: <AddAPhotoIcon />,
      path: "images"
    },
    {
      title: "Calendar",
      icon: <DateRangeIcon />,
      path: "calendar"
    }
  ]
