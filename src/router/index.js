import React from 'react';
import OrdersList from '../pages/Orders/OrdersList';
import EditProjectInfo from '../pages/EditProjectInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from '../App';

const Index = ({ history }) => (
  <Router history={history}>
    <App>
      <Switch>
        {/*<Route exact path="/" component={ProjectInfiList} />*/}
        <Route path="/orders" component={OrdersList} />
        {/*<Route exact path="/orders/new" component={ManageProjectInfo} />*/}
        <Route path="/ProjectInfo/:id" component={EditProjectInfo} />
      </Switch>
    </App>
  </Router>
);
export default Index;
