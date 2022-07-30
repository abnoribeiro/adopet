import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  Login,
  Home,
  AdoptionList,
  Profile,
  SendingMessages,
  SignUp
} from "../screens";

interface RoutesProps {
    path:string;
    component:React.FC;
    private: boolean;
    exact?: boolean;
}

const routes: RoutesProps[] = [
  {path: '/home', component: Home, private: false},
  {path: '/login', component: Login, private: false},
  {path: '/adoption-list', component: AdoptionList, private: false},
  {path: '/profile', component: Profile, private: false},
  {path: '/sending-messages', component: SendingMessages, private: false},
  {path: '/sign-up', component: SignUp, private: false},
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
