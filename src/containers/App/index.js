import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import Home from '../Home';

import { RoversType } from '../../services/MarsPhotosAPI';

import { Menu, Icon } from 'antd';

const App = () => (
  <div>
    <Menu mode="horizontal">
      {Object.values(RoversType).map(type => {
        return (
          <Menu.Item key={type}>
            <Link to={'/' + type}>
              <Icon type="camera" />
              {type}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
    <main>
      <Route exact path="/:rover" component={Home} />
      {/* <Redirect from="/" to="/curiosity" /> */}
    </main>
  </div>
);

export default App;
