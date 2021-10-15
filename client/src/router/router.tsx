import { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/User/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';

const Router = (): ReactElement => {
  return (
    <>
      <Switch>
        <Route path="/admin/login">
          <Login />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  )
}

export default Router;