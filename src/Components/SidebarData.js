import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsIcon from '@mui/icons-material/Groups';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PersonIcon from '@mui/icons-material/Person';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DateRangeIcon from '@mui/icons-material/DateRange';
import BarChartIcon from '@mui/icons-material/BarChart';


export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home"
  },
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/dashboard"
  },
  {
    title: "Reports",
    icon: <AnalyticsIcon />,
    link: "/reports"
  },
  {
    title: "Client",
    icon: <GroupsIcon />,
    link: "client"
  },
  {
    title: "Products",
    icon: <ShoppingBagIcon />,
    link: "products"
  },
  {
    title: "Users",
    icon: <PersonIcon />,
    link: "users"
  },
  {
    title: "Images",
    icon: <AddAPhotoIcon />,
    link: "images"
  },
  {
    title: "Calender",
    icon: <DateRangeIcon />,
    link: "calender"
  },
  {
    title: "Chart",
    icon: <BarChartIcon />,
    link: "chart"
  },
]