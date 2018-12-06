import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Icon } from 'antd';

import StyleWrapper from './style';

class RoverPhoto extends Component {
  handleClick() {
    const handler = this.props.onClick;
    if (handler) {
      this.props.onClick(this.props.photo);
    }
  }
  render() {
    return (
      <StyleWrapper>
        <Card
          onClick={() => {
            this.handleClick();
          }}
          hoverable
          cover={<img alt="example" src={this.props.photo.img_src} />}
        >
          <Card.Meta
            title={
              <span>
                <Icon type="camera" />
                {this.props.photo.camera.name}
              </span>
            }
            description={'Taken on ' + this.props.photo.earth_date}
          />
        </Card>
      </StyleWrapper>
    );
  }
}

RoverPhoto.propTypes = {
  photo: PropTypes.object.isRequired,
  onClick: PropTypes.func
};

export { RoverPhoto };
