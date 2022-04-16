import { React } from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Client from '../pages/clients/Client';
import Dashboard from '../pages/dashboard/Dashboard';
import Reports from '../pages/reports/Reports';
import Products from '../pages/products/Products';
import Users from '../pages/users/Users';
import Images from '../pages/images/Images';
import Calendar from '../pages/calendar/Calendar'

function Routes() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/client" component={Client} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/reports" component={Reports} />
      <Route path="/products" component={Products} />
      <Route path="/users" component={Users} />
      <Route path="/images" component={Images} />
      <Route path="/calendar" component={Calendar} />
    </>
  )
}

export default Routes