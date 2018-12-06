import React from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home';

import { RoversType } from '../../services/MarsPhotosAPI';

import { Menu, Icon } from 'antd';

class App extends React.Component {
  render() {
    // get all the type of rovers to create a route with regex validation
    // will generate something like /:rover(a|b|c)
    const allowedParameters = Object.values(RoversType);

    return (
      <div>
        <Menu
          selectedKeys={[this.props.currentPath.substr(1)]}
          mode="horizontal"
        >
          {Object.values(RoversType).map(type => {
            return (
              <Menu.Item key={type}>
                <Link to={'/' + type}>
                  <Icon type="camera" style={{ verticalAlign: '0em' }} />
                  {type}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
        <main>
          <Switch>
            {/* route for rover page */}
            <Route
              exact
              path={'/:rover(' + allowedParameters.join('|') + ')'}
              component={Home}
            />

            {/* catch all with redirect to default rover (curiosity) */}
            <Route render={() => <Redirect to="/curiosity" />} />
          </Switch>
        </main>
      </div>
    );
  }
}

const mapStateToProps = ({ router }) => ({
  currentPath: router.location.pathname
});

export default connect(
  mapStateToProps,
  null
)(App);
