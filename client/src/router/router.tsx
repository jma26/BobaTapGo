import { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/User/Login/Login';

const Router = (): ReactElement => {
  return (
    <>
      <Switch>
        <Route path="/admin/login">
          <Login />
        </Route>
      </Switch>
    </>
  )
}

export default Router;