import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import { Login, Home } from "../screens";

interface RoutesProps {
    path:string;
    component:React.FC;
    private: boolean;
    exact?: boolean;
}

const routes: RoutesProps[] = [
  {path: '/home', component: Home, private: false},
  {path: '/login', component: Login, private: false}
]

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <Redirect to="/home"/>
      </Route>
      {routes.map((route,index)=>
        <Route key={index} path={route.path} component={route.component} exact={true} />
      )}
    </Switch>
  );
};

export default Routes;
