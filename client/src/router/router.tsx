import { ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/Login';

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