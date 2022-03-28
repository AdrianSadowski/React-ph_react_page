import './styles/bootstrap.scss';
import './styles/global.scss';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import AboutUs from './components/views/AboutUs/AboutUs';
import Contact from './components/views/Contact/Contact';
import Homepage from './components/views/Homepage/Homepage';
import Offert from './components/views/Offert/Offert';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/onas" component={AboutUs} />
          <Route exact path="/oferta" component={Offert} />
          <Route exact path="/kontakt" component={Contact} />
          <Route path="*" component={Homepage} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export {App};
